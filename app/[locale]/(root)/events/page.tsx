import Image from "next/image";
import { useTranslations } from "next-intl";

import { FaArrowDownLong } from "react-icons/fa6";

export default function Events() {
  const t = useTranslations("Landing");
  return (
    <div className="relative h-screen w-full bg-cyan-100/40">
      <Image
        className="absolute top-0 right-0 z-10 rounded-tl-full rounded-bl-full object-contain"
        src="/events/climber_boulder.jpg"
        alt="boulder"
        width={720}
        height={1080}
      />
      {/* 3xl:top-[450px] */}
      <div className="absolute top-[450px] left-[50%] z-0 translate-x-[-50%]">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-200/50 via-cyan-200/60 to-amber-400/50 shadow-2xl shadow-amber-400/40 backdrop-blur-md" />
        <div className="flex flex-col gap-8 p-8">
          <h2 className="bold relative text-6xl text-amber-400 after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-[20%] after:bg-amber-400 after:content-['']">
            Events
          </h2>
          <ul className="ml-7 flex list-disc flex-col gap-2">
            <li className="font-nunito text-2xl text-cyan-900">
              Find events in near future
            </li>
            <li className="font-nunito text-2xl text-cyan-900">
              Find past events{" "}
            </li>
            <li className="font-nunito text-2xl text-cyan-900">
              Find events close to you
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="b-cyan-900 group cursor-pointer rounded-lg bg-amber-400 px-4 py-2 text-2xl text-cyan-900 transition-all duration-500 hover:bg-cyan-900 hover:text-amber-400">
              <span className="group/inner relative flex items-center gap-3 after:absolute after:top-[105%] after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-[85%]">
                Find list of events below{" "}
                <FaArrowDownLong className="transition-all duration-500 group-hover/inner:translate-y-1.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
