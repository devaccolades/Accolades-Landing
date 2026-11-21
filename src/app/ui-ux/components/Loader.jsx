"use client";
import { useEffect, useState } from "react";
export default function Loader() {
    const [pct, setPct] = useState(0);
    const [phase, setPhase] = useState("show");
    useEffect(() => {
        let t;
        const onProgress = (e) => setPct(e.detail);
        const onReady = () => {
            setPhase("fade");
            t = setTimeout(() => setPhase("gone"), 800);
        };
        window.addEventListener("hero:progress", onProgress);
        window.addEventListener("hero:ready", onReady);
        return () => {
            clearTimeout(t);
            window.removeEventListener("hero:progress", onProgress);
            window.removeEventListener("hero:ready", onReady);
        };
    }, []);
    return (<div className="load" id="load" style={{ opacity: phase === "show" ? 1 : 0, display: phase === "gone" ? "none" : undefined }}>
      <span>Loading experience</span>
      <div>
        <i style={{ width: `${pct}%` }}/>
      </div>
    </div>);
}
