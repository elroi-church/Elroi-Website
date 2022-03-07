import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import DatePickerInput from "../../../core/components/commons/datepicker/index";

interface PropsForm {
  name: string;
  divisiCool: String;
  tglLahir: Date | null;
  notelp: string;
  email: string;
  domisili: string;
  coolSecara: string;
  alamat: string;
}

const ArticleForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    divisiCool: "Umum (>25 Tahun)",
    tglLahir: new Date(),
    notelp: "",
    email: "",
    domisili: "",
    coolSecara: "Online",
    alamat: "",
  });
  //   const [kategoriKesaksian, setKategoriKesaksian] = React.useState(
  //     "Bisnis/Pekerjaan/Keuangan"
  //   );
  const onChangeRadio = React.useCallback(
    (type: string, value: string): void => {
      for (const key in form) {
        if (Object.prototype.hasOwnProperty.call(form, key)) {
          console.log(key, type);
          if (type === key) {
            setForm(() => ({ ...form, [type]: value }));
          }
        }
      }
    },
    [form]
  );

  // create function handle submit form
  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center w-[90%]">
        FORM COOL
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
              onChange={(date: Date | null): void =>
                setForm({ ...form, tglLahir: date })
              }
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
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Alamat Lengkap
            </label>
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows={3}
              value={form.alamat}
              onChange={(v) => setForm({ ...form, alamat: v.target.value })}
            ></textarea>
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
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Divisi Cool
            </label>
            <div className="text-left grid grid-cols-2">
              <div>
                <input
                  type="radio"
                  id="Umum (>25 Tahun)"
                  name="divisicool"
                  value="Umum (>25 Tahun)"
                  onChange={(v) => onChangeRadio("divisiCool", v.target.value)}
                  checked={form.divisiCool === "Umum (>25 Tahun)"}
                />
                <label
                  className="text-lg font-light ml-2"
                  htmlFor="Umum (>25 Tahun)"
                >
                  {`Umum (>25 Tahun)`}
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Youth (DRP 2.32: 18 -25 tahun)"
                  name="divisicool"
                  value="Youth (DRP 2.32: 18 -25 tahun)"
                  onChange={(v) => onChangeRadio("divisiCool", v.target.value)}
                  checked={form.divisiCool === "Youth (DRP 2.32: 18 -25 tahun)"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Youth (DRP 2.32: 18 -25 tahun)"
                >
                  Youth (DRP 2.32: 18 -25 tahun)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Teens (DOT: 12 -17 tahun)"
                  name="divisicool"
                  value="Teens (DOT: 12 -17 tahun)"
                  onChange={(v) => onChangeRadio("divisiCool", v.target.value)}
                  checked={form.divisiCool === "Teens (DOT: 12 -17 tahun)"}
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Teens (DOT: 12 -17 tahun)"
                >
                  Teens (DOT: 12 -17 tahun)
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Kids (Kids Church: 0 -11 tahun)"
                  name="divisicool"
                  value="Kids (Kids Church: 0 -11 tahun)"
                  onChange={(v) => onChangeRadio("divisiCool", v.target.value)}
                  checked={
                    form.divisiCool === "Kids (Kids Church: 0 -11 tahun)"
                  }
                />
                <label
                  className="text-lg ml-2 font-light"
                  htmlFor="Kids (Kids Church: 0 -11 tahun)"
                >
                  Kids (Kids Church: 0 -11 tahun)
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm"
              htmlFor="name"
            >
              Cool Secara
            </label>
            <div className="text-left">
              <div>
                <input
                  type="radio"
                  id="Online"
                  name="coolsecara"
                  value="Online"
                  onChange={(v) => onChangeRadio("coolSecara", v.target.value)}
                  checked={form.coolSecara === "Online"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Online">
                  Online
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Offline"
                  name="coolsecara"
                  value="Offline"
                  onChange={(v) => onChangeRadio("coolSecara", v.target.value)}
                  checked={form.coolSecara === "Offline"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Offline">
                  Offline
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Hybrid"
                  name="coolsecara"
                  value="Hybrid"
                  onChange={(v) => onChangeRadio("coolSecara", v.target.value)}
                  checked={form.coolSecara === "Hybrid"}
                />
                <label className="text-lg ml-2 font-light" htmlFor="Hybrid">
                  Hybrid
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

export default ArticleForm;
