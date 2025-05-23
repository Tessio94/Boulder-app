import { useTranslations } from "next-intl";
import { FaArrowDownLong } from "react-icons/fa6";
import EventsSection from "@/components/EventsSection";

export default function Events() {
  const t = useTranslations("Landing");

  return (
    <>
      <div className="relative h-screen w-full bg-[url(/homepage/boulder_1920.jpg)] bg-cover bg-no-repeat shadow-2xl shadow-amber-400/40">
        <div className="xsm:top-[unset] xsm:bottom-16 absolute top-[200px] left-[50%] w-[800px] max-w-[90%] translate-x-[-50%] sm:w-[505px] sm:max-w-[72%] lg:w-[unset]">
          <div className="relative z-10 mb-10 flex flex-col gap-6">
            <h2 className="bold my-text-stroke2 relative mb-3 text-center text-6xl text-amber-400 after:absolute after:top-[105%] after:left-[50%] after:h-[5px] after:w-[20%] after:translate-x-[-50%] after:rounded-2xl after:border-[1px] after:border-cyan-900 after:bg-amber-400 after:content-[''] xl:text-8xl">
              Last event
            </h2>
            <div className="relative p-8">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-200/50 via-cyan-200/60 to-amber-400/50 shadow-2xl shadow-amber-400/40 backdrop-blur-md"></div>
              <p className="xsm:text-2xl text-3xl text-cyan-900 sm:text-4xl">
                Island meets HAUS Cup
              </p>
              <time
                dateTime="2025-04-24"
                className="xsm:text-xl text-2xl text-cyan-900"
              >
                24.04.
              </time>{" "}
              -{" "}
              <time
                dateTime="2025-05-24"
                className="xsm:text-xl text-2xl text-cyan-900"
              >
                24.05.2025
              </time>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-8 p-8">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-200/50 via-cyan-200/60 to-amber-400/50 shadow-2xl shadow-amber-400/40 backdrop-blur-md"></div>
            <ul className="ml-7 flex list-disc flex-col gap-2">
              <li className="font-nunito xsm:text-xl text-2xl text-cyan-900 sm:text-3xl">
                Find events in near future
              </li>
              <li className="font-nunito xsm:text-xl text-2xl text-cyan-900 sm:text-3xl">
                Find past events{" "}
              </li>
              <li className="font-nunito xsm:text-xl text-2xl text-cyan-900 sm:text-3xl">
                Find events close to you
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#events"
                className="b-cyan-900 group xsm:text-xl cursor-pointer rounded-lg bg-amber-400 px-4 py-2 text-2xl text-cyan-900 transition-all duration-500 hover:bg-cyan-900 hover:text-amber-400 sm:text-3xl"
              >
                <span className="group/inner relative flex items-center gap-3 after:absolute after:top-[105%] after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] group-hover:after:w-[85%]">
                  Find list of events below{" "}
                  <FaArrowDownLong className="transition-all duration-500 group-hover/inner:translate-y-1.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <EventsSection />
    </>
  );
}
