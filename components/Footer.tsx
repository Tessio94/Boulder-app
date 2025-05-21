"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="z-10 flex w-full max-w-[1920px] items-center justify-between bg-cyan-100/40 px-26 py-16">
      <Link href="/">
        <Image
          className="logo"
          src="/header/logo3.svg"
          alt="Boulder logo"
          width={200}
          height={150}
        />
      </Link>

      <div>
        <p className="flex items-center gap-5 text-2xl text-cyan-900">
          <Image
            className="rotate-"
            src="/homepage/bouldering3.svg"
            alt=""
            width={33}
            height={60}
          />
          <span className="text-center text-3xl">{t("text1")}</span>
          <Image
            src="/homepage/bouldering6.svg"
            alt=""
            width={43}
            height={60}
          />
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Link
          className="flex items-center gap-3 text-3xl font-extrabold text-cyan-900/90"
          href="https://www.facebook.com/dino.routesetter/"
        >
          <Image
            src="/landing/facebook.svg"
            alt="ikona za login"
            width={60}
            height={60}
          />
        </Link>
        <Link
          className="flex items-center gap-3 text-3xl font-extrabold text-cyan-900/90"
          href="https://www.instagram.com/dino.routesetting/"
        >
          <Image
            src="/landing/instagram.svg"
            alt="ikona za login"
            width={60}
            height={60}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
