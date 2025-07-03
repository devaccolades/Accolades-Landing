import React from "react";

function Button({ content, py, px }) {
  return (
    <div
      className="p-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        background:
          "linear-gradient(360deg,rgba(213, 244, 246, 1) 0%, rgba(12, 115, 121, 1) 100%)",
        boxShadow: "0 4px 15px rgba(12, 115, 121, 0.2)",
      }}
    >
      <div
        className="p-2 rounded-full transition-all duration-300 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(180deg,rgba(213, 244, 246, 1) 0%, rgba(58, 134, 138, 1) 100%)",
        }}
      >
        <button
          className="text-[#0C7379] text-[14px] font-bold rounded-full leading-[110%] 
                     transition-all duration-300 hover:text-[#0A6065] hover:shadow-inner
                     active:scale-95 active:brightness-95
                     relative overflow-hidden group"
          style={{
            background: "linear-gradient(180deg, #E8FEFF 0%, #DCEBEC 100%)",
            paddingTop: `${py}px`,
            paddingBottom: `${py}px`,
            paddingLeft: `${px}px`,
            paddingRight: `${px}px`,
          }}
        >
          <span className="relative z-10">{content}</span>

          {/* Shimmer effect */}
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                       transition-transform duration-1000 ease-out"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              transform: "skewX(-25deg)",
            }}
          />

          {/* Ripple effect container */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div
              className="absolute inset-0 rounded-full opacity-0 
                         group-active:opacity-100 group-active:animate-ping"
              style={{
                background:
                  "radial-gradient(circle, rgba(12, 115, 121, 0.3) 0%, transparent 70%)",
                animationDuration: "0.6s",
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Button;
