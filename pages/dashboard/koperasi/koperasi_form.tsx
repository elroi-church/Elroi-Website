import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";

interface PropsForm {
  name: string;
  ktp: string;
  alamat: string;
  nohp: string;
  email: string;
}

const KoperasiForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    ktp: "",
    alamat: "",
    nohp: "",
    email: "",
  });

  // create function handle submit form
  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center w-[90%]">
        FORM KOPERASI
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
              NIK KTP
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.ktp}
              onChange={(v) => setForm({ ...form, ktp: v.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Alamat
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
              Nomor Hp
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.nohp}
              onChange={(v) => setForm({ ...form, nohp: v.target.value })}
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

export default KoperasiForm;
