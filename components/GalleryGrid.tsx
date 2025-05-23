import Image from "next/image";

const GalleryGrid = () => {
  return (
    <main className="max-w-[1920px] bg-cyan-200/10 pt-[120px]">
      <div className="grid grid-cols-1 gap-4 px-[20px] pb-[50px] sm:grid-cols-2 sm:px-[50px] md:pb-[80px] lg:grid-cols-3 lg:px-[60px] 2xl:grid-cols-4 2xl:px-[160px]">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/events/images/event1.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event2.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event3.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event4.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event5.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event6.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event7.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event8.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {" "}
          <Image
            src="/events/images/event9.webp"
            alt="event one"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default GalleryGrid;
