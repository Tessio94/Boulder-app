import Image from "next/image";
import { useTranslations } from "next-intl";

const LoginBanner = () => {
  const t = useTranslations("LoginBanner");

  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      <Image
        className="absolute inset-0 object-contain"
        src="/homepage/boulder_1920.jpg"
        alt="boulder wall"
        width={1920}
        height={1080}
      />
      <div className="absolute top-[50%] left-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-10 p-10">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-200/50 via-cyan-200/60 to-amber-400/50 shadow-2xl shadow-amber-400/40 backdrop-blur-md"></div>
        <h5 className="mb-10 text-4xl text-cyan-900">{t("title")}</h5>
        <p className="text-2xl text-cyan-900">{t("text1")}</p>
        <div className="flex items-center gap-10">
          <button className="b-cyan-900 group cursor-pointer rounded-lg bg-amber-400 px-4 py-2 text-cyan-900 transition-all duration-500 hover:bg-cyan-900 hover:text-amber-400">
            <span className="relative text-2xl after:absolute after:top-[100%] after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-full">
              {t("button1")}
            </span>
          </button>
          <button className="group cursor-pointer rounded-lg bg-cyan-900 px-4 py-2 text-amber-400 transition-all duration-500 hover:bg-amber-400 hover:text-cyan-900">
            <span className="relative text-2xl after:absolute after:top-[100%] after:left-0 after:h-0.5 after:w-0 after:bg-cyan-900 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-full">
              {t("button2")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
