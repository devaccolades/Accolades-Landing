"use client";
import { Children, cloneElement, isValidElement, useEffect, useRef, } from "react";
/**
 * Section title effect: every character blurs/slides in, with a colour sweep (Magic UI "TextAnimate" + Dia colour sweep).
 * Children can contain <br/> and nested elements (e.g. <span className="ac">); only the text is split.
 */
const FXC = ["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
function split(node, ctr) {
    return Children.map(node, (child) => {
        if (typeof child === "string") {
            return child
                .split(/(\s+)/)
                .filter(Boolean)
                .map((tok, j) => /^\s+$/.test(tok) ? (" ") : (<span className="wd" aria-hidden="true" key={j}>
              {Array.from(tok).map((ch, k) => (<span className="c" style={{ "--n": ctr.n++ }} key={k}>
                  {ch}
                </span>))}
            </span>));
        }
        if (isValidElement(child) && child.type !== "br") {
            const el = child;
            return cloneElement(el, undefined, split(el.props.children, ctr));
        }
        return child;
    });
}
function textOf(node) {
    return Children.toArray(node)
        .map((c) => typeof c === "string" ? c
        : isValidElement(c) ? (c.type === "br" ? " " : textOf(c.props.children))
            : "")
        .join("")
        .replace(/\s+/g, " ")
        .trim();
}
export default function TextFx({ as: Tag = "h2", className = "", children, }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0;
        const run = () => {
            const cs = Array.from(el.querySelectorAll(".c"));
            if (reduce) {
                el.classList.add("tgo");
                return;
            }
            const rs = cs.map((c) => c.getBoundingClientRect()), tcs = cs.map((c) => getComputedStyle(c).color), L = Math.min(...rs.map((r) => r.left)), R = Math.max(...rs.map((r) => r.right)), W = Math.max(1, R - L);
            cs.forEach((c, i) => {
                const s = c.style;
                s.color = "transparent";
                s.webkitBackgroundClip = s.backgroundClip = "text";
                s.backgroundSize = W + "px 100%";
                s.backgroundPosition = L - rs[i].left + "px 0";
            });
            const D = Math.max(2200, cs.length * 28 + 900), BW = 0.34;
            raf = requestAnimationFrame(() => el.classList.add("tgo"));
            const tick = (now, st) => {
                const p = clamp((now - st) / D, 0, 1), e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2, c = -BW * 1.2 + e * (1 + BW * 2.9);
                let mid = "";
                FXC.forEach((col, k) => { mid += "," + col + " " + ((c - BW + (k / (FXC.length - 1)) * BW * 1.5) * 100).toFixed(2) + "%"; });
                const tail = mid + ",transparent " + ((c + BW) * 100).toFixed(2) + "%)", pos = ((c - BW * 1.7) * 100).toFixed(2) + "%";
                cs.forEach((ch, i) => { ch.style.backgroundImage = "linear-gradient(90deg," + tcs[i] + " " + pos + tail; });
                if (p < 1)
                    raf = requestAnimationFrame((t) => tick(t, st));
                else
                    cs.forEach((ch) => {
                        const s = ch.style;
                        s.color = s.backgroundImage = s.backgroundSize = s.backgroundPosition = s.backgroundClip = s.webkitBackgroundClip = "";
                    });
            };
            const st = performance.now();
            tick(st, st);
        };
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                io.disconnect();
                run();
            }
        }, { threshold: 0.6 });
        io.observe(el);
        return () => { io.disconnect(); cancelAnimationFrame(raf); };
    }, []);
    return (<Tag ref={ref} className={`${className} tfx`.trim()} aria-label={textOf(children)}>
      {split(children, { n: 0 })}
    </Tag>);
}
