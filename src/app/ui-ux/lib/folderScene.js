// @ts-nocheck
/* Direct port of the original imperative scene code (canvas / three.js). Kept close to the source so behaviour is unchanged. */
import { HX } from "./hx";
export function initFolderScene(sec, sc, sv, SVC) {
    var raf = 0;
    var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function cl(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function eio(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
    function eob(x) { return 1 + 2.5 * Math.pow(x - 1, 3) + 1.5 * Math.pow(x - 1, 2); }
    /* 1. the folder line is drawn on ONE canvas (no 3D layers) and builds as you scroll */
    sc.innerHTML = '';
    var cv = document.createElement('canvas'), ctx = cv.getContext('2d');
    sc.appendChild(cv);
    var PAL = [['#1d6fe0', '#7fd3ff'], ['#ff7a18', '#ffd23f'], ['#0c7379', '#8be0c9'], ['#e6246f', '#ff8ab3'], ['#141b4d', '#4f6bff'], ['#f3d03e', '#fff3b0'], ['#7a1fa2', '#ff5ca8'], ['#3b2a1c', '#d99a3c'], ['#d9d9d0', '#8fa0a0'], ['#1a5fd0', '#5aa2ff']];
    var IM = SVC.map(function (sv_, k) { var im = new Image(); im.onload = function () { var c = document.createElement('canvas'); c.width = 640; c.height = Math.round(640 * im.naturalHeight / im.naturalWidth); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); IM[k] = c; shown = -1; }; im.src = sv_.src; return im; });
    var W = 0, H = 0, D = 1, FX = 0, FY = 0, KK = 1, LX = .75, LY = -.66, cards = [], pick = [], shown = -1, lastMask = 0, AM = 0, lastAM = 0, FP = 0, HV = -1, ptr = false, mx = 0, my = 0, lastT = 0;
    function layout() {
        W = sc.clientWidth;
        H = sc.clientHeight;
        D = Math.min(devicePixelRatio || 1, 1.5);
        cv.width = Math.round(W * D);
        cv.height = Math.round(H * D);
        var mobW = innerWidth <= 900, k = mobW ? 1.1 : Math.max(.55, W / 1440), N = mobW ? 17 : 40, FI = mobW ? 8 : 21, P0 = [-.03 * W, .99 * H], P1 = [1.03 * W, .02 * H];
        cards = [];
        KK = k;
        var ll = Math.hypot(P1[0] - P0[0], P1[1] - P0[1]);
        LX = (P1[0] - P0[0]) / ll;
        LY = (P1[1] - P0[1]) / ll;
        for (var i = 0; i < N; i++) {
            var d = Math.abs(i - FI);
            if (d > 0 && d < 4)
                continue;
            var u = i / (N - 1), s = 1.15 - .75 * u, fd = i === FI, cs = fd ? s : 1.15;
            cards.push({ x: lerp(P0[0], P1[0], u), y: lerp(P0[1], P1[1], u), w: (fd ? 150 : 78 * 1.1) * k * cs, h: (fd ? 230 : 150 * 1.1) * k * cs, fd: fd, im: -1, rank: d / Math.max(FI, N - 1 - FI) });
        }
        var f = cards.filter(function (c) { return c.fd; })[0], fi = cards.indexOf(f);
        FX = f.x;
        FY = f.y;
        shown = -1;
        pick = [cards[fi - 1], cards[fi + 1], cards[fi - 2], cards[fi + 2], cards[fi - 3], cards[fi + 3]];
        pick.forEach(function (c, k2) { c.im = k2 % (IM.length || 6); });
        var seed = 7, nI = IM.length || 6;
        function rnd() { seed = seed * 16807 % 2147483647; return seed / 2147483647; }
        for (var j2 = 0; j2 < cards.length; j2++) {
            var cc = cards[j2];
            if (cc.fd || cc.im >= 0)
                continue;
            var bad = {};
            [-2, -1, 1, 2].forEach(function (o) { var nb = cards[j2 + o]; if (nb && nb.im >= 0)
                bad[nb.im] = 1; });
            var opts = [];
            for (var z = 0; z < nI; z++)
                if (!bad[z])
                    opts.push(z);
            cc.im = opts[Math.floor(rnd() * opts.length)];
        }
    }
    function path(w, h) { ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, h * .09); ctx.lineTo(w * .03, 0); ctx.lineTo(w * .4, 0); ctx.lineTo(w * .45, h * .11); ctx.lineTo(w, h * .11); ctx.lineTo(w, h); ctx.closePath(); }
    var SPR = (function () {
        var P = 46, iw = 78, ih = 150, S = 2, c = document.createElement('canvas');
        c.width = (iw + 2 * P) * S;
        c.height = (ih + 2 * P) * S;
        var x = c.getContext('2d');
        x.scale(S, S);
        function pass(blur, oy, al) {
            x.save();
            x.shadowColor = 'rgba(20,42,44,' + al + ')';
            x.shadowBlur = blur * S;
            x.shadowOffsetX = 2000 * S;
            x.shadowOffsetY = oy * S;
            x.fillStyle = '#000';
            var X = P - 2000, Y = P, r = 5;
            x.beginPath();
            x.moveTo(X + r, Y);
            x.lineTo(X + iw - r, Y);
            x.quadraticCurveTo(X + iw, Y, X + iw, Y + r);
            x.lineTo(X + iw, Y + ih - r);
            x.quadraticCurveTo(X + iw, Y + ih, X + iw - r, Y + ih);
            x.lineTo(X + r, Y + ih);
            x.quadraticCurveTo(X, Y + ih, X, Y + ih - r);
            x.lineTo(X, Y + r);
            x.quadraticCurveTo(X, Y, X + r, Y);
            x.closePath();
            x.fill();
            x.restore();
        }
        pass(34, 14, .2);
        pass(10, 3, .13);
        return { c: c, P: P, iw: iw, ih: ih, S: S };
    })();
    function card(c, q, j, fp) {
        var e = 1 - Math.pow(1 - q, 3), m = .35 + .65 * e, d = j - fp, a = c.fd ? 0 : AM * Math.exp(-d * d / .9), t = c.fd ? 0 : AM * Math.tanh(d * 1.3), pull = a * 70 * KK, sh = 28 * KK * t * e, NX = -LY, NY = LX, w = c.w * m * (1 + 1.9 * a), h = c.h * m * (1 + .22 * a), shr = .12 * (1 - .75 * a), px = lerp(FX, c.x, e) + LX * sh + NX * pull, py = lerp(FY, c.y, e) + LY * sh + NY * pull;
        c.cx = px;
        c.cy = py - shr * w / 2;
        c.cw = w;
        c.ch = h;
        c.shr = shr;
        c.a = a;
        ctx.globalAlpha = cl(q * 2.2);
        ctx.setTransform(D, -shr * D, 0, D, D * (px - w / 2), D * (py - h / 2));
        if (c.fd) {
            ctx.save();
            ctx.translate(w * .05, h * .035);
            path(w, h);
            ctx.fillStyle = '#0a9fd3';
            ctx.fill();
            ctx.restore();
            path(w, h);
            ctx.fillStyle = '#02bdf4';
            ctx.fill();
            return;
        }
        if (a <= .2) {
            ctx.drawImage(SPR.c, -SPR.P * w / SPR.iw, -SPR.P * h / SPR.ih, SPR.c.width / SPR.S * w / SPR.iw, SPR.c.height / SPR.S * h / SPR.ih);
        }
        if (a > .2) {
            ctx.shadowColor = 'rgba(20,42,44,' + (.24 * a).toFixed(2) + ')';
            ctx.shadowBlur = 46 * D * a;
            ctx.shadowOffsetY = 16 * D * a;
        }
        if (a > .2) {
            rr(w, h);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.shadowColor = 'transparent';
        }
        rr(w, h);
        ctx.save();
        ctx.clip();
        var im = IM[c.im];
        if (im && (im.naturalWidth || im.width)) {
            ctx.drawImage(im, 0, 0, w, h);
        }
        else {
            ctx.fillStyle = '#cfd6d6';
            ctx.fillRect(0, 0, w, h);
        }
        ctx.restore();
        if (a > .2) {
            rr(w, h);
            ctx.strokeStyle = 'rgba(255,255,255,' + (.7 * a).toFixed(2) + ')';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    }
    function rr(w, h) { var r = Math.min(5, w / 2, h / 2); ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(w - r, 0); ctx.quadraticCurveTo(w, 0, w, r); ctx.lineTo(w, h - r); ctx.quadraticCurveTo(w, h, w - r, h); ctx.lineTo(r, h); ctx.quadraticCurveTo(0, h, 0, h - r); ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.closePath(); }
    function draw(p, fp) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, cv.width, cv.height);
        var hot = [];
        for (var j = cards.length - 1; j >= 0; j--) {
            var c = cards[j], q = c.fd ? cl(p * 2) : cl(p * 1.9 - c.rank * .9);
            if (q <= 0 || c.gone)
                continue;
            if (!c.fd && AM * Math.exp(-(j - fp) * (j - fp) / .9) > .05) {
                hot.push([c, q, j]);
            }
            else
                card(c, q, j, fp);
        }
        hot.sort(function (x, y) { return x[0].a - y[0].a || 0; });
        hot.forEach(function (h) { card(h[0], h[1], h[2], fp); });
        ctx.globalAlpha = 1;
    }
    /* 2. six of the stacked pictures peel off the line and land as the service card images */
    layout();
    var fl = [], FW = 480, FH = 302, OFF = [[-.11, -.2, -9], [.05, -.26, 6], [.23, -.17, 10], [-.13, .15, 7], [.04, .27, -8], [.25, .12, -6]];
    if (!rm && SVC.length === 6) {
        var fy = document.createElement('div');
        fy.id = 'fly';
        sec.closest('.uiux-page').appendChild(fy);
        sec.closest('.uiux-page').classList.add('fly');
        fl = SVC.map(function (sv_, i) {
            var d = document.createElement('div');
            d.className = 'fl';
            d.setAttribute('aria-hidden', 'true');
            d.innerHTML = '<img class="fi" alt="" src="' + sv_.src + '">';
            d.style.width = FW + 'px';
            d.style.height = FH + 'px';
            fy.appendChild(d);
            return { i: i, el: d, fi: d.firstChild, vis: false, ld: null };
        });
    }
    else {
        HX.land = [1, 1, 1, 1, 1, 1];
    }
    function setLd(f, v) { HX.land[f.i] = v ? 1 : 0; }
    function hide(f, l) { if (f.vis) {
        f.el.style.opacity = 0;
        f.vis = false;
    } setLd(f, l); }
    function loop(now) {
        raf = requestAnimationFrame(loop);
        var sy = scrollY, vh = innerHeight, vw = innerWidth, sr = sc.getBoundingClientRect(), A0 = sec.getBoundingClientRect().top + sy, S = Math.min(vw, vh * 1.5), mask = 0, SC0 = sr.top + sy, mob = vw <= 900, B = mob ? SC0 + sr.height / 2 - vh / 2 : A0 + vh * .12, svr = sv.getBoundingClientRect(), trig = svr.top < vh * .75;
        for (var i = 0; i < fl.length; i++) {
            var f = fl[i], c = pick[i];
            if (sy < (mob ? SC0 - vh : A0 - vh * .6)) {
                hide(f, false);
                c.gone = false;
                f.t0 = null;
                continue;
            }
            var tg = HX.target ? HX.target(i) : null;
            if (!tg) {
                hide(f, false);
                continue;
            }
            var r = { left: tg.cx - tg.w / 2, top: tg.cy - tg.h / 2, width: tg.w, height: tg.h }, sw = FW, sh = FH, ST = svr.top + sy;
            var Er = cl((sy - (B + i * vh * .035)) / (vh * .45)), E = eob(Er), endY = ST - vh * .1 + i * vh * .02, stY = Math.max(B + vh * .33 + i * vh * .03, endY - vh * .95);
            if (endY < stY + vh * .35)
                endY = stY + vh * .35;
            var T;
            if (mob) {
                if (trig) {
                    if (f.t0 == null)
                        f.t0 = svr.top < -vh * .3 ? now - 5000 : now + i * 110;
                    T = cl((now - f.t0) / 1100);
                }
                else {
                    f.t0 = null;
                    T = 0;
                }
            }
            else
                T = cl((sy - stY) / (endY - stY));
            c.gone = Er > 0;
            if (Er > 0)
                mask |= 1 << i;
            if (T >= 1) {
                hide(f, true);
                continue;
            }
            if (Er <= 0) {
                hide(f, false);
                continue;
            }
            var T2 = eio(T), o = OFF[i], bob = Math.sin(now / 900 + i * 1.3) * 7 * (1 - T2), stx = sr.left + (c.cx || c.x), sty = sr.top + (c.cy || c.y), p0x = lerp(stx, vw * .55 + o[0] * S, E), p0y = lerp(sty, vh * .46 + o[1] * S + bob, E), cx = lerp(p0x, r.left + r.width / 2, T2), cy = lerp(p0y, r.top + r.height / 2, T2), s0 = (c.ch || c.h) / (.9 * sh), s = lerp(lerp(s0, s0 * 1.55, eio(Er)), r.width / sw, T2), rot = o[2] * Er * (1 - T2), fx = lerp((c.cw || c.w) / (c.ch || c.h) * .9 * sh / sw, 1, T2), fyy = lerp(.9, 1, T2);
            if (!f.vis) {
                f.el.style.opacity = 1;
                f.vis = true;
            }
            f.el.style.transform = 'translate3d(' + (cx - sw / 2).toFixed(1) + 'px,' + (cy - sh / 2).toFixed(1) + 'px,0) rotate(' + rot.toFixed(2) + 'deg) scale(' + s.toFixed(3) + ')';
            f.fi.style.transform = 'skewY(' + (-Math.atan(c.shr || .12) * 57.3 * (1 - T2)).toFixed(2) + 'deg) scale(' + fx.toFixed(3) + ',' + fyy.toFixed(3) + ')';
            f.el.style.setProperty('--sh', (1 - T2 * T2).toFixed(2));
            f.fi.style.opacity = (1 - cl((T2 - .62) / .38)).toFixed(3);
            HX.land[i] = T2;
        }
        if (mask !== lastMask) {
            lastMask = mask;
            shown = -1;
        }
        var q = Math.round((rm ? 1 : cl((sy - (SC0 - vh * .85)) / (vh * .65))) * 200), n = cards.length, ar = sec.getBoundingClientRect(), vis = ar.bottom > -60 && ar.top < vh + 60, dt = Math.min(64, now - lastT);
        lastT = now;
        if (vis && !rm) {
            var nh = -1;
            if (ptr) {
                var bm = 1.25, cu = HV >= 0 ? cards[HV] : null;
                if (cu && cu.cw && !cu.gone && hm(cu) < 1.6) {
                    nh = HV;
                    bm = 0;
                }
                if (nh < 0)
                    for (var j = 0; j < n; j++) {
                        var cj = cards[j];
                        if (cj.fd || cj.gone || !cj.cw)
                            continue;
                        var m = hm(cj);
                        if (m < bm) {
                            bm = m;
                            nh = j;
                        }
                    }
            }
            if (nh !== HV) {
                if (nh >= 0 && AM < .03)
                    FP = nh;
                HV = nh;
            }
            if (HV >= 0)
                FP += (HV - FP) * (1 - Math.exp(-dt / 70));
            AM += ((HV >= 0 ? 1 : 0) - AM) * (1 - Math.exp(-dt / 110));
            if (AM < .002 && HV < 0)
                AM = 0;
        }
        var need = q !== shown || AM > 0 || lastAM > 0;
        lastAM = AM;
        if (need) {
            shown = q;
            draw(q / 200, FP);
        }
    }
    function hm(c) { var dx = (mx - c.cx) / (c.cw * .62 + 6), dy = (my - c.cy) / (c.ch * .55 + 6); return dx * dx + dy * dy; }
    function pm(e) { var r = sc.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; ptr = true; }
    sec.addEventListener('pointermove', pm);
    sec.addEventListener('pointerdown', pm);
    var pl = function () { ptr = false; }, pu = function (e) { if (e.pointerType !== 'mouse')
        ptr = false; };
    sec.addEventListener('pointerleave', pl);
    sec.addEventListener('pointercancel', pl);
    sec.addEventListener('pointerup', pu);
    var rt;
    var onResize = function () { clearTimeout(rt); rt = setTimeout(layout, 120); };
    addEventListener('resize', onResize);
    raf = requestAnimationFrame(loop);
    return function () {
        cancelAnimationFrame(raf);
        clearTimeout(rt);
        removeEventListener('resize', onResize);
        sec.removeEventListener('pointermove', pm);
        sec.removeEventListener('pointerdown', pm);
        sec.removeEventListener('pointerleave', pl);
        sec.removeEventListener('pointercancel', pl);
        sec.removeEventListener('pointerup', pu);
        cv.remove();
        var fyEl = document.getElementById('fly');
        if (fyEl)
            fyEl.remove();
        sec.closest('.uiux-page')?.classList.remove('fly');
    };
}
