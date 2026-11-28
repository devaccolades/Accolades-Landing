import { visibleAnimation } from "./visibleAnimation";

export function initScrollShowcase(els, frameUrls) {
    var GAP = 2200, FOCUS = -500, section = els.section, stage = els.stage, cv = els.bg, cx = cv.getContext('2d'), world = els.world, titlesEl = els.titlesEl, countEl = els.count, oc = document.createElement('canvas'), ox = oc.getContext('2d'), tc = document.createElement('canvas'), tx = tc.getContext('2d'), RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
    function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
    function pad(n) { return String(n).padStart(2, '0'); }
    var planes = Array.from(world.querySelectorAll('.ss-plane')), titles = Array.from(titlesEl.querySelectorAll('.ss-t')), N = planes.length;
    var frames = frameUrls.map(function (src) { var im = new Image(); im.decoding = 'async'; im.src = src; return im; }), FC = frames.length;
    function ready(im) { return !!im && im.complete && im.naturalWidth > 0; }
    var W = 0, H = 0, mob = false, lastF = -1, lastG = 0, gs = 0, vel = 0, cur = 0, lastBest = -1, first = true, raf = 0, burstUntil = 0, nextBurst = performance.now() + 4000;
    function layout() {
        W = stage.clientWidth;
        H = stage.clientHeight;
        mob = W < 720;
        var bw = mob ? W * .88 : W * .5;
        planes.forEach(function (el) { el.style.width = bw + 'px'; el.style.marginLeft = -bw / 2 + 'px'; el.style.marginTop = -bw / 3 + 'px'; });
        var d = Math.min(window.devicePixelRatio || 1, 1.25);
        [cv, oc, tc].forEach(function (c) { c.width = Math.round(W * d); c.height = Math.round(H * d); });
        [cx, ox, tx].forEach(function (c) { c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high'; });
        lastF = -1;
    }
    /* Glitch: RGB split + thin slice shifts. Strength g is 0..~0.55. */
    function paint(g) {
        var cw = cv.width, ch = cv.height;
        cx.globalCompositeOperation = 'source-over';
        if (g < .03) {
            cx.drawImage(oc, 0, 0);
            return;
        }
        cx.fillStyle = '#000';
        cx.fillRect(0, 0, cw, ch);
        var sh = g * cw * .009;
        cx.globalCompositeOperation = 'lighter';
        [['#f00', -sh], ['#0f0', 0], ['#00f', sh]].forEach(function (a) {
            var c = a[0], dx = a[1];
            tx.globalCompositeOperation = 'source-over';
            tx.drawImage(oc, 0, 0);
            tx.globalCompositeOperation = 'multiply';
            tx.fillStyle = c;
            tx.fillRect(0, 0, cw, ch);
            cx.drawImage(tc, dx, 0);
        });
        cx.globalCompositeOperation = 'source-over';
        var n = 1 + Math.round(g * 4);
        for (var k = 0; k < n; k++) {
            var y = Math.random() * ch, h = ch * (.008 + Math.random() * .03 * g), dx = (Math.random() - .5) * cw * .035 * g;
            cx.drawImage(oc, 0, y, cw, h, dx, y, cw, h);
        }
    }
    function drawBg(p) {
        var now = performance.now();
        if (!RM && now > nextBurst) {
            burstUntil = now + 350;
            nextBurst = now + 4500 + Math.random() * 4500;
        }
        var g = RM ? 0 : Math.min(.55, vel * 20);
        if (now < burstUntil)
            g = Math.max(g, .32);
        gs += (g - gs) * .06;
        if (gs < .01)
            gs = 0;
        var f = Math.round(p * (FC - 1)), use = -1;
        for (var k = 0; k <= 12; k++) {
            if (ready(frames[f - k])) {
                use = f - k;
                break;
            }
            if (ready(frames[f + k])) {
                use = f + k;
                break;
            }
        }
        var changed = false;
        if (use >= 0 && use !== lastF) {
            lastF = use;
            changed = true;
            var im = frames[use], cw = oc.width, ch = oc.height, s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight), w = im.naturalWidth * s, h = im.naturalHeight * s;
            ox.drawImage(im, (cw - w) / 2, (ch - h) / 2, w, h);
        }
        if (changed || gs > .03 || lastG > .03)
            paint(gs);
        lastG = gs;
    }
    function render(p) {
        var cam = p * (N - 1) * GAP, best = 0, bo = -1;
        for (var i = 0; i < N; i++) {
            var plane = planes[i], title = titles[i], side = i % 2 === 0 ? -1 : 1, z = cam - i * GAP + FOCUS;
            var o = smooth(-4200, -2800, z) * (1 - smooth(40, 520, z));
            plane.style.opacity = o;
            plane.style.visibility = o < .01 ? 'hidden' : 'visible';
            var x = side * (mob ? .3 : .36) * W, y = (side < 0 ? -.06 : .08) * H;
            plane.style.transform = 'translate3d(' + x + 'px,' + y + 'px,' + z + 'px) rotateY(' + (-side * 8) + 'deg)';
            var to = smooth(-2000, -1300, z) * (1 - smooth(-100, 300, z));
            title.style.opacity = to;
            title.style.visibility = to < .01 ? 'hidden' : 'visible';
            title.style.filter = RM ? 'none' : 'blur(' + ((1 - to) * 8).toFixed(1) + 'px)';
            title.style.pointerEvents = to > .7 ? 'auto' : 'none';
            if (to > bo) {
                bo = to;
                best = i;
            }
        }
        drawBg(p);
        if (best !== lastBest) {
            lastBest = best;
            countEl.textContent = pad(best + 1) + ' / ' + pad(N);
        }
    }
    function loop() {
        var r = section.getBoundingClientRect(), vh = window.innerHeight;
        if (r.bottom > -vh * .2 && r.top < vh * 1.2) {
            var total = Math.max(1, section.offsetHeight - stage.clientHeight), target = clamp(-r.top / total, 0, 1);
            if (first) {
                cur = target;
                first = false;
            }
            vel = Math.abs(target - cur);
            cur = RM ? target : cur + (target - cur) * .085;
            if (Math.abs(target - cur) < .00005)
                cur = target;
            render(cur);
        }
    }
    layout();
    var ro = new ResizeObserver(layout);
    ro.observe(stage);
    const stopAnimation = visibleAnimation(section, loop);
    return function () { stopAnimation(); ro.disconnect(); };
}
