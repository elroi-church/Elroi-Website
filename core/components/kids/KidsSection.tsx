export const KidsSection = () => {
  return (
    <section className="bg-black w-full text-white text-center leading-loose pt-20 mx-auto">
      <h2 className="font-bold text-3xl mb-2">KIDS CHURCH</h2>
      <p className="px-5 lg:px-60">
        Kami menyediakan Ibadah Online setiap Minggu jam 8.30 pagi yang kreatif
        dan penuh dengan Firman. Tidak hanya itu, kami juga rindu anak-anak
        dapat berdoa, pujian dan penyembahan bersama melalui aplikasi Zoom yang
        dilakukan setiap hari Sabtu.
      </p>
      <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
        JOIN US NOW
      </div>
      <div className="w-1/2 mx-auto flex justify-center">
        <img src="/assets/img/online/kids2.png" className="" alt="Online" />
        <img src="/assets/img/online/kids1.png" className="" alt="Online" />
      </div>
    </section>
  );
};

export default KidsSection;
