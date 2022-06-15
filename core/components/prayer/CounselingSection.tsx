import { BsWhatsapp } from "react-icons/bs";

export const CounselingSection = () => {
  return (
    <div className="px-5 lg:px-24 mx-auto text-center py-16 lg:py-32  bg-gray-100">
      <div className="w-full lg:w-1/2 mx-auto">
        <h2 className="font-bold text-3xl">
          NEED <span className="text-primary">PRAYERS & COUNSELING ?</span>
        </h2>
        <p className="mt-4 font-light">
          There are times when life is overwhelming, when all we have is
          questions. In those moments, hope can feel far away. The great thing
          about prayer is that it shifts our perspective toward the One who
          stands ready to listen. No matter what you’re facing, we’d love to
          pray with you!
        </p>
        <br />
        {/* <form className=" px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="email"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="phone"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left text-xl text-gray-700 text-sm mb-2">
                  Sinopsis Message
                </label>
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[20px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Sinopsis Message"
                ></textarea>
              </div>
            </form> */}
        <a
          className="block uppercase sm:inline-block py-4 px-10 w-full lg:w-[350px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-black text-center font-semibold leading-none border-primary border-4 bg-transparent hover:bg-primary hover:border-transparent hover:text-white"
          href="https://api.whatsapp.com/send?phone=6281210250040&text=Shalom%20ERC%20Prayer%20Call%20Center%2C%20mohon%20doakan%20saya%20mengenai%20.....%20"
          target={`_blank`}
        >
          <div className="flex text-center w-full justify-center">
            <BsWhatsapp /> &nbsp; PRAYER CALL CENTER
          </div>
        </a>
      </div>
    </div>
  );
};

export default CounselingSection;
