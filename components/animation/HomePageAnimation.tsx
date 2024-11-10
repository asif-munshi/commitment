"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";

interface HomePageAnimationProps extends MotionProps {
  className?: string;
}

const HomePageAnimation: React.FC<HomePageAnimationProps> = ({
  className,
  ...motionProps
}) => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        className="font-display flex justify-center text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Image
          src="/commitment.svg"
          alt="Commitment logo"
          height={400}
          width={400}
          priority
        />
      </motion.div>
      <div className="divide-y-2 divide-[#f25936ff]">
        <motion.h1
          className="scroll-m-20 text-center text-4xl font-extrabold uppercase tracking-tight lg:text-5xl"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Commitment Accesories
        </motion.h1>
        <motion.p
          className="text-center font-[family-name:var(--font-geist-mono)] leading-7"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          All Kinds of Garments Accessories Manufacturer, Exporter & Supplier
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HomePageAnimation;
