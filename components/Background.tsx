import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-10] bg-cyan-200/10">
      <Image
        className="absolute top-[650px] left-[160px] z-[-10]"
        src="/homepage/bouldering.svg"
        alt=""
        height={155}
        width={250}
      />
      <Image
        className="absolute top-[650px] right-[160px] z-[-10]"
        src="/homepage/bouldering1.svg"
        alt=""
        height={176}
        width={180}
      />
    </div>
  );
};

export default Background;
