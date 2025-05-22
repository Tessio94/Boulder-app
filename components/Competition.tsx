"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { containerVariants, listItemVariants } from "@/lib/animation";
import { useRef } from "react";

const Competition = () => {
  const t = useTranslations("Competition");

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  return (
    <section className="relative flex min-h-[1450px] flex-col items-center gap-[80px] pt-[20px] lg:min-h-[800px] lg:pt-[80px]">
      <h4 className="my-text-stroke mb-[40px] text-6xl text-cyan-900">
        {t("title")}
      </h4>
      <div className="absolute top-[750px] hidden h-[5px] w-[850px] rotate-90 bg-amber-400 sm:block sm:translate-x-[-32%] md:translate-x-[-39%] lg:relative lg:top-[unset] lg:w-[60%] lg:translate-x-[unset] lg:rotate-0">
        <div className="absolute top-[50%] left-0 flex h-[60px] w-[60px] translate-y-[-50%] rotate-270 items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900 lg:rotate-0">
          1
        </div>
        <div className="absolute top-[50%] left-[50%] flex h-[60px] w-[60px] translate-x-[-50%] translate-y-[-50%] rotate-270 items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900 lg:rotate-0">
          2
        </div>
        <div className="absolute top-[50%] right-0 flex h-[60px] w-[60px] translate-y-[-50%] rotate-270 items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900 lg:rotate-0">
          3
        </div>
      </div>
      <div className="relative top-[750px] right-[calc(100vw-10%)] w-[850px] translate-x-[50%] rotate-90 sm:absolute sm:right-[-40%] sm:translate-x-[unset] md:right-[-27%] lg:relative lg:top-[unset] lg:right-[unset] lg:w-[60%] lg:rotate-0">
        <div className="1_5xl:w-[400px] absolute flex h-[300px] translate-x-[-50%] rotate-270 flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50 sm:w-[50%] md:w-[60%] lg:left-0 lg:w-[280px] lg:rotate-0 xl:w-[300px]">
          <p className="text-3xl">{t("step1.title")}</p>
          <motion.div
            className="flex w-full flex-col gap-5"
            ref={ref1}
            initial="hidden"
            animate={isInView1 ? "show" : "hidden"}
            variants={containerVariants(0)}
          >
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step1.bullet1")}
            </motion.p>
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step1.bullet2")}
            </motion.p>
          </motion.div>
        </div>
        <div className="1_5xl:w-[400px] absolute left-[50%] flex h-[300px] translate-x-[-50%] rotate-270 flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50 sm:w-[50%] md:w-[60%] lg:w-[280px] lg:rotate-0 xl:w-[300px]">
          <p className="text-3xl">{t("step2.title")}</p>
          <motion.div
            className="flex w-full flex-col gap-5"
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? "show" : "hidden"}
            variants={containerVariants(0.5)}
          >
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step2.bullet1")}
            </motion.p>
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step2.bullet1")}
            </motion.p>
          </motion.div>
        </div>
        <div className="1_5xl:w-[400px] absolute right-0 flex h-[300px] translate-x-[50%] rotate-270 flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50 sm:w-[50%] md:w-[60%] lg:w-[280px] lg:rotate-0 xl:w-[300px]">
          <p className="text-3xl">{t("step3.title")}</p>
          <motion.div
            className="flex w-full flex-col gap-5"
            ref={ref3}
            initial="hidden"
            animate={isInView3 ? "show" : "hidden"}
            variants={containerVariants(1.0)}
          >
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step3.bullet1")}
            </motion.p>
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step3.bullet2")}
            </motion.p>
            <motion.p className="text-xl" variants={listItemVariants}>
              &#x2022; {t("step3.bullet3")}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
