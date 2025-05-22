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

      <nav className="hidden lg:block">
        <ul className="flex lg:gap-10 xl:gap-20">
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

      <div className="my-text-stroke ml-auto flex items-center lg:ml-0 lg:gap-4 xl:gap-10">
        <Link
          className="hidden items-center gap-3 rounded-2xl bg-cyan-900/10 px-2 py-[1px] text-3xl font-extrabold text-cyan-900/90 transition-all duration-500 hover:bg-cyan-900/30 lg:flex"
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

      {/* Mobile hamb menu */}
      <button className="lg:hidden">
        <Image src="/icons/menu.svg" alt="Menu" width={40} height={40} />
      </button>
      {/* Mobile navigation */}
      <nav className="fixed top-0 bottom-0 left-0 z-20 flex w-64 translate-x-[-100%] flex-col justify-between bg-cyan-200 bg-gradient-to-b from-cyan-900/10 to-amber-400/50 px-6 pt-[125px] pb-[225px] shadow-lg lg:hidden">
        <ul className="flex flex-col gap-8 text-2xl font-bold text-cyan-900">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href={t("linkEvents")}>{t("events")}</Link>
          </li>
          <li>
            <Link href={t("linkGallery")}>{t("gallery")}</Link>
          </li>
        </ul>
        <div className="my-text-stroke flex flex-col items-start gap-8">
          <Link
            className="flex items-center gap-3 rounded-2xl bg-cyan-900/10 text-3xl font-extrabold text-cyan-900/90 transition-all duration-500 hover:bg-cyan-900/30"
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
      </nav>
    </header>
  );
};

export default Header;
