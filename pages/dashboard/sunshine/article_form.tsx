import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import DatePickerInput from "../../../core/components/commons/datepicker";

interface PropsForm {
  name: string;
  gender: String;
  umur: string;
  notelp: string;
  email: string;
  domisili: string;
  kategoriKesaksian: string;
  kesaksian: string;
  tglLahir: Date | null;
}

const ArticleForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    gender: "Pria",
    umur: "",
    notelp: "",
    email: "",
    domisili: "",
    kategoriKesaksian: "Bisnis/Pekerjaan/Keuangan",
    kesaksian: "",
    tglLahir: new Date(),
  });
  //   const [kategoriKesaksian, setKategoriKesaksian] = React.useState(
  //     "Bisnis/Pekerjaan/Keuangan"
  //   );

  const onChangeRadioGender = React.useCallback((target: any): void => {
    if (target.checked) {
      setForm((state) => ({ ...state, gender: target.value }));
    }
  }, []);
  const onChangeRadio = React.useCallback((target: any): void => {
    if (target.checked) {
      setForm((state) => ({ ...state, kategoriKesaksian: target.value }));
    }
  }, []);

  // create function handle submit form
  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center w-[90%]">
        FORM LET’S WRITE
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
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Jenis Kelamin
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Pria"
                  name="jenkel"
                  value="Pria"
                  onChange={(v) => onChangeRadioGender(v.target)}
                  checked={form.gender === "Pria"}
                />
                <label className="text-lg ml-2" htmlFor="Pria">
                  Pria
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Wanita"
                  name="jenkel"
                  value="Wanita"
                  onChange={(v) => onChangeRadioGender(v.target)}
                  checked={form.gender === "Wanita"}
                />
                <label className="text-lg ml-2" htmlFor="Wanita">
                  Wanita
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4 text-left">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Tanggal Lahir (Day/Month/Year)
            </label>
            <DatePickerInput
              className="w-full"
              dateFormat="dd/MM/yyyy"
              selectedDate={form.tglLahir}
              onChange={(date: Date | null) =>
                setForm({ ...form, tglLahir: date })
              }
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Nomor Telephone
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.notelp}
              onChange={(v) => setForm({ ...form, notelp: v.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v.target.value })}
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
              Kategori Kesaksian
            </label>
            <div className="text-left grid grid-cols-1 md:grid-cols-2">
              <div>
                <input
                  type="radio"
                  id="Bisnis/Pekerjaan/Keuangan"
                  name="drone"
                  value="Bisnis/Pekerjaan/Keuangan"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={
                    form.kategoriKesaksian === "Bisnis/Pekerjaan/Keuangan"
                  }
                />
                <label
                  className="text-lg ml-2"
                  htmlFor="Bisnis/Pekerjaan/Keuangan"
                >
                  Bisnis/Pekerjaan/Keuangan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Keluarga dan Pernikahan"
                  name="drone"
                  value="Keluarga dan Pernikahan"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={form.kategoriKesaksian === "Keluarga dan Pernikahan"}
                />
                <label
                  className="text-lg ml-2"
                  htmlFor="Keluarga dan Pernikahan"
                >
                  Keluarga dan Pernikahan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Hubungan dan Pertemanan"
                  name="drone"
                  value="Hubungan dan Pertemanan"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={form.kategoriKesaksian === "Hubungan dan Pertemanan"}
                />
                <label
                  className="text-lg ml-2"
                  htmlFor="Hubungan dan Pertemanan"
                >
                  Hubungan dan Pertemanan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Kesehatan"
                  name="drone"
                  value="Kesehatan"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={form.kategoriKesaksian === "Kesehatan"}
                />
                <label className="text-lg ml-2" htmlFor="Kesehatan">
                  Kesehatan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Sekolah dan Studi"
                  name="drone"
                  value="Sekolah dan Studi"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={form.kategoriKesaksian === "Sekolah dan Studi"}
                />
                <label className="text-lg ml-2" htmlFor="Sekolah dan Studi">
                  Sekolah dan Studi
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Spiritualitas dan Keselamatan"
                  name="drone"
                  value="Spiritualitas dan Keselamatan"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={
                    form.kategoriKesaksian === "Spiritualitas dan Keselamatan"
                  }
                />
                <label
                  className="text-lg ml-2"
                  htmlFor="Spiritualitas dan Keselamatan"
                >
                  Spiritualitas dan Keselamatan
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Lainnya"
                  name="drone"
                  value="Lainnya"
                  onChange={(v) => onChangeRadio(v.target)}
                  checked={form.kategoriKesaksian === "Lainnya"}
                />
                <label className="text-lg ml-2" htmlFor="Lainnya">
                  Lainnya
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Kesaksian
            </label>
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows={3}
              value={form.kesaksian}
              onChange={(v) => setForm({ ...form, kesaksian: v.target.value })}
            ></textarea>
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

export default ArticleForm;
