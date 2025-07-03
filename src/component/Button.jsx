import React from 'react'

function Button({content, py, px}) {
  return (
    <div className="p-2 rounded-full" style={{
              background:
                "linear-gradient(360deg,rgba(213, 244, 246, 1) 0%, rgba(12, 115, 121, 1) 100%)",
            }}>
          <div
            className="p-2 rounded-full"
            style={{
              background:
                "linear-gradient(180deg,rgba(213, 244, 246, 1) 0%, rgba(58, 134, 138, 1) 100%)",
            }}
          >
            <button className={`bg-[#C5E3E4] text-[#0C7379] text-[14px] font-bold py-[${py}px] px-[${px}px] rounded-full`}>
              {content}
            </button>
          </div>
        </div>
  )
}

export default Button