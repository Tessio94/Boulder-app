const Cards = () => {
  return (
    <div className="relative z-10 mb-[80px] flex items-stretch justify-center gap-16 px-[160px]">
      <div className="bg-cards relative z-20 flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          Our Mission:
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>
            At <strong className="my-text-stroke">BoulderApp</strong>, we are
            passionate about making the world of bouldering more accessible,
            exciting, and community-driven.
          </p>
          <p>
            Our mission is to connect climbers with the best competitions,
            allowing them to register, stay informed, and track their progress
            all in one place.
          </p>
          <p>
            Whether you&#39;re a seasoned pro or just starting, we aim to
            provide a platform that fosters growth, challenges, and
            unforgettable experiences.
          </p>
        </div>
      </div>
      <div className="bg-cards flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          Discover and Compete:
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>
            Bouldering is more than just a sport; it&#39;s a way to test your
            limits and push past boundaries.
          </p>
          <p>
            Our platform allows you to easily find upcoming competitions and{" "}
            <strong className="my-text-stroke">sign up for events</strong> that
            match your skill level and passion.
          </p>
          <p>
            Stay up-to-date on local and global bouldering events and never miss
            an opportunity to compete, challenge yourself, and meet others who
            share your love for climbing.
          </p>
        </div>
      </div>
      <div className="bg-cards flex max-w-[500px] flex-col items-center gap-8 rounded-2xl px-6 pt-4 pb-10 shadow-xl shadow-cyan-900/60">
        <h4 className="my-text-stroke relative text-center text-3xl font-extrabold text-cyan-900 after:absolute after:top-[103%] after:left-0 after:h-[5px] after:w-[70px] after:bg-amber-400 after:content-['']">
          Explore Boulder Halls:
        </h4>
        <div className="flex flex-col gap-3 text-xl text-cyan-900">
          <p>
            We understand that finding the right training environment is
            essential to improving your climbing skills.
          </p>
          <p>
            That&#39;s why we offer an extensive overview offer{" "}
            <strong className="my-text-stroke">bouldering gyms</strong> across
            the area, helping you find the perfect place to train, meet other
            climbers, and prepare for your next competition.
          </p>
          <p>
            Whether you&#39;re looking for a beginner-friendly space or a gym
            with challenging routes, we&#39;ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
