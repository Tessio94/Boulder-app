import Image from "next/image";

export default function Events() {
  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden">
      <Image
        className="object-contain"
        src="/homepage/boulder_1920.jpg"
        alt="boulder"
        width={1920}
        height={1080}
      />
    </div>
  );
}
