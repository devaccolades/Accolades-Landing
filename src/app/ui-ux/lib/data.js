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
export const WORKS = [
    { name: "CIDBI", image: "cidbi.webp", href: "https://cidbi.com/" },
    { name: "Aurex Builders", image: "aurex.webp", href: "https://aurexbuilders.com/" },
    { name: "ABE Education", image: "abe-education.webp", href: "https://abeedu.com/" },
    { name: "ABE Services", image: "abe-services.webp", href: "https://www.abeservices.in/" },
    { name: "Alpha Arc", image: "alpha-arc.webp", href: "https://alphaarc.in/" },
    { name: "Asha Education", image: "asha.webp", href: "https://www.asha.education/" },
    { name: "HERMES EV", image: "hermes.webp", href: "https://hermesev.com/" },
    { name: "HYBERMACH", image: "hybermach.webp", href: "https://hybermach.com/" },
    { name: "RecruitNet", image: "recruitnet.webp", href: "https://www.recruitnet.ie/" },
    { name: "Classic Homes", image: "classic-homes.webp", href: "https://www.classichomes.in/" },
    { name: "Classic Insides", image: "classic-insides.webp", href: "https://classicinsides.com/" },
].map((project) => ({
    name: project.name,
    subtitle: WORK_SUBTITLE,
    image: `/ui-ux/images/works/${project.image}`,
    href: project.href,
}));
// Exact video extracted from the supplied HTML. Its frequent keyframes allow
// short, responsive seeks in either scroll direction (40 keyframes / 10s).
export const HERO_VIDEO_URL = "/ui-ux/hero-reference.mp4";
