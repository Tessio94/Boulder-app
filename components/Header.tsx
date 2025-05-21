"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocalePicker from "./LocalePicker";

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");

  return (
    <header className="absolute z-10 flex w-full max-w-[1920px] items-center justify-between bg-cyan-100/80 px-16 py-3">
      <Link href="/">
        <Image
          className="logo"
          src="/header/logo3.svg"
          alt="Boulder logo"
          width={135}
          height={101}
        />
      </Link>

      <nav>
        <ul className="flex gap-20">
          <li>
            <Link
              href="/"
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[80px]",
                pathname === "/"
                  ? "text-cyan-700/80 after:translate-x-[40px]"
                  : "text-cyan-900",
              )}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href={t("linkEvents")}
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[108px]",
                pathname === "/events"
                  ? "text-cyan-700/80 after:translate-x-[54px]"
                  : "text-cyan-900",
              )}
            >
              {t("events")}
            </Link>
          </li>
          <li>
            <Link
              href={t("linkDetails")}
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[108px]",
                pathname === "/details"
                  ? "text-cyan-700/80 after:translate-x-[54px]"
                  : "text-cyan-900",
              )}
            >
              {t("details")}
            </Link>
          </li>
          <li>
            <Link
              href={t("linkGallery")}
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[114px]",
                pathname === "/gallery"
                  ? "text-cyan-700/80 after:translate-x-[57px]"
                  : "text-cyan-900",
              )}
            >
              {t("gallery")}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="my-text-stroke flex items-center gap-10">
        <Link
          className="flex items-center gap-3 rounded-2xl bg-cyan-900/10 px-2 py-[1px] text-3xl font-extrabold text-cyan-900/90 transition-all duration-500 hover:bg-cyan-900/30"
          href={t("linkLogin")}
        >
          <Image
            src="/header/login.svg"
            alt="ikona za login"
            width={40}
            height={40}
            className="red"
          />
          {t("login")}
        </Link>
        <LocalePicker />
      </div>
    </header>
  );
};

export default Header;
