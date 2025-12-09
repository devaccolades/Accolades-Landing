// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function YoutubeMarketing() {
//     const [play, setPlay] = useState(false);

//     return (
//         <section className="w-full bg-[#F6F6F8] rounded-3xl p-6 md:p-10 font-mont">
//             <div className="containers mx-auto grid md:grid-cols-2 gap-4 lg:gap-12 items-center">

//                 {/* LEFT CONTENT */}
//                 <div className="space-y-4">
//                     {/* badge */}
//                     <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full">
//                         <Image
//                             src="/new-smm/yt.svg"
//                             alt="Optimized for Sales"
//                             width={20}
//                             height={20}
//                             className="w-3 h-3 md:w-4 md:h-4 object-contain"
//                         />
//                         <span className="text-sm font-medium">Video Platform</span>
//                     </div>

//                     <h2 className="text-[20px] sm:text-[23px] xl:text-[32px] font-bold text-black leading-[26px] sm:leading-[30px] xl:leading-[38px]">
//                         YOUTUBE MARKETING</h2>

//                     <p className="text-black font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[150%] max-w-xl">
//                         YouTube is more than a video platform – it's the world's second-largest
//                         search engine after Google. Video is the top-performing content on
//                         social media, so having a strong YouTube presence is key.
//                     </p>

//                     {/* Feature Cards */}
//                     <div className="space-y-4">
//                         {/* <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"> */}
//                         <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
//                             <div className="w-9 h-9 lg:w-10 lg:h-12 flex-shrink-0 overflow-hidden">
//                                 <Image
//                                     src="/new-smm/vd.svg"
//                                     alt="Advanced AI Targeting"
//                                     width={40}
//                                     height={40}
//                                     className="w-full h-full object-contain "
//                                 />
//                             </div>
//                             <div>
//                                 <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
//                                     Engaging Video Content</h4>
//                                 <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
//                                     Create demos, tutorials, and testimonials that educate and entertain your audience.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"> */}
//                         <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
//                             <div className="w-9 h-9 lg:w-10 lg:h-12 flex-shrink-0 overflow-hidden">
//                                 <Image
//                                     src="/new-smm/se.svg"
//                                     alt="Advanced AI Targeting"
//                                     width={40}
//                                     height={40}
//                                     className="w-full h-full object-contain "
//                                 />
//                             </div>
//                             <div>
//                                 <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
//                                     SEO Optimized</h4>
//                                 <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
//                                     We optimize titles, descriptions, and tags for search so people discover your videos naturally.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT — VIDEO PLAYER */}
//                 <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black">
//                     {!play ? (
//                         <>
//                             {/* Thumbnail */}
//                             <Image
//                                 src="/your-thumbnail.jpg"  // replace with your image
//                                 alt="Video Thumbnail"
//                                 fill
//                                 className="object-cover"
//                             />

//                             {/* Play Button */}
//                             <button
//                                 onClick={() => setPlay(true)}
//                                 className="absolute inset-0 flex items-center justify-center"
//                             >
//                                 <div className="bg-white/80 hover:bg-white p-4 rounded-full transition">
//                                     <svg
//                                         width="32"
//                                         height="32"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="red"
//                                         strokeWidth="2.5"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <polygon points="5 3 19 12 5 21 5 3" />
//                                     </svg>
//                                 </div>
//                             </button>
//                         </>
//                     ) : (
//                         // YouTube iframe autoplays
//                         <iframe
//                             className="w-full h-full"
//                             src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
//                             title="YouTube video player"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";
import { useState } from "react";
import Image from "next/image";

export default function YoutubeMarketing() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full bg-[#F6F6F8] rounded-3xl py-4 md:py-10 font-mont">
            <div className="containers mx-auto grid md:grid-cols-2 gap-4 lg:gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-3 lg:space-y-4">

                    <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full">
                        <Image
                            src="/new-smm/yt.svg"
                            width={20}
                            height={20}
                            alt="Video Platform"
                            className="object-contain w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-sm font-medium">Video Platform</span>
                    </div>

                    <h2 className="text-[20px] sm:text-[23px] xl:text-[32px] font-bold text-black leading-[26px] sm:leading-[30px] xl:leading-[38px]">
                        YOUTUBE MARKETING
                    </h2>

                    <p className="text-black font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[150%] max-w-xl">
                        YouTube is more than a video platform – it's the world's second-largest
                        search engine after Google. Video is the top-performing content on
                        social media, so having a strong YouTube presence is key.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">

                        <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
                            <div className="w-9 h-9 lg:w-10 lg:h-12 overflow-hidden flex-shrink-0">
                                <Image src="/new-smm/vd.svg" width={40} height={40} alt="Video" />
                            </div>
                            <div>
                                <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1">
                                    Engaging Video Content
                                </h4>
                                <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                                    Create demos, tutorials, and testimonials that educate and entertain your audience.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
                            <div className="w-9 h-9 lg:w-10 lg:h-12 overflow-hidden flex-shrink-0">
                                <Image src="/new-smm/se.svg" width={40} height={40} alt="SEO" />
                            </div>
                            <div>
                                <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1">
                                    SEO Optimized
                                </h4>
                                <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                                    We optimize titles, descriptions, and tags so people discover your videos naturally.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE — THUMBNAIL WITH PLAY BUTTON */}
                <div
                    // className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group"
                    className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-[30px] overflow-hidden"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src="/new-smm/thumbnail.png"    // <<--- REPLACE THIS
                        alt="Video Thumbnail"
                        fill
                        className="object-cover"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 group-hover:bg-white p-4 md:p-5 rounded-full transition">
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="red"
                            >
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* POPUP VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-5 right-5 text-white text-3xl"
                    >
                        ×
                    </button>

                    <div className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
                        <video
                            className="w-full h-full"
                            controls
                            autoPlay
                        >
                            <source src="/videos/video3.mp4" type="video/mp4" /> 
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

        </section>
    );
}
