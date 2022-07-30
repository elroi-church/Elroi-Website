import { NextComponentType } from "next";

const DrpGrowWithUs: NextComponentType = () => {
  return (
    <section className="container mx-auto">
      <section className="p-5">
        <h2 className="text-center text-4xl lg:text-6xl text-white leading-tight font-bold tracking-tighter p-5 border border-blue-300 ">
          Grow{" "}
          <span className="text-black text-stroke-white text-stroke-2">
            With
          </span>{" "}
          Us
        </h2>
        <div className="flex justify-center my-10">
          <img
            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-xl"
            alt=""
          />
        </div>
        <div className="flex justify-center text-2xl text-white px-20 text-center">
          Mari, kita terus berkembang dengan bergabung dalam Komunitas Cool.
          Sesuaikan Cool dengan Tempat anda Tinggal
        </div>
      </section>
    </section>
  );
};

export default DrpGrowWithUs;
