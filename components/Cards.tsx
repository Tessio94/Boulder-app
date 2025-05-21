import { useTranslations } from "next-intl";

const Cards = () => {
  const t = useTranslations("Cards");

  return (
    <div className="relative z-10 mb-[80px] flex items-stretch justify-center gap-16 px-[160px]">
      <div className="bg-cards relative z-20 flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          {t("card1.title")}
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>
            {t("card1.text1_1")}{" "}
            <strong className="my-text-stroke"> {t("card1.strong1")}</strong>{" "}
            {t("card1.text1_2")}
          </p>
          <p>{t("card1.text2")}</p>
          <p>{t("card1.text3")}</p>
        </div>
      </div>
      <div className="bg-cards flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          {t("card2.title")}
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>{t("card2.text1")}</p>
          <p>
            {t("card2.text2_1")}{" "}
            <strong className="my-text-stroke">{t("card2.strong2")}</strong>{" "}
            {t("card2.text2_2")}
          </p>
          <p>{t("card2.text3")}</p>
        </div>
      </div>
      <div className="bg-cards flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          {t("card3.title")}
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>{t("card3.text1")}</p>
          <p>
            {t("card3.text2_1")}{" "}
            <strong className="my-text-stroke">{t("card3.strong2")}</strong>{" "}
            {t("card3.text2_2")}
          </p>
          <p>{t("card3.text3")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
