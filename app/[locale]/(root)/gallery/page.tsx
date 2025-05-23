import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";

const Gallery = () => {
  return (
    <>
      <div className="relative z-0 h-screen min-h-[800px] w-full overflow-hidden bg-[url(/homepage/gallery_1024.jpg)] bg-no-repeat lg:h-fit lg:min-h-[unset] lg:bg-none">
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
        <div className="3xl:bottom-[200px] absolute bottom-[300px] left-[50%] flex w-[800px] translate-x-[-50%] flex-col gap-8 rounded-2xl bg-gradient-to-b from-cyan-300/10 via-cyan-200/80 to-amber-400/80 px-16 py-4 shadow-2xl shadow-amber-400/40 backdrop-blur-md lg:bottom-[70px] xl:bottom-[100px] xl:gap-12 xl:py-8 2xl:bottom-[140px]">
          <h5 className="my-text-stroke text-shadow-2xl text-center text-4xl font-extrabold text-cyan-900 text-shadow-cyan-900 2xl:text-6xl">
            Search for the gallery from events
          </h5>
          <div className="flex flex-col gap-6 xl:gap-8">
            <p className="text-2xl text-cyan-900 2xl:text-3xl">
              Find your favorite event you have been on and the image gallery
              from that day
            </p>
            <div className="flex w-full items-center">
              <div className="flex h-[68px] shrink-0 basis-[10%] items-center justify-center rounded-tl-2xl rounded-bl-2xl bg-cyan-900 py-4">
                <SlMagnifier className="text-2xl font-extrabold text-cyan-200 xl:text-3xl 2xl:text-4xl" />
              </div>
              <div className="h-[68px] basis-[90%] overflow-hidden rounded-2xl rounded-l-none border-b-[1px] border-cyan-900 bg-cyan-900/10 px-[20px] py-4 text-2xl text-nowrap text-cyan-900 xl:text-3xl 2xl:text-4xl">
                Find your gallery...
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="aspect-square bg-blue-500"></div>
          <div className="aspect-square bg-red-500"></div>
          <div className="aspect-square bg-green-500"></div>
          <div className="aspect-square bg-yellow-500"></div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
