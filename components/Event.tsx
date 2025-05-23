import Image from "next/image";

const Event = ({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) => {
  console.log(title, date, description);
  return (
    <div className="relative">
      <Image
        src="/events/carabiner.svg"
        alt="carabiner icon"
        width={160}
        height={1200}
        className="xsm:bottom-[-30px] xsm:top-[unset] absolute right-[-10px] bottom-[-40px] z-0 opacity-70 sm:top-[55%] sm:right-[-40px] sm:bottom-[unset] lg:top-[50%] lg:right-[-50px] 2xl:top-[0px] 2xl:right-[unset] 2xl:left-[-120px]"
      />

      <div className="bg-cards relative z-20 flex flex-col gap-8 rounded-xl bg-cover bg-no-repeat px-4 py-3 text-cyan-900 shadow-2xl shadow-cyan-900/60">
        <div>
          <h4 className="my-text-stroke text-2xl font-extrabold">{title}</h4>
          <p className="text-xl">{date}</p>
        </div>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Event;
