import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";

interface PropsForm {
  name: string;
  gender: String;
  umur: string;
  nowa: string;
  email: string;
  usia: string;
  notelp: string;
  domisili: string;
  berjemaat: string;
  melayani: string;
  isPresentKom: string;
  karunia: string;
  kerinduanBidang: string;
}

const SunshineForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    gender: "Pria",
    umur: "",
    nowa: "",
    email: "",
    usia: "",
    notelp: "",
    domisili: "",
    berjemaat: "",
    melayani: "",
    isPresentKom: "",
    karunia: "",
    kerinduanBidang: "",
  });

  const onChangeRadio = (gender: string): void => {
    setForm(() => ({ ...form, gender }));
  };

  // create function handle submit form
  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center w-[90%]">
        FORM VOLUNTEER
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Nama Lengkap
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Usia
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="number"
              min={0}
              value={form.usia}
              onChange={(v) => setForm({ ...form, usia: v.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              No.Telp/WA
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="number"
              value={form.notelp}
              onChange={(v) => setForm({ ...form, notelp: v.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Domisili
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.domisili}
              onChange={(v) => setForm({ ...form, domisili: v.target.value })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Apakah Berjemaat di ERC
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Ya"
                  name="drone"
                  value="Ya"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.berjemaat === "Ya"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Ya">
                  Ya
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Tidak"
                  name="drone"
                  value="Tidak"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.berjemaat === "Tidak"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Tidak">
                  Tidak
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Apakah pernah Melayani
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Ya"
                  name="drone"
                  value="Ya"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.melayani === "Ya"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Ya">
                  Ya
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Tidak"
                  name="drone"
                  value="Tidak"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.melayani === "Tidak"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Tidak">
                  Tidak
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Karunia apa yang anda miliki
            </label>
            <div className="text-left grid grid-cols-2">
              <div>
                <input
                  type="radio"
                  id="Pengajaran"
                  name="drone"
                  value="Pengajaran"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.karunia === "Pengajaran"}
                />
                <label className="text-lg font-light ml-2" htmlFor="Pengajaran">
                  {`Pengajaran`}
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Penglihatan"
                  name="drone"
                  value="Penglihatan"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.karunia === "Penglihatan"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Penglihatan"
                >
                  Penglihatan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Menulis"
                  name="drone"
                  value="Menulis"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.karunia === "Menulis"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Menulis">
                  Menulis
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Pendoa"
                  name="drone"
                  value="Pendoa"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.karunia === "Pendoa"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Pendoa">
                  Pendoa
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Musik"
                  name="drone"
                  value="Musik"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.karunia === "Musik"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Musik">
                  Musik
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Apakah anda pernah mengikuti sekolah teologia praktis (KOM)
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Ya"
                  name="drone"
                  value="Ya"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.isPresentKom === "Ya"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Ya">
                  Ya
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Tidak"
                  name="drone"
                  value="Tidak"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.isPresentKom === "Tidak"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Tidak">
                  Tidak
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Kerinduan melayani di bidang ?
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Creative Team (Social Media)"
                  name="drone"
                  value="Creative Team (Social Media)"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={
                    form.kerinduanBidang === "Creative Team (Social Media)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Creative Team (Social Media)"
                >
                  Creative Team (Social Media)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Production Team (Cameraman, Soundman, Multimedia, Photography)"
                  name="drone"
                  value="Production Team (Cameraman, Soundman, Multimedia, Photography)"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={
                    form.kerinduanBidang ===
                    "Production Team (Cameraman, Soundman, Multimedia, Photography)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Production Team (Cameraman, Soundman, Multimedia, Photography)"
                >
                  Production Team (Cameraman, Soundman, Multimedia, Photography)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Pastoral Ministry (Kunjungan, Kedukaan)"
                  name="drone"
                  value="Pastoral Ministry (Kunjungan, Kedukaan)"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={
                    form.kerinduanBidang ===
                    "Pastoral Ministry (Kunjungan, Kedukaan)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Pastoral Ministry (Kunjungan, Kedukaan)"
                >
                  Pastoral Ministry (Kunjungan, Kedukaan)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Music (WL,Singer,Padus, Alat Musik)"
                  name="drone"
                  value="Music (WL,Singer,Padus, Alat Musik)"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={
                    form.kerinduanBidang ===
                    "Music (WL,Singer,Padus, Alat Musik)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Music (WL,Singer,Padus, Alat Musik)"
                >
                  Music (WL,Singer,Padus, Alat Musik)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Prayer Ministry"
                  name="drone"
                  value="Prayer Ministry"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.kerinduanBidang === "Prayer Ministry"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Prayer Ministry"
                >
                  Prayer Ministry
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Dancer (Darash Dance Crew)"
                  name="drone"
                  value="Dancer (Darash Dance Crew)"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={
                    form.kerinduanBidang === "Dancer (Darash Dance Crew)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Dancer (Darash Dance Crew)"
                >
                  Dancer (Darash Dance Crew)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Kids Ministry"
                  name="drone"
                  value="Kids Ministry"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.kerinduanBidang === "Kids Ministry"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Kids Ministry"
                >
                  Kids Ministry
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Article Writer"
                  name="drone"
                  value="Article Writer"
                  onChange={(v) => onChangeRadio(v.target.value)}
                  checked={form.kerinduanBidang === "Article Writer"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Article Writer"
                >
                  Article Writer
                </label>
              </div>
            </div>
          </div>

          <div className="text-left">
            <input
              type="submit"
              value="Save / Submit"
              className="block uppercase sm:inline-block py-3 px-8 w-[280px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-center font-semibold leading-none border border-primary border-2 bg-primary border-transparent text-white hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SunshineForm;
