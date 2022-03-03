import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";

interface PropsForm {
  name: string;
  gender: String;
  umur: string;
  nowa: string;
  email: string;
}

const SunshineForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    gender: "Pria",
    umur: "",
    nowa: "",
    email: "",
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
        FORM MY SUNSHINE
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
          <div className="flex justify-between w-1/2">
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
                    name="drone"
                    value="Pria"
                    onChange={(v) => onChangeRadio(v.target.value)}
                    checked={form.gender === "Pria" ? true : false}
                  />
                  <label className="text-lg ml-2" htmlFor="Pria">
                    Pria
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Wanita"
                    name="drone"
                    value="Wanita"
                    onChange={(v) => onChangeRadio(v.target.value)}
                    checked={form.gender === "Wanita" ? true : false}
                  />
                  <label className="text-lg ml-2" htmlFor="Wanita">
                    Wanita
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Umur
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="number"
                max={100}
                min={0}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-xl text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              No. WhatsApp
            </label>
            <input
              className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.nowa}
              onChange={(v) => setForm({ ...form, nowa: v.target.value })}
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

export default SunshineForm;
