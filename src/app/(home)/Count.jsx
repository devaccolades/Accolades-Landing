"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

import cover from "../../../public/home/Line 1.svg";
import line from "../../../public/Line 1 (2).svg";


function Counter({ from, to, duration = 2 }) {
  const ref = useRef(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

const Count = () => {
  return (
    <section className="relative w-full py-14 bg-cover bg-center">
      <div className="cover-count h-full w-full relative">
        <Image
          src={cover}
          alt="line"
          className="count-desktop w-full h-full min-h-[300px] object-cover"
        />
        <Image
          src={line}
          alt="line"
          className="count-mobile w-full h-auto object-contain"
        />
      </div>

      <div className="count-text containers absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            <Counter from={0} to={150} duration={2} />+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Projects Done
          </p>
        </motion.div>

        <motion.div
          className="border-t md:border-t-0 md:border-l border-white h-full flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            <Counter from={0} to={500} duration={2.5} />+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Happy Customers
          </p>
        </motion.div>

        <motion.div
          className="border-t md:border-t-0 md:border-l border-white h-full flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            <Counter from={0} to={75} duration={2} />+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Team Members
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Count;
