import { useEffect, useState } from "react";

// framer-motion's useReducedMotion already returns the real value on the first client render, which can differ from the server's HTML and break hydration. This starts as false on both and updates after mount
export function useSafeReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduceMotion;
}
