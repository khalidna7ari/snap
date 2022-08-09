const Hero: React.FC = () => {
  return (
    <header className="md:flex md:flex-row-reverse md:px-6 md:gap-24 md:full ">
      <div>
        <img
          src="/src/assets/HeroMobileImage.png"
          alt="hero image"
          className="md:hidden"
        />
        <img
          src="/src/assets/HeroDesktopImage.png"
          alt="hero image"
          className="hidden md:inline"
        />
      </div>
      <div className="text-center md:text-left space-y-4  px-2  md:flex md:flex-col md:justify-center md:items-start">
        <div className="space-y-4 md:space-y-6 md:flex-1 md:flex md:flex-col md:items-start md:justify-center">
          <div className="h-4" />
          <h1 className="text-4xl font-bold md:text-6xl">
            Make <br className="hidden md:inline" /> remote work
          </h1>
          <p className="text-gray-600 md:text-xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-gray-900 font-semibold text-white py-2 px-4 rounded-lg md:align-self-start">
            Learn more
          </button>
          <div className="h-4" />
        </div>
        <div className="flex items-center justify-around md:justify-between md:w-full ">
          <img
            src="/src/assets/ClientDatabiz.svg"
            alt="databiz logo"
            className="h-4 md:h-auto"
          />
          <img
            src="/src/assets/ClientAudiophile.svg"
            alt="audiophile logo"
            className="h-4 md:h-auto"
          />
          <img
            src="/src/assets/ClientMeet.svg"
            alt="meet logo"
            className="h-4 md:h-auto"
          />
          <img
            src="/src/assets/ClientMaker.svg"
            alt="maker logo"
            className="h-4 md:h-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
