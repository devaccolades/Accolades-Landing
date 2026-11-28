// @ts-nocheck
/* Direct port of the original imperative scene code (canvas / three.js). Kept close to the source so behaviour is unchanged. */
import { HX } from "./hx";
import { visibleAnimation } from "./visibleAnimation";
export function initHelix(els, SVC) {
    var track = els.track, stage = els.stage, cnt = els.count, items = Array.from(stage.querySelectorAll('.hx-item')), RM = matchMedia('(prefers-reduced-motion:reduce)').matches, N = SVC.length, R = 3.8, CW = 3.15, DT = 48 * Math.PI / 180, DY = 1.25, FOV = 40, ASP = 1.59;
    var THREE = null, raf = 0, dead = false, rendererRef = null, ro2 = null, onPm = null;
    function c01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
    function ss(a, b, x) { x = c01((x - a) / (b - a)); return x * x * (3 - 2 * x); }
    function camZ(a) { return 9 * Math.pow(Math.max(1, 1.35 / a), .85); }
    function gate(i) { return ss(.55, 1, HX.land[i]); }
    /* same maths as the three.js camera (at 0,.45,z looking at the origin) so the flying pictures can land exactly on the cards */
    function project(P, cz, W, H) {
        var cy = .45, fx = 0, fy = -cy, fz = -cz, fl = Math.hypot(fx, fy, fz);
        fx /= fl;
        fy /= fl;
        fz /= fl;
        var rx = -fz, ry = 0, rz = fx, rl = Math.hypot(rx, ry, rz);
        rx /= rl;
        rz /= rl;
        var ux = ry * fz - rz * fy, uy = rz * fx - rx * fz, uz = rx * fy - ry * fx, dx = P[0], dy = P[1] - cy, dz = P[2] - cz, xc = dx * rx + dy * ry + dz * rz, yc = dx * ux + dy * uy + dz * uz, zc = dx * fx + dy * fy + dz * fz, t = Math.tan(FOV * Math.PI / 360);
        return [(xc / (zc * t * (W / H)) + 1) / 2 * W, (1 - yc / (zc * t)) / 2 * H];
    }
    function cardRect(i, W, H, cz) {
        var th = i * DT, f = Math.max(0, Math.cos(th)), sc = 1 + .12 * f * f, gx = R * Math.sin(th), gy = -i * DY, gz = R * Math.cos(th), hw = CW * sc / 2, hh = CW / ASP * sc / 2, xs = [], ys = [];
        [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(function (k) { var lx = k[0] * hw, p = project([gx + lx * Math.cos(th), gy + k[1] * hh, gz - lx * Math.sin(th)], cz, W, H); xs.push(p[0]); ys.push(p[1]); });
        var x0 = Math.min.apply(0, xs), x1 = Math.max.apply(0, xs), y0 = Math.min.apply(0, ys), y1 = Math.max.apply(0, ys);
        return { x: (x0 + x1) / 2, y: (y0 + y1) / 2, w: x1 - x0, h: y1 - y0 };
    }
    /* where each flying picture lands (viewport px): the first two become the visible cards, the rest are drawn into the helix */
    HX.target = function (i) {
        var r = stage.getBoundingClientRect(), W = r.width, H = r.height, cz = camZ(W / H), c0 = cardRect(0, W, H, cz);
        if (i < 2) {
            var c = cardRect(i, W, H, cz);
            return { cx: r.left + c.x, cy: r.top + c.y, w: c.w, h: c.h };
        }
        var o = project([0, 0, 0], cz, W, H);
        return { cx: r.left + o[0], cy: r.top + o[1], w: c0.w * .2, h: c0.h * .2 };
    };
    var s = 0, sceneReady = false, failed = false, loadStarted = false, fb = [], renderScene = null, last = performance.now();
    function overlay() {
        items.forEach(function (el, i) {
            var o = (1 - ss(.22, .62, Math.abs(i - s))) * gate(i);
            el.style.opacity = o.toFixed(3);
            el.style.visibility = o < .01 ? 'hidden' : 'visible';
            el.style.filter = RM ? 'none' : 'blur(' + ((1 - o) * 8).toFixed(1) + 'px)';
        });
        var k = Math.round(c01(s / (N - 1)) * (N - 1)) + 1;
        cnt.textContent = (k < 10 ? '0' : '') + k + ' / 0' + N;
    }
    /* fallback (no WebGL / library blocked): same cards as flat pictures */
    function buildFallback() { if (fb.length)
        return; fb = SVC.map(function (v) { var im = document.createElement('img'); im.className = 'hx-fb'; im.alt = ''; im.src = v.src; stage.insertBefore(im, stage.firstChild); return im; }); }
    function fallback() {
        var r = stage.getBoundingClientRect(), W = r.width, H = r.height, c0 = cardRect(0, W, H, camZ(W / H));
        fb.forEach(function (im, i) {
            var rel = i - s, f = 1 - ss(1.3, 1.85, Math.abs(rel)), k = Math.max(0, Math.cos(rel * DT));
            im.style.width = c0.w + 'px';
            im.style.height = c0.h + 'px';
            im.style.opacity = (f * gate(i)).toFixed(3);
            im.style.transform = 'translate3d(' + (c0.x - c0.w / 2 + rel * c0.w * .55) + 'px,' + (c0.y - c0.h / 2 + rel * c0.h * .42) + 'px,0) scale(' + ((1 + .12 * k * k) / 1.12 * (1 - .06 * Math.abs(rel))).toFixed(3) + ')';
        });
    }
    function fail() { failed = true; buildFallback(); }
    function loadThree() { import('./three.module.js').then(function (m) { if (dead)
        return; THREE = m; try {
        initScene();
        sceneReady = true;
    }
    catch (e) {
        console.error(e);
        fail();
    } }).catch(fail); }
    function initScene() {
        const SP = RM ? .3 : 1;
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        }
        catch (e) {
            throw e;
        }
        renderer.setClearColor(0xffffff, 0);
        const PR = Math.min(devicePixelRatio || 1, innerWidth < 720 ? 1.5 : 2);
        renderer.setPixelRatio(PR);
        stage.insertBefore(renderer.domElement, stage.firstChild);
        rendererRef = renderer;
        const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(FOV, 1, .1, 100), U = { uT: { value: 0 }, uPR: { value: PR }, uS: { value: 0 } };
        const dna = new THREE.Group();
        scene.add(dna);
        const PITCH = 3.6, K = Math.PI * 2 / PITCH, HH = 8.6, V3 = THREE.Vector3;
        /* light trails: thin spiral strands with a bright comet head and a fading tail, plus a soft halo around each */
        const trVS = `varying vec2 vUv;varying vec3 vN;varying vec3 vV;
void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}`;
        const trFS = `uniform float uT;uniform float uSpd;uniform float uPh;uniform float uLen;uniform float uAmp;uniform float uBase;uniform float uK;
uniform vec3 uC1;uniform vec3 uC2;varying vec2 vUv;varying vec3 vN;varying vec3 vV;
void main(){float head=fract(uT*uSpd+uPh);float d=fract(sign(uSpd)*(head-vUv.x));
float tail=exp(-d/uLen);float hot=exp(-d*60.);
float fres=pow(abs(dot(normalize(vN),normalize(vV))),.8);
float a=(uBase+uAmp*tail+hot*.9)*fres*uK;
vec3 c=mix(uC2,uC1,clamp(tail*.8+hot,0.,1.));
gl_FragColor=vec4(c,clamp(a,0.,1.));}`;
        const TRN = 11;
        for (let i = 0; i < TRN; i++) {
            const dir = (i % 3 === 2) ? -1 : 1, r = .5 + (i % 5) * .22 + ((i * 7) % 4) * .03, kk = K * (.8 + ((i * 5) % 6) * .08) * dir, ph = i * 1.13, spd = (.07 + ((i * 3) % 5) * .025) * (i % 2 ? -1 : 1) * SP, len = .08 + ((i * 7) % 5) * .035, tailC = new THREE.Color(i % 2 ? '#2cc7bb' : '#1bb3d1'), coreC = new THREE.Color(i % 2 ? '#087f86' : '#0b6fa0');
            const pts = [];
            for (let y = -HH; y <= HH; y += .09) {
                const rr = r * (1 + .1 * Math.sin(1.7 * y + i));
                pts.push(new V3(rr * Math.cos(kk * y + ph), y, rr * Math.sin(kk * y + ph)));
            }
            const curve = new THREE.CatmullRomCurve3(pts);
            [[.022, 1, .9], [.075, .22, .5]].forEach((cfg, j) => {
                const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, vertexShader: trVS, fragmentShader: trFS,
                    uniforms: { uT: U.uT, uSpd: { value: spd }, uPh: { value: (i * .37) % 1 }, uLen: { value: len }, uAmp: { value: cfg[2] }, uBase: { value: j ? .04 : .16 }, uK: { value: cfg[1] }, uC1: { value: coreC }, uC2: { value: tailC } } });
                const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 520, cfg[0], 6, false), m);
                mesh.renderOrder = 0;
                dna.add(mesh);
            });
        }
        const pVS = `attribute vec4 aA;attribute vec3 aB;uniform float uT,uPR,uDrift,uS;varying float vA;varying vec3 vC;
void main(){float ang=aA.y+uT*aA.z-uS*sign(aA.z)*.5;
vec3 p=vec3(aA.x*cos(ang),aA.w+sin(uT*.4+aB.y)*.3,aA.x*sin(ang));
p.y=mod(p.y+uT*uDrift+uS*.7+6.,12.)-6.;
float c=cos(aB.z),s=sin(aB.z);p=vec3(p.x*c-p.y*s,p.x*s+p.y*c,p.z);
vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
gl_PointSize=aB.x*uPR*(10./-mv.z);
vA=.4+.6*fract(aB.y*7.);vC=mix(vec3(.02,.5,.5),vec3(.12,.82,.76),fract(aB.y*13.));}`;
        const pFS = `varying float vA;varying vec3 vC;
void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vC,smoothstep(.5,.12,d)*vA);}`;
        function makePoints(n, gen, drift, order) {
            const A = new Float32Array(n * 4), B = new Float32Array(n * 3);
            for (let i = 0; i < n; i++) {
                const g = gen();
                A.set(g.a, i * 4);
                B.set(g.b, i * 3);
            }
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
            geo.setAttribute('aA', new THREE.BufferAttribute(A, 4));
            geo.setAttribute('aB', new THREE.BufferAttribute(B, 3));
            const mat = new THREE.ShaderMaterial({ uniforms: { uT: U.uT, uPR: U.uPR, uS: U.uS, uDrift: { value: drift } }, vertexShader: pVS, fragmentShader: pFS, transparent: true, depthWrite: false });
            const p = new THREE.Points(geo, mat);
            p.frustumCulled = false;
            p.renderOrder = order;
            scene.add(p);
            return p;
        }
        const rnd = (a, b) => a + Math.random() * (b - a), sgn = () => Math.random() < .5 ? -1 : 1;
        makePoints(2200, () => ({ a: [rnd(.8, 7.5), rnd(0, 6.28), sgn() * rnd(.04, .18) * SP, rnd(-6, 6)], b: [rnd(2.5, 6.5), rnd(0, 100), 0] }), .12 * SP, 1);
        makePoints(130, () => ({ a: [rnd(1.3, 5.6), rnd(0, 6.28), sgn() * rnd(.35, 1.2) * SP, rnd(-1.6, 1.6)], b: [rnd(8, 17), rnd(0, 100), rnd(-.55, .55)] }), 0, 3);
        const ring = new THREE.Group();
        scene.add(ring);
        const cardMat = tex => new THREE.ShaderMaterial({ transparent: true, uniforms: { map: { value: tex }, uAsp: { value: 1.6 }, uF: { value: 0 } },
            vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader: `uniform sampler2D map;uniform float uAsp;uniform float uF;varying vec2 vUv;
float rr(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){vec2 p=(vUv-.5)*vec2(uAsp,1.);float d=rr(p,vec2(uAsp*.5,.5),.07);
float a=1.-smoothstep(-.004,.004,d);if(a<.01)discard;
vec3 c=texture2D(map,vUv).rgb;c=mix(c,vec3(1.),smoothstep(-.025,0.,d)*.4);
gl_FragColor=vec4(c,a*uF);}` });
        const sc2 = document.createElement('canvas');
        sc2.width = 256;
        sc2.height = 192;
        (function () {
            const x = sc2.getContext('2d');
            x.shadowColor = 'rgba(6,70,72,.55)';
            x.shadowBlur = 30;
            x.shadowOffsetX = 1000;
            x.fillStyle = '#000';
            const X = 40 - 1000, Y = 36, W = 176, H = 120, r = 16;
            x.beginPath();
            x.moveTo(X + r, Y);
            x.arcTo(X + W, Y, X + W, Y + H, r);
            x.arcTo(X + W, Y + H, X, Y + H, r);
            x.arcTo(X, Y + H, X, Y, r);
            x.arcTo(X, Y, X + W, Y, r);
            x.closePath();
            x.fill();
        })();
        const shTex = new THREE.CanvasTexture(sc2), unit = new THREE.PlaneGeometry(1, 1), cards = [];
        SVC.forEach((v, i) => {
            const th = i * DT, g = new THREE.Group();
            g.position.set(R * Math.sin(th), -i * DY, R * Math.cos(th));
            g.rotation.y = th;
            const mesh = new THREE.Mesh(unit, new THREE.MeshBasicMaterial());
            mesh.visible = false;
            mesh.renderOrder = 2;
            const sh = new THREE.Mesh(unit, new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false, opacity: 0 }));
            sh.scale.set(1 / .6875, 1 / .625, 1);
            sh.position.set(0, -.07, -.03);
            sh.renderOrder = 2;
            mesh.add(sh);
            g.add(mesh);
            ring.add(g);
            cards.push({ g, mesh, sh, i });
            new THREE.TextureLoader().load(v.src, tex => {
                tex.minFilter = THREE.LinearMipmapLinearFilter;
                tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
                const asp = tex.image.width / tex.image.height, m = cardMat(tex);
                m.uniforms.uAsp.value = asp;
                mesh.material = m;
                mesh.scale.set(CW, CW / asp, 1);
                mesh.visible = true;
            });
        });
        let px = 0, py = 0, camX = 0, camY = 0, tt0 = 0;
        onPm = e => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; };
        addEventListener('pointermove', onPm);
        function resize() { const w = stage.clientWidth, h = stage.clientHeight, a = w / h; renderer.setSize(w, h, false); cam.aspect = a; cam.position.z = camZ(a); cam.updateProjectionMatrix(); }
        ro2 = new ResizeObserver(resize);
        ro2.observe(stage);
        resize();
        renderScene = function (dt) {
            U.uT.value += dt * SP;
            const tt = U.uT.value;
            U.uS.value = s;
            ring.rotation.y = -s * DT;
            ring.position.y = s * DY;
            dna.rotation.y = s * DY * K + tt * .1;
            cards.forEach(c => {
                const rel = c.i - s, f = Math.max(0, Math.cos(rel * DT)), fade = (1 - ss(1.3, 1.85, Math.abs(rel))) * gate(c.i);
                c.g.scale.setScalar(1 + .12 * f * f);
                c.g.position.y = -c.i * DY + Math.sin(tt * .7 + c.i * 1.3) * .08;
                {
                    const mt = c.mesh.material;
                    if (mt && mt.uniforms)
                        mt.uniforms.uF.value = fade;
                }
                c.sh.material.opacity = fade;
            });
            camX += (px * 1.2 - camX) * .04;
            camY += (.45 - py * .7 - camY) * .04;
            cam.position.x = camX;
            cam.position.y = camY;
            cam.lookAt(0, 0, 0);
            renderer.render(scene, cam);
        };
    }
    function frame(now) {
        var dt = Math.min(.05, (now - last) / 1000);
        last = now;
        var vh = innerHeight, tr = track.getBoundingClientRect(), r = stage.getBoundingClientRect();
        if (!loadStarted && tr.top < vh * 2.2) {
            loadStarted = true;
            loadThree();
        }
        if (!(r.bottom > 0 && r.top < vh))
            return;
        var tot = Math.max(1, track.offsetHeight - stage.clientHeight), target = c01(-tr.top / tot) * (N - 1);
        s = RM ? target : s + (target - s) * Math.min(1, dt * 6);
        overlay();
        if (sceneReady && renderScene)
            renderScene(dt);
        else if (failed)
            fallback();
    }
    const stopAnimation = visibleAnimation(track, frame, "150% 0px");
    return function () {
        dead = true;
        stopAnimation();
        if (onPm)
            removeEventListener('pointermove', onPm);
        if (ro2)
            ro2.disconnect();
        if (rendererRef) {
            rendererRef.dispose();
            if (rendererRef.domElement.parentNode)
                rendererRef.domElement.parentNode.removeChild(rendererRef.domElement);
        }
        fb.forEach(function (im) { im.remove(); });
        HX.target = null;
    };
}
