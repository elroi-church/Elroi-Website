const GivingSection = () => {
  return (
    <section
      className="pb-10 bg-top bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1590363763899-f0b78a7bb968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
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
        <div className="py-28 md:py-36 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl mb-4 text-white font-bold font-heading">
              See what God can do through your generosity.
            </h2>
            <p className="text-white text-2xl leading-relaxed tracking-wider">
              Simple and secure. Give a single gift, or schedule recurring
              giving using your checking account, debit, or credit card.
            </p>
          </div>
          <div>
            <a
              className="block uppercase sm:inline-block py-4 px-20 rounded-2xl mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none bg-primary hover:bg-primary-darker"
              href="#"
            >
              Give Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivingSection;
