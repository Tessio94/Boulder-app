"use client";

import Image from "next/image";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useMemo } from "react";

const LocalePicker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  // console.log("router", router);
  // console.log("pathname", pathname);
  // console.log("locale", locale);

  const currentLocale = locale as string;
  const languages = ["en", "de"];

  const pickLang = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const otherLocales = useMemo(
    () => languages.filter((l) => l !== currentLocale),
    [currentLocale],
  );

  return (
    <div className="relative rounded-2xl bg-cyan-900/10 px-2 py-[1px] transition-all duration-500 hover:bg-cyan-900/30">
      <div className="group cursor-pointer">
        <div className="flex items-center gap-3 text-3xl font-extrabold text-cyan-900/90">
          <div className="h-[21px] w-[21px] overflow-hidden rounded-full">
            <Image
              className="object-contain"
              src={
                currentLocale === "en"
                  ? "/header/english.svg"
                  : "/header/germany.svg"
              }
              alt={
                currentLocale === "en" ? "Flag of Britain" : "Flag of Germany"
              }
              width={21}
              height={21}
            />
          </div>
          {currentLocale?.toUpperCase()}
        </div>

        <div className="absolute left-0 z-10 max-h-0 w-full rounded rounded-2xl bg-cyan-900/10 opacity-0 transition-all duration-500 group-hover:max-h-60 group-hover:bg-cyan-900/30 group-hover:opacity-100">
          {otherLocales.map((lang) => (
            <div
              key={lang}
              onClick={() => pickLang(lang)}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-[1px] text-3xl font-semibold text-cyan-900/90 transition-all duration-500 hover:text-cyan-700/80"
            >
              <div className="h-[21px] w-[21px] shrink-0 overflow-hidden rounded-full">
                <Image
                  className="object-contain"
                  src={
                    currentLocale === "en"
                      ? "/header/germany.svg"
                      : "/header/english.svg"
                  }
                  alt={
                    currentLocale === "en"
                      ? "Flag of Germany"
                      : "Flag of Britain"
                  }
                  width={21}
                  height={21}
                />
              </div>
              {lang.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalePicker;
