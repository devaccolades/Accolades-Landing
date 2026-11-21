export const SERVICES = [
    {
        "src": "/ui-ux/images/services/service-1.jpg",
        "title": "Website & Landing Page UI/UX Design",
        "desc": "Create responsive website interfaces with clear messaging, readable layouts and well-placed calls to action."
    },
    {
        "src": "/ui-ux/images/services/service-2.jpg",
        "title": "Mobile App UI/UX Design",
        "desc": "We create intuitive mobile interfaces that make app navigation simple and seamless."
    },
    {
        "src": "/ui-ux/images/services/service-3.jpg",
        "title": "UX Research and Website Audits",
        "desc": "Review existing user journeys, page structures and audience needs to identify usability problems and areas for improvement."
    },
    {
        "src": "/ui-ux/images/services/service-4.jpg",
        "title": "Wireframing and Prototyping",
        "desc": "We build wireframes and interactive prototypes to plan and validate design concepts."
    },
    {
        "src": "/ui-ux/images/services/service-5.jpg",
        "title": "SaaS, Web Application and Dashboard Design",
        "desc": "Present complex information through structured interfaces, clear navigation and consistent visual elements."
    },
    {
        "src": "/ui-ux/images/services/service-6.jpg",
        "title": "Website Redesign and Usability Improvements",
        "desc": "We improve existing website layouts, navigation and usability to deliver better user experiences."
    }
];
export const SHOWCASE_FRAME_COUNT = 180;
export const SHOWCASE_FRAMES = Array.from({ length: SHOWCASE_FRAME_COUNT }, (_, i) => `/ui-ux/frames/f-${String(i + 1).padStart(3, "0")}.webp`);
export const WORK_SUBTITLE = "Website with React and Next.js";
// Placeholder projects, same as the original (alternating two entries)
export const WORKS = [0, 1, 2, 3, 4, 5].map((i) => ({
    name: i % 2 ? "Aurex Builders" : "CIDBI",
    subtitle: WORK_SUBTITLE,
    image: `/ui-ux/images/works/work-${(i % 2) + 1}.jpg`,
    href: "#",
}));
export const HERO_VIDEO_URL = "/ui-ux/video/hero.mp4";
