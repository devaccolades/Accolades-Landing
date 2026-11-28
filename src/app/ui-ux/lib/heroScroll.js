import { visibleAnimation } from "./visibleAnimation";
import { HERO_VIDEO_URL } from "./data";

export function initHero(els) {
    const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), ease = (x) => 1 - Math.pow(1 - x, 3);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { pin, vid, rail, cue, b1, b2 } = els;
    let dur = 30, cur = 0, target = 0, dead = false, objUrl = null;
    let stopAnimation = null, lastProgress = -1, lastHeight = -1;
    const ctrl = new AbortController();
    const PALC = ["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"].map((h) => [
        parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16),
    ]);
    const BASEC = [236, 230, 216];
    const H1 = b1.querySelector("h1"), P1 = b1.querySelector("p"), C1 = b1.querySelector(".cta"), H2 = b2.querySelector("h2"), P2 = b2.querySelector("p");
    const hk1 = Array.from(H1.querySelectorAll(".hk")), hk2 = Array.from(H2.querySelectorAll(".hk")), w1 = Array.from(P1.querySelectorAll(".w>span")), w2 = Array.from(P2.querySelectorAll(".w>span"));
    const sc = (v, a, b) => (reduce ? 1 : clamp((v - a) / (b - a), 0, 1));
    function title(ch, r) {
        const n = ch.length, S = 5;
        for (let i = 0; i < n; i++) {
            const k = clamp(r * (1 + S) - (i / n) * S, 0, 1), e = ease(k), s = ch[i].style;
            if (k <= 0) {
                s.opacity = 0;
                s.transform = "translateY(22px)";
                s.filter = "blur(8px)";
                s.color = "";
                continue;
            }
            s.opacity = e;
            s.transform = k < 1 ? "translateY(" + ((1 - e) * 22).toFixed(1) + "px)" : "none";
            s.filter = k < 1 ? "blur(" + ((1 - e) * 8).toFixed(1) + "px)" : "none";
            if (k < 1) {
                const pc = PALC[i % 5], m = (1 - k) * 0.92;
                s.color = "rgb(" + Math.round(BASEC[0] + (pc[0] - BASEC[0]) * m) + "," + Math.round(BASEC[1] + (pc[1] - BASEC[1]) * m) + "," + Math.round(BASEC[2] + (pc[2] - BASEC[2]) * m) + ")";
            }
            else
                s.color = "";
        }
    }
    function words(w, r) {
        const n = w.length, S = 2.5;
        for (let i = 0; i < n; i++) {
            const k = ease(clamp(r * (1 + S) - (i / n) * S, 0, 1)), s = w[i].style;
            s.transform = "translateY(" + ((1 - k) * 110).toFixed(1) + "%) rotate(" + ((1 - k) * 3).toFixed(2) + "deg)";
            s.opacity = k;
            s.filter = k < 1 ? "blur(" + ((1 - k) * 8).toFixed(1) + "px)" : "none";
        }
    }
    function blk(el, r) {
        const k = ease(r), st = el.style;
        st.opacity = k;
        st.transform = "translateY(" + ((1 - k) * 28).toFixed(1) + "px)";
        st.filter = k < 1 ? "blur(" + ((1 - k) * 8).toFixed(1) + "px)" : "none";
        st.pointerEvents = k > 0.9 ? "auto" : "none";
    }
    function frame() {
        if (dead)
            return;
        const rect = pin.getBoundingClientRect(), H = innerHeight, tot = Math.max(1, pin.offsetHeight - H), p = clamp(-rect.top / tot, 0, 1);
        target = p;
        cur += (target - cur) * (reduce ? 1 : 0.09);
        if (Math.abs(target - cur) < 0.0002)
            cur = target;
        const want = clamp(cur / 0.9, 0, 1) * Math.max(0, dur - 0.05);
        if (vid.readyState >= 1 && !vid.seeking && Math.abs(vid.currentTime - want) > 0.015)
            vid.currentTime = want;
        // Keep the video catching up after an asynchronous seek, even when the
        // text animation has settled at the current scroll position.
        if (cur === lastProgress && H === lastHeight) return;
        lastProgress = cur;
        lastHeight = H;
        const v = (cur * tot) / H, tr = clamp((v - 2.1) / 1, 0, 1);
        /* block 1 scrolls up and out while block 2 rises in from below, at the speed of the scroll */
        b1.style.visibility = tr < 1 ? "visible" : "hidden";
        b1.style.transform = "translate3d(0," + (-tr * H).toFixed(1) + "px,0)";
        b2.style.visibility = tr > 0 ? "visible" : "hidden";
        b2.style.transform = "translate3d(0," + ((1 - tr) * H).toFixed(1) + "px,0)";
        if (tr < 1) {
            title(hk1, sc(v, 0, 0.9));
            words(w1, sc(v, 0.8, 1.5));
            blk(C1, sc(v, 1.45, 1.75));
        }
        if (tr > 0) {
            title(hk2, sc(v, 2.7, 3.4));
            words(w2, sc(v, 3.4, 4.1));
        }
        rail.style.height = cur * 100 + "%";
        cue.style.opacity = cur > 0.015 ? 0 : 1;
    }
    function start() {
        if (dead || stopAnimation)
            return;
        window.dispatchEvent(new CustomEvent("hero:ready"));
        stopAnimation = visibleAnimation(pin, frame);
    }
    // Match the supplied HTML: fully buffer the short-GOP video before the
    // scroll timeline starts, and briefly prime decoding without autoplaying it.
    const onLoaded = () => {
        dur = Number.isFinite(vid.duration) ? vid.duration : 30;
        lastProgress = -1;
        start();
    };
    vid.addEventListener("loadeddata", onLoaded);
    vid.addEventListener("error", start);
    const timeout = setTimeout(start, 6000);
    fetch(HERO_VIDEO_URL, { signal: ctrl.signal })
        .then(async response => {
            if (!response.ok) throw new Error("Hero video unavailable");
            const total = Number(response.headers.get("Content-Length")) || 0;
            if (!response.body) return response.blob();
            const reader = response.body.getReader();
            const chunks = [];
            let received = 0;
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                received += value.byteLength;
                if (total && !dead) window.dispatchEvent(new CustomEvent("hero:progress", {
                    detail: Math.min(100, received / total * 100),
                }));
            }
            return new Blob(chunks, { type: "video/mp4" });
        })
        .then(blob => {
            if (dead) return;
            objUrl = URL.createObjectURL(blob);
            vid.src = objUrl;
            vid.load();
            const playback = vid.play();
            playback?.then(() => { if (!dead) vid.pause(); }).catch(() => {});
            if (vid.readyState >= 2) onLoaded();
        })
        .catch(() => { if (!dead) start(); });
    return () => {
        dead = true;
        clearTimeout(timeout);
        ctrl.abort();
        stopAnimation?.();
        vid.removeEventListener("loadeddata", onLoaded);
        vid.removeEventListener("error", start);
        vid.pause();
        vid.removeAttribute("src");
        vid.load();
        if (objUrl) URL.revokeObjectURL(objUrl);
    };
}
