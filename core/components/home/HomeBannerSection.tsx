const HomeBannerSection = () => {
  return (
    <section
      className="pb-10 bg-center bg-cover"
      style={{
        backgroundImage: 'url("/assets/img/banner_home.png")',
        height: "60vh",
      }}
    >
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-6">
          <a
            className="text-3xl text-white font-semibold leading-none"
            href="#"
          >
            <img
              className="h-10"
              src="metis-assets/logos/metis/metis-light-name.svg"
              alt=""
              width="auto"
            />
          </a>
        </nav>
        <div className="py-20 md:py-26 text-center">
          <div className="max-w-3xl mx-auto mb-5">
            <h2 className="text-5xl lg:text-[74px] text-white font-bold font-heading mb-1">
              El-Roi Chruch
            </h2>
            <p className="text-white text-4xl lg:text-5xl leading-relaxed tracking-wider">
              Sawangan
            </p>
          </div>
          <div>
            <a
              className="block uppercase sm:inline-block py-4 px-20 rounded-[35px] mb-4 sm:mb-0 sm:mr-3 text-md lg:text-lg text-white text-center font-semibold leading-none border"
              target={"_blank"}
              href="https://www.youtube.com/channel/UCKJVc_tWtCVJLtV0gz0A1fg"
              rel="noreferrer"
            >
              Watch Our Service Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerSection;
