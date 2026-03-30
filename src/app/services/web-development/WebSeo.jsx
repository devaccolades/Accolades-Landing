"use client";
import React, { useEffect, useRef, useState } from "react";


function WebSeo() {

    return (

        <div className="containers font-mont">
            <div className="flex flex-col md:flex-row justify-between items-start gap-[15px]">
                <div className="w-[100%] md:w-[50%] flex flex-col">
                    <div className="mb-[16px]">
                        <h2 className="text-[14px] md:text-[16px]  font-bold mb-[5px]">
                            Why Branding MattersOur Web Development Services
                        </h2>
                        {/* <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            
                        </h2> */}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We cover the whole web stack. Each service aligns with your growth needs and budget.

                            </p>



                        </div>
                    </div>
                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Why Branding MattersOur Web Development Services
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We build custom web apps from the database to the browser. We use React for fast front ends and Next.js or Python for robust back ends. This approach gives you a single team that owns the full product.
                            </p>

                        </div>
                    </div>
                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            WordPress Development
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We build SEO-ready, fast WordPress sites that are easy to manage.
                                Our WordPress work includes custom themes, plugin setup, and content workflows.
                                We secure installs, tune performance, and hand over a clean CMS that your team can use with confidence.
                            </p>

                        </div>
                    </div>
                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            E-commerce Development
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We create stores that sell. From catalog design and secure checkout to inventory and shipping integrations,
                                we build stores that scale. We implement product schema, optimize product pages, and improve checkout UX to reduce cart drop-off.

                            </p>

                        </div>
                    </div>
                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h2 className="text-[14px] md:text-[16px]   font-bold mb-[5px]">
                            Technologies We Use — Modern Stacks for Real Results
                        </h2>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We choose tools that speed delivery and keep code healthy.
                            </p>

                        </div>
                    </div>
                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            React.js for Front-End Speed and Interactivity
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                React lets us build modular, reusable UIs. We use React to craft responsive,
                                single-page apps and dynamic interfaces. Its component model improves maintainability and frontend performance.

                            </p>

                        </div>
                    </div>

                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Next.js for Structured Back-Ends
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                For JavaScript back ends, we use Next.js. It provides clear architecture,
                                dependency injection, and scalable modules. Next.js helps us deliver reliable APIs and services that handle growth.
                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Python (Django, FastAPI) for Robust Back-Ends
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                Python frameworks let us deliver secure, data-driven systems quickly.
                                Django speeds up complex feature builds. FastAPI serves high-performance APIs for async workloads.
                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h2 className="text-[14px] md:text-[16px]   font-bold mb-[5px]">
                            What We Build — Real Solutions for Real Needs
                        </h2>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                <span className="font-semibold">Responsive Websites:</span> Mobile-first layouts and flexible grids for all devices.
                            </p>

                            <p className="text-[12px] md:text-[13px]">
                                <span className="font-semibold">SaaS & Portals:</span> Multi-tenant apps, dashboards, and user management.
                            </p>

                            <p className="text-[12px] md:text-[13px]">
                                <span className="font-semibold">APIs & Integrations:</span> Payment gateways, CRMs, shipping providers, and analytics.
                            </p>

                            <p className="text-[12px] md:text-[13px]">
                                <span className="font-semibold">Content Sites & Blogs:</span> Fast, structured content systems built for SEO.
                            </p>

                            <p className="text-[12px] md:text-[13px]">
                                <span className="font-semibold">Progressive Web Apps (PWAs):</span> App-like experience for mobile users.
                            </p>

                            <p className="text-[12px] md:text-[13px]">
                                We design UI/UX to match brand tone and user goals. We focus on frontend performance,
                                image optimisation, and fast time to interactive.
                            </p>

                        </div>
                    </div>

                     <div className="mb-[16px]">
                        <h2 className="text-[14px] md:text-[16px]  font-bold mb-[5px]">
                            Why Choose Accolades Integrated — Web Development Company in Kochi
                        </h2>
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Local Presence, National Reach
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                As a Web Development Company in Kochi, we know local business needs.
                                We deliver projects for Kochi clients and scale them across India. We work with startups, agencies, and enterprises.

                            </p>

                        </div>
                    </div>
                    
                </div>






                <div className="w-[100%] md:w-[50%] flex flex-col">
                    {/* new section  */}
                   

                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            End-to-End Delivery
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We are also a Web Designing Company in Kochi. That means we cover design, development,
                                testing, and launch. One team handles the full cycle to cut timelines and remove gaps.
                            </p>

                        </div>
                    </div>

                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Focus on Quality and Security
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We follow coding standards, run security scans, and test for edge cases.
                                We use HTTPS, secure headers, and data validation to protect users and data.
                            </p>

                        </div>
                    </div>

                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Performance & SEO-First Mindset
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We optimise for speed and search visibility. Faster pages improve user trust and ranking.
                                We deliver semantic markup, meta tags, and accessible HTML.
                            </p>

                        </div>
                    </div>


                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h2 className="text-[14px] md:text-[16px] font-bold mb-[5px]">
                            Our Development Process
                        </h2>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We use a clear, repeatable flow to reduce risk and speed delivery.

                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            1. Discovery & Scope
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We map goals, users, and success metrics. This forms a clear project brief and timeline.

                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">
                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            2. Design & Prototype
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                UX wireframes and UI mockups show the look and flow. You review early, and we refine fast.

                            </p>

                        </div>
                    </div>


                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            3. Development & Testing
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We build features in sprints. We run unit, integration, and end-to-end tests.
                                We track issues and fix bugs quickly.
                            </p>


                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            4. Launch & Monitoring
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We deploy to production with rollback plans. We monitor performance and error logs and tune as needed.
                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h3 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            5. Support & Growth
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                We offer maintenance, feature updates, and scaling plans. We work as a long-term tech partner.

                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h2 className="text-[14px] md:text-[16px]  font-bold mb-[5px]">
                            Case Fit — Who Benefits Most
                        </h2>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                Our services suit these teams and goals:

                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                            <ul className=" font-mont  text-left mt-[0px] text-[12px] md:text-[13px] leading-[150%] list-disc">
                                <li>Startups launching an MVP.</li>
                                <li>Startups launching an MVP.</li>
                                <li>Agencies that need white-label development.</li>
                            </ul>
                            <ul className=" font-mont  text-left mt-[0px] text-[12px] md:text-[13px] leading-[150%] list-disc">
                                
                                <li>Retailers who need fast e-commerce.</li>
                                <li>Corporates needing secure portals.</li>
                                
                            </ul>
                            </div>

                            <p className="text-[12px] md:text-[13px]">
                                We align tech choices to your business model and growth path.
                            </p>

                        </div>
                    </div>

                    {/* new section  */}
                    <div className="mb-[16px]">

                        <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                            Call to Action — Start Your Project with Kochi’s Trusted Web Development Team
                        </h2>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] md:text-[13px]">
                                Ready to build a fast, secure website? Contact Accolades Integrated, your Web Development Company in Kochi. 
                                Request a quote or a free technical audit. We will map a plan that fits your needs and budget.
                            </p>

                        </div>
                    </div>


                   

                </div>
            </div>
        </div>



        // </section>
    );
}



export default WebSeo;
