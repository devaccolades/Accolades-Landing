"use client";
import { useState } from "react";
import arrow from "../../../public/we-are-a-team/8666713_arrow_up_right_icon (3) 3.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";

const CallToAction = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="font-mont bg-white py-8 lg:py-16 w-[90%] lg:w-[80%] mx-auto flex items-center justify-center">
                <div className="text-center max-w-3xl px-4">
                    <h2 className="font-mont text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                        Work with a Team <br />
                        <span className="offset-4 ">
                            That Owns the Outcome
                        </span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-gray-500">
                        No excuses. No ambiguity. Just results you can count on.
                    </p>
                    {/* <Link href="/contact-us"> */}
                    <button onClick={() => setOpen(true)}
                        className="mt-8 inline-flex items-center gap-2 bg-[#0C7379] cursor-pointer hover:bg-[#0C7879] text-white font-medium px-6 py-3 rounded-full transition">
                        Start a Project
                        <Image className="text-lg" src={arrow} alt="icon" />
                    </button>
                    {/* </Link> */}
                </div>
            </section>
            <Modal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default CallToAction;
