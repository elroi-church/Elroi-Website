import React, { FC } from "react";
import DatePickerInput from "../../core/components/commons/datepicker";
import AuthLayout from "../../core/components/commons/layouts/AuthLayout";

interface PropsForm {
  childName: string;
  childTempatLahir: string;
  childAddress: string;
  childTglLahir: Date | null;
  childFather: string;
  childMother: string;
  childDateSubmitted: Date | null;
}

const ChildDedicationForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    childName: "",
    childTempatLahir: "",
    childAddress: "",
    childTglLahir: new Date(),
    childFather: "",
    childMother: "",
    childDateSubmitted: new Date(),
  });
  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center px-5">
        Child Dedication Form
        <form>
          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Nama Anak
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              value={form.childName}
              onChange={(v) => setForm({ ...form, childName: v.target.value })}
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Tempat Lahir
              </label>
              <input
                className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.childTempatLahir}
                onChange={(v) =>
                  setForm({ ...form, childTempatLahir: v.target.value })
                }
              />
            </div>
            <div>
              <label
                className="block text-left text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Tanggal Lahir (Day/Month/Year)
              </label>
              <DatePickerInput
                className="w-full"
                dateFormat="dd/MM/yyyy"
                selectedDate={form.childTglLahir}
                onChange={(date: Date | null) =>
                  setForm({ ...form, childTglLahir: date })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Alamat Lengkap
            </label>
            <textarea
              className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows={3}
              value={form.childAddress}
              onChange={(v) =>
                setForm({ ...form, childAddress: v.target.value })
              }
            ></textarea>
          </div>

          <div>
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Tanggal Diserahkan (Day/Month/Year)
            </label>
            <DatePickerInput
              className="w-full"
              dateFormat="dd/MM/yyyy"
              selectedDate={form.childTglLahir}
              onChange={(date: Date | null) =>
                setForm({ ...form, childTglLahir: date })
              }
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <div className="mb-4">
                <label
                  className="block text-left  text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Nama Ayah
                </label>
                <input
                  className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  value={form.childFather}
                  onChange={(v) =>
                    setForm({ ...form, childFather: v.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block text-left  text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Nama Ibu
                </label>
                <input
                  className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  value={form.childMother}
                  onChange={(v) =>
                    setForm({ ...form, childMother: v.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Tanggal Diserahkan (Day/Month/Year)
            </label>
            <DatePickerInput
              className="w-full"
              dateFormat="dd/MM/yyyy"
              selectedDate={form.childDateSubmitted}
              onChange={(date: Date | null) =>
                setForm({ ...form, childDateSubmitted: date })
              }
            />
          </div>

          <div className="text-right">
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

export default ChildDedicationForm;
