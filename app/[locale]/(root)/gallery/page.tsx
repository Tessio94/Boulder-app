import GalleryGrid from "@/components/GalleryGrid";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

const Gallery = () => {
  return (
    <>
      <div className="relative z-0 flex h-screen min-h-[800px] w-full items-center justify-center overflow-hidden bg-[url(/homepage/gallery_1024.jpg)] bg-no-repeat lg:block lg:h-fit lg:min-h-[unset] lg:bg-none">
        <Image
          className="hidden lg:block lg:h-auto lg:object-contain"
          src="/homepage/gallery.jpg"
          alt="climber on boulder"
          width={1920}
          height={1080}
        />
        {/* <Image
        src="/events/climber_boulder.jpg"
        alt="climber on a boulder"
        width={720}
        height={1080}
        className="absolute right-0 rounded-tl-full rounded-bl-full"
        /> */}
        {/* <div className="absolute bottom-[4%] left-[5%] flex items-center gap-40 lg:left-[18%] xl:left-[5%] 2xl:gap-12">
        <Image
        src="/events/chalk.svg"
        alt=""
        width={200}
        height={200}
        className=""
        />
        <Image
        src="/homepage/bouldering5.svg"
        alt=""
        width={185}
        height={200}
        className="hidden xl:block"
        />
        <Image
        src="/homepage/climber.svg"
        alt=""
        width={200}
        height={200}
        className="hidden 2xl:block"
        />
        <Image
        src="/homepage/bouldering2.svg"
        alt=""
        width={116}
        height={200}
        className="3xl:block hidden"
        />
        </div> */}
        <div className="absolute top-[50%] left-[50%] flex w-[800px] max-w-[90%] translate-x-[-50%] flex-col gap-8 rounded-2xl xl:gap-12">
          <div className="flex flex-col items-center gap-14 sm:gap-10 xl:gap-12">
            <h5 className="my-text-stroke2 relative text-5xl font-extrabold text-amber-400 after:absolute after:top-[118%] after:left-[50%] after:h-[5px] after:w-[20%] after:translate-x-[-50%] after:rounded-2xl after:border-[1px] after:border-cyan-900 after:bg-amber-400 after:content-[''] sm:after:top-[130%] xl:text-6xl">
              See list of galleries
            </h5>
            <div className="flex w-full items-center">
              <div className="flex h-[68px] shrink-0 basis-[20%] items-center justify-center rounded-tl-2xl rounded-bl-2xl bg-cyan-900 py-4 sm:basis-[10%]">
                <SlMagnifier className="text-2xl font-extrabold text-amber-400 xl:text-3xl 2xl:text-4xl" />
              </div>
              <div className="h-[68px] basis-[80%] overflow-hidden rounded-2xl rounded-l-none border-b-[3px] border-cyan-900 bg-amber-400/70 px-[20px] py-4 text-2xl text-nowrap text-cyan-900 sm:basis-[90%] xl:text-3xl 2xl:text-4xl">
                Search galleries...
              </div>
            </div>
            <a
              href="#gallery"
              className="b-cyan-900 group xsm:text-xl cursor-pointer rounded-lg border-2 border-cyan-900 bg-amber-400 px-4 py-2 text-2xl text-cyan-900 transition-all duration-500 hover:border-amber-400 hover:bg-cyan-900 hover:text-amber-400 focus:border-amber-400 focus:bg-cyan-900 focus:text-amber-400 active:border-amber-400 active:bg-cyan-900 active:text-amber-400 sm:text-3xl"
            >
              <span className="group/inner relative flex items-center gap-3 after:absolute after:top-[105%] after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] group-focus:after:w-[77%] group-active:after:w-[85%]">
                All galleries{" "}
                <FaArrowDownLong className="transition-all duration-500 group-hover/inner:translate-y-1.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <GalleryGrid />
    </>
  );
};

export default Gallery;
