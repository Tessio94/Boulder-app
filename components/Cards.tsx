"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, cardsVariants } from "@/lib/animation";
import Image from "next/image";

const Cards = () => {
  const t = useTranslations("Cards");

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      className="relative z-10 mb-[80px] flex flex-wrap items-stretch justify-between gap-y-12 px-[20px] sm:px-[50px] lg:px-[100px] xl:justify-between xl:gap-12 2xl:px-[160px]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants(0)}
    >
      <motion.div
        className="bg-cards relative z-20 flex flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60 md:max-w-[45%] xl:max-w-[30%]"
        variants={cardsVariants}
      >
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-[50%] after:h-[5px] after:w-[70px] after:translate-x-[-50%] after:bg-amber-400 after:content-['']">
          {t("card1.title")}
        </h4>
        <div className="xsm:text-lg flex flex-col gap-3 text-xl text-cyan-900">
          <p>
            {t("card1.text1_1")}{" "}
            <strong className="my-text-stroke"> {t("card1.strong1")}</strong>{" "}
            {t("card1.text1_2")}
          </p>
          <p>{t("card1.text2")}</p>
          <p>{t("card1.text3")}</p>
        </div>
      </motion.div>
      <motion.div
        className="bg-cards flex flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60 md:max-w-[45%] xl:max-w-[30%]"
        variants={cardsVariants}
      >
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-[50%] after:h-[5px] after:w-[70px] after:translate-x-[-50%] after:bg-amber-400 after:content-['']">
          {t("card2.title")}
        </h4>
        <div className="xsm:text-lg flex flex-col gap-3 text-xl text-cyan-900">
          <p>{t("card2.text1")}</p>
          <p>
            {t("card2.text2_1")}{" "}
            <strong className="my-text-stroke">{t("card2.strong2")}</strong>{" "}
            {t("card2.text2_2")}
          </p>
          <p>{t("card2.text3")}</p>
        </div>
      </motion.div>
      <motion.div
        className="bg-cards mx-auto flex flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60 md:max-w-[45%] xl:mx-[unset] xl:max-w-[30%]"
        variants={cardsVariants}
      >
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-[50%] after:h-[5px] after:w-[70px] after:translate-x-[-50%] after:bg-amber-400 after:content-['']">
          {t("card3.title")}
        </h4>
        <div className="xsm:text-lg flex flex-col gap-3 text-xl text-cyan-900">
          <p>{t("card3.text1")}</p>
          <p>
            {t("card3.text2_1")}{" "}
            <strong className="my-text-stroke">{t("card3.strong2")}</strong>{" "}
            {t("card3.text2_2")}
          </p>
          <p>{t("card3.text3")}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
