const Competition = () => {
  return (
    <section className="flex min-h-[800px] flex-col items-center gap-[80px] pt-[80px]">
      <h4 className="my-text-stroke mb-[40px] text-6xl text-cyan-900">
        How our app works:
      </h4>
      <div className="relative h-[5px] w-[60%] bg-amber-400">
        <div className="absolute top-[50%] left-0 flex h-[60px] w-[60px] translate-y-[-50%] items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900">
          1
        </div>
        <div className="absolute top-[50%] left-[50%] flex h-[60px] w-[60px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900">
          2
        </div>
        <div className="absolute top-[50%] right-0 flex h-[60px] w-[60px] translate-y-[-50%] items-center justify-center rounded-full bg-amber-400 text-3xl font-bold text-cyan-900">
          3
        </div>
      </div>
      <div className="relative w-[60%]">
        <div className="absolute left-0 flex h-[300px] w-[400px] translate-x-[-50%] flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50">
          <p className="text-3xl">Scan the QR code</p>
          <div className="flex w-full flex-col gap-5">
            <p className="text-xl">
              &#x2022; At the entrance of the event you will find
              <br /> the QR code of the app.
            </p>
            <p className="text-xl">
              &#x2022; Scan the code and enter the login page
            </p>
          </div>
        </div>
        <div className="absolute left-[50%] flex h-[300px] w-[400px] translate-x-[-50%] flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50">
          <p className="text-3xl">Login to your account</p>
          <div className="flex w-full flex-col gap-5">
            <p className="text-xl">
              &#x2022; The QR code will lead you to the login page of app
            </p>
            <p className="text-xl">&#x2022; Enter your account details</p>
          </div>
        </div>
        <div className="absolute right-0 flex h-[300px] w-[400px] translate-x-[50%] flex-col items-center justify-start gap-8 rounded-2xl bg-cyan-900/10 p-6 text-cyan-900 shadow-lg shadow-cyan-900/50">
          <p className="text-3xl">Compete and enjojy!</p>
          <div className="flex w-full flex-col gap-5">
            <p className="text-xl">&#x2022; Start the competition</p>
            <p className="text-xl">&#x2022; Insert your score</p>
            <p className="text-xl">&#x2022; Check your result and ranking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
