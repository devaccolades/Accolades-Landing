// @ts-nocheck
/* Direct port of the original imperative scene code (SVG). Kept close to the source so behaviour is unchanged. */
/** Orange "current" that runs down the five lines of the "How We Design" tree at random times. */
import { visibleAnimation } from "./visibleAnimation";

export function initProcessCurrent(sec) {
    var svg = sec.querySelector('.hwsvg'), lis = [].slice.call(sec.querySelectorAll('.hws li')), raf = 0, io = null;
    var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function eio(x) { return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
    lis.forEach(function (li) { li.style.setProperty('--md', rnd(3.6, 5.6).toFixed(2) + 's'); li.style.setProperty('--mr', rnd(0, 2.4).toFixed(2) + 's'); });
    if (RM)
        return function () { };
    var P = [].slice.call(svg.querySelectorAll('.hwp')), C1 = [].slice.call(svg.querySelectorAll('.hwc1')), C2 = [].slice.call(svg.querySelectorAll('.hwc2')), IC = [].slice.call(svg.querySelectorAll('.hwi')), st = P.map(function (p) { return { len: 0, run: false, t0: 0, dur: 0, next: 0 }; }), started = 0;
    io = new IntersectionObserver(function (e, o) { if (e[0].isIntersecting) {
        started = performance.now() + 2900;
        st.forEach(function (s) { s.next = started + rnd(0, 2600); });
        o.disconnect();
    } }, { threshold: .25 });
    io.observe(sec);
    function loop(now) {
        if (!started || now < started || !svg.getClientRects().length)
            return;
        var r = sec.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight)
            return;
        for (var i = 0; i < P.length; i++) {
            var s = st[i];
            if (!s.run) {
                if (now < s.next)
                    continue;
                s.run = true;
                s.t0 = now;
                s.dur = rnd(1700, 2700);
                if (!s.len)
                    s.len = P[i].getTotalLength();
            }
            var k = (now - s.t0) / s.dur;
            if (k >= 1) {
                s.run = false;
                s.next = now + rnd(600, 3400);
                IC[i].setAttribute('opacity', 0);
                C1[i].setAttribute('opacity', 0);
                C2[i].setAttribute('opacity', 0);
                continue;
            }
            var e = eio(k), pt = P[i].getPointAtLength(e * s.len), pt2 = P[i].getPointAtLength(Math.min(s.len, e * s.len + 1.5)), ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI, a = Math.min(1, k * 7, (1 - k) * 7);
            IC[i].setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ' ' + pt.y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ')');
            IC[i].setAttribute('opacity', a.toFixed(2));
            var off = (-(e - .14)).toFixed(4);
            C1[i].setAttribute('stroke-dashoffset', off);
            C2[i].setAttribute('stroke-dashoffset', off);
            C1[i].setAttribute('opacity', (a * .95).toFixed(2));
            C2[i].setAttribute('opacity', (a * .16).toFixed(2));
        }
    }
    const stopAnimation = visibleAnimation(sec, loop);
    return function () { stopAnimation(); if (io)
        io.disconnect(); };
}
