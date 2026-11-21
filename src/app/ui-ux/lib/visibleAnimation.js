// Run a scene only while it is near the viewport. The original easing and
// scene drawing stay in the caller; hidden scenes do not compete for a frame.
export function visibleAnimation(element, draw, rootMargin = "200px 0px") {
    let raf = 0;
    let visible = false;
    let disposed = false;
    function tick(now) {
        raf = 0;
        if (disposed || !visible || document.hidden) return;
        draw(now);
        raf = requestAnimationFrame(tick);
    }
    function update() {
        if (disposed) return;
        if (visible && !document.hidden) {
            if (!raf) raf = requestAnimationFrame(tick);
        } else {
            cancelAnimationFrame(raf);
            raf = 0;
        }
    }
    const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
    }, { rootMargin });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
        disposed = true;
        observer.disconnect();
        document.removeEventListener("visibilitychange", update);
        cancelAnimationFrame(raf);
    };
}
