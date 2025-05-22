"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { containerVariants, listItemVariants } from "@/lib/animation";

const Landing = () => {
  const t = useTranslations("Landing");

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden">
      <Image
        className="object-contain"
        src="/landing/people_boulder2_1920.jpg"
        alt="climbers in front of boulder"
        width={1920}
        height={1080}
      />
      {/* 3xl:top-[450px] */}
      <motion.div className="absolute top-[450px] left-[100px] z-10">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-200/50 via-cyan-200/60 to-amber-400/50 shadow-2xl shadow-amber-400/40 backdrop-blur-md"></div>
        <div className="flex flex-col gap-8 p-8">
          <motion.h2
            className="bold relative text-6xl text-amber-400 after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-[20%] after:bg-amber-400 after:content-['']"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          >
            {t("title")}
          </motion.h2>
          <motion.ul
            className="ml-7 flex list-disc flex-col gap-2"
            initial="hidden"
            animate="show"
            variants={containerVariants(0.2)}
          >
            {[t("text1"), t("text2"), t("text3")].map((text, idx) => (
              <motion.li
                key={idx}
                className="font-nunito text-2xl text-cyan-900"
                variants={listItemVariants}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="flex gap-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          >
            <button className="b-cyan-900 group cursor-pointer rounded-lg bg-amber-400 px-4 py-2 text-cyan-900 transition-all duration-500 hover:bg-cyan-900 hover:text-amber-400">
              <span className="relative after:absolute after:top-[105%] after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-full">
                {t("button1")}
              </span>
            </button>
            <button className="group cursor-pointer rounded-lg bg-cyan-900 px-4 py-2 text-amber-400 transition-all duration-500 hover:bg-amber-400 hover:text-cyan-900">
              <span className="relative after:absolute after:top-[105%] after:left-0 after:h-0.5 after:w-0 after:bg-cyan-900 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-full">
                {t("button2")}
              </span>
            </button>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          >
            <Link
              href="https://www.instagram.com/dino.routesetting/"
              target="_blank"
            >
              <Image
                className="transition-all duration-500 hover:scale-110"
                src="/landing/facebook.svg"
                alt="Facebook icon"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://www.facebook.com/dino.routesetter/"
              target="_blank"
            >
              <Image
                className="transition-all duration-500 hover:scale-110"
                src="/landing/instagram.svg"
                alt="Instagram icon"
                width={50}
                height={50}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
