import Background from "./Background";
import Cards from "./Cards";
import Competition from "./Competition";
import LoginBanner from "./LoginBanner";

const Content = () => {
  return (
    <main className="relative pt-[120px]">
      {/* <Background /> */}
      <Cards />
      <Competition />
      <LoginBanner />
    </main>
  );
};

export default Content;
