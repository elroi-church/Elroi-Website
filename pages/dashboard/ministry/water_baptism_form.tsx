import React, { FC } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import DatePickerInput from "../../../core/components/commons/datepicker";

interface PropsForm {
  name: string;
  ktp: string;
  alamat: string;
  notelp: string;
  fatherName: string;
  motherName: string;
  tempatLahir: string;
  rtrw: string;
  kecamatan: string;
  kodePos: string;
  branch: string;
  pendeta: string;
  gender: string;
  tglLahir: Date | null;
  baptismDate: Date | null;
  childName: string;
  childAddress: string;
  childRtrw: string;
  childKecamatan: string;
  childKodePos: string;
  childNotelp: string;
  childTempatLahir: string;
  childTglLahir: Date | null;
  childFatherName: string;
  childMotherName: string;
  childParentAddress: string;
  childParentRtrw: string;
  childParentKecamatan: string;
  childParentKodePos: string;
  childNameConfirmation: string;
  childDayBaptism: string;
  childDateBaptism: Date | null;
}

const WaterBaptismForm: FC = () => {
  const [form, setForm] = React.useState<PropsForm>({
    name: "",
    ktp: "",
    alamat: "",
    notelp: "",
    fatherName: "",
    motherName: "",
    tempatLahir: "",
    rtrw: "",
    kecamatan: "",
    kodePos: "",
    branch: "",
    pendeta: "",
    gender: "Pria",
    tglLahir: new Date(),
    baptismDate: new Date(),
    childName: "",
    childAddress: "",
    childRtrw: "",
    childKecamatan: "",
    childKodePos: "",
    childNotelp: "",
    childTempatLahir: "",
    childTglLahir: new Date(),
    childFatherName: "",
    childMotherName: "",
    childParentAddress: "",
    childParentRtrw: "",
    childParentKecamatan: "",
    childParentKodePos: "",
    childNameConfirmation: "",
    childDayBaptism: "",
    childDateBaptism: new Date(),
  });

  const [page, setPage] = React.useState<number>(0);

  const onChangeRadio = (type: string, value: string): void => {
    for (const key in form) {
      if (Object.prototype.hasOwnProperty.call(form, key)) {
        console.log(key, type);
        if (type === key) {
          setForm(() => ({ ...form, [type]: value }));
        }
      }
    }
  };

  // create function handle submit form
  const handleSubmit = (event: any): void => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="font-bold text-3xl text-center w-[90%]">
        FORM WATER BAPTISM
        <form onSubmit={handleSubmit}>
          {/* section for page 1 */}
          <div style={{ display: page === 0 ? "" : "none" }}>
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
              <div className="grid grid-cols-3 gap-3">
                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    RT/RW
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.rtrw}
                    onChange={(v) => setForm({ ...form, rtrw: v.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kecamatan
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.kecamatan}
                    onChange={(v) =>
                      setForm({ ...form, kecamatan: v.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kode Pos
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.kodePos}
                    onChange={(v) =>
                      setForm({ ...form, kodePos: v.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nomor Telepon
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
                Jenis Kelamin
              </label>
              <div className="text-left">
                <div>
                  <input
                    type="radio"
                    id="Pria"
                    name="drone"
                    value="Pria"
                    onChange={(v) => onChangeRadio("gender", v.target.value)}
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
                    name="drone"
                    value="Wanita"
                    onChange={(v) => onChangeRadio("gender", v.target.value)}
                    checked={form.gender === "Wanita"}
                  />
                  <label className="text-lg ml-2" htmlFor="Wanita">
                    Wanita
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tempat Lahir
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  value={form.tempatLahir}
                  onChange={(v) =>
                    setForm({ ...form, tempatLahir: v.target.value })
                  }
                />
              </div>
              <div>
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
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nama Ayah
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.fatherName}
                onChange={(v) =>
                  setForm({ ...form, fatherName: v.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nama Ibu
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.fatherName}
                onChange={(v) =>
                  setForm({ ...form, fatherName: v.target.value })
                }
              />
            </div>

            <div className="mb-4 text-left">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Tanggal Akan Dibaptis (Day/Month/Year)
              </label>
              <DatePickerInput
                className="w-full"
                dateFormat="dd/MM/yyyy"
                selectedDate={form.baptismDate}
                onChange={(date: Date | null): void =>
                  setForm({ ...form, baptismDate: date })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Cabang
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.branch}
                onChange={(v) => setForm({ ...form, branch: v.target.value })}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Pendeta Pembaptis
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.pendeta}
                onChange={(v) => setForm({ ...form, pendeta: v.target.value })}
              />
            </div>
          </div>
          {/* section for page 2 */}
          <div style={{ display: page === 1 ? "" : "none" }}>
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
                value={form.childName}
                onChange={(v) =>
                  setForm({ ...form, childName: v.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Alamat Lengkap
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                value={form.childAddress}
                onChange={(v) =>
                  setForm({ ...form, childAddress: v.target.value })
                }
              ></textarea>
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    RT/RW
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childRtrw}
                    onChange={(v) =>
                      setForm({ ...form, childRtrw: v.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kecamatan
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childKecamatan}
                    onChange={(v) =>
                      setForm({ ...form, childKecamatan: v.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kode Pos
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childKodePos}
                    onChange={(v) =>
                      setForm({ ...form, childKodePos: v.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nomor Telepon
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.childNotelp}
                onChange={(v) =>
                  setForm({ ...form, childNotelp: v.target.value })
                }
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tempat Lahir
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tanggal Lahir (Day/Month/Year)
                </label>
                <DatePickerInput
                  className="w-full"
                  dateFormat="dd/MM/yyyy"
                  selectedDate={form.childTglLahir}
                  onChange={(date: Date | null): void =>
                    setForm({ ...form, childTglLahir: date })
                  }
                />
              </div>
            </div>
            <div className="text-left py-14">
              <div className="text-xl mb-5">
                DENGAN INI MENYATAKAN DENGAN SESUNGGUHNYA, BAHWA SAYA:
              </div>
              <div className="text-xl mb-3">
                1. Dalam Keadaan sehat jasmani dan Rohani.
              </div>
              <div className="text-xl mb-3">
                2. Tanpa Paksaandari pihak manapun juga
              </div>
              <div className="text-xl mb-3">
                3. Dengan Keinginan dan Kerinduan saya sendiri.
              </div>
            </div>
          </div>
          {/* section for page 3 */}
          <div style={{ display: page === 2 ? "" : "none" }}>
            <div className="mb-4 mt-10">
              <div className="font-light text-left">
                YANG BERTANDA TANGAN DIBAWAH INI :
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nama (Ayah)
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.childFatherName}
                onChange={(v) =>
                  setForm({ ...form, childFatherName: v.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nama (Ibu)
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.childMotherName}
                onChange={(v) =>
                  setForm({ ...form, childMotherName: v.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Alamat Lengkap
              </label>
              <textarea
                className="form-control block w-full font-bold px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                value={form.childParentAddress}
                onChange={(v) =>
                  setForm({ ...form, childParentAddress: v.target.value })
                }
              ></textarea>
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    RT/RW
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childParentRtrw}
                    onChange={(v) =>
                      setForm({ ...form, childParentRtrw: v.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kecamatan
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childParentKecamatan}
                    onChange={(v) =>
                      setForm({ ...form, childParentKecamatan: v.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-xl text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Kode Pos
                  </label>
                  <input
                    className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    value={form.childParentKodePos}
                    onChange={(v) =>
                      setForm({ ...form, childParentKodePos: v.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 mt-10 w-[90%]">
              <div className="font-light text-left">
                DENGAN INI MENYATAKAN DENGAN SESUNGGUHNYA. BAHWA KAMI
                MENGIJINKAN ANAK KAMI :
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-xl text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                value={form.childNameConfirmation}
                onChange={(v) =>
                  setForm({ ...form, childNameConfirmation: v.target.value })
                }
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tempat Lahir
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tanggal Lahir (Day/Month/Year)
                </label>
                <DatePickerInput
                  className="w-full"
                  dateFormat="dd/MM/yyyy"
                  selectedDate={form.childTglLahir}
                  onChange={(date: Date | null): void =>
                    setForm({ ...form, childTglLahir: date })
                  }
                />
              </div>
            </div>

            <div className="mb-4 mt-10 w-[90%]">
              <div className="font-light text-left">
                UNTUK MENERIMA SAKRAMEN BAPTISAN PADA
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Hari
                </label>
                <input
                  className="appearance-none border rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  value={form.childDayBaptism}
                  onChange={(v) =>
                    setForm({ ...form, childDayBaptism: v.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-left text-xl text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Tanggal (Day/Month/Year)
                </label>
                <DatePickerInput
                  className="w-full"
                  dateFormat="dd/MM/yyyy"
                  selectedDate={form.childDateBaptism}
                  onChange={(date: Date | null): void =>
                    setForm({ ...form, childDateBaptism: date })
                  }
                />
              </div>
            </div>

            <div className="text-left py-14">
              <div className="text-xl mb-5">
                DENGAN INI MENYATAKAN DENGAN SESUNGGUHNYA, BAHWA SAYA:
              </div>
              <div className="text-xl mb-3">
                1. Dalam Keadaan sehat jasmani dan Rohani.
              </div>
              <div className="text-xl mb-3">
                2. Tanpa Paksaandari pihak manapun juga
              </div>
              <div className="text-xl mb-3">
                3. Dengan Keinginan dan Kerinduan saya sendiri.
              </div>
            </div>
          </div>

          <div
            className={`${page >= 1 ? "flex" : ""} justify-between w-full mt-5`}
          >
            <div
              className="text-left"
              onClick={() => setPage(page - 1)}
              style={{ display: page >= 1 ? "" : "none" }}
            >
              <button className="block uppercase sm:inline-block py-3 px-8 w-[280px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-center font-semibold leading-none border border-primary border-2 bg-primary border-transparent text-white hover:cursor-pointer">
                Back Page
              </button>
            </div>

            <div
              className="text-right"
              style={{ display: page < 2 ? "" : "none" }}
              onClick={() => setPage(page + 1)}
            >
              <button className="block uppercase sm:inline-block py-3 px-8 w-[280px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-center font-semibold leading-none border border-primary border-2 bg-primary border-transparent text-white hover:cursor-pointer">
                Next Page
              </button>
            </div>

            <div
              className="text-right"
              style={{ display: page !== 2 ? "none" : "" }}
            >
              <input
                type="submit"
                value="Save / Submit"
                className="block uppercase sm:inline-block py-3 px-8 w-[280px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-center font-semibold leading-none border border-primary border-2 bg-primary border-transparent text-white hover:cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default WaterBaptismForm;
