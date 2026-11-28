"use client";
import { useEffect, useRef, useState } from "react";
/** Returns a ref and a flag that flips to true (once) when the element scrolls into view. */
export function useReveal(threshold) {
    const ref = useRef(null);
    const [seen, setSeen] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setSeen(true);
                io.disconnect();
            }
        }, { threshold });
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);
    return [ref, seen];
}
