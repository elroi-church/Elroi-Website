import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormSelect } from "../../../components/commons/inputs/FormReactSelect";
import { FamilyRole } from "../models/enums/family-role.enum";

export type FamilyMember = {
  id?: string;
  name?: string;
  birthDate?: Date | null;
  birthPlace?: string;
  education?: string;
  job?: string;
  isBaptized?: boolean;
  familyRole?: FamilyRole;
};

// export type FamilyMemberInformation = {
//   name: string;
//   familyRole: FamilyRole;
//   birthDate: Date | null;
//   birthPlace: string;
//   education: string;
//   job: string;
//   isBaptized: boolean;
// };

const schema = yup
  .object({
    familyRole: yup.string().required("Family role is required"),
  })
  .required();

type FamilyMemberProps = {
  familyId: string;
};

export const FamilyMember: React.FC<FamilyMemberProps> = ({ familyId }) => {
  const [familyMembers, setFamilyMembers] = React.useState<FamilyMember[]>([
    {
      name: "Antonius Joshua",
      birthDate: new Date(),
      birthPlace: "",
      education: "",
      job: "",
      isBaptized: false,
      familyRole: FamilyRole.Head,
    },
  ]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FamilyMember>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FamilyMember) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
          <h2 className="text-lg text-left mb-5">Member Information</h2>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Nama Lengkap
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-4">
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
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Tanggal Lahir
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Pendidikan
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Pekerjaan
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left  text-gray-700 text-sm mb-2"
              htmlFor="name"
            >
              Baptism
            </label>
            <input
              className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <FormSelect<FamilyMember>
              name="familyRole"
              label={"Family Role"}
              className={"mb-2"}
              id={"familyRole"}
              register={register}
              placeholder={"Harap pilih Family Role"}
              errors={errors}
            >
              <option></option>
              <option>Head</option>
              <option>Spouse</option>
              <option>Child</option>
              <option>Spouse</option>
              <option>Relatives</option>
              <option>Others</option>
            </FormSelect>
            {/* <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Family Role
              </label>
              <select className="select w-full">
                <option>Head</option>
                <option>Spouse</option>
                <option>Child</option>
                <option>Spouse</option>
                <option>Relatives</option>
              </select> */}
          </div>
        </section>
      </form>

      {/* Family Member */}
      <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
        <section className="flex justify-between">
          <h2 className="text-lg text-left mb-5">Family Member</h2>
          <button className="btn btn-sm btn-primary">Add Family Member</button>
        </section>
        <section className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Pendidikan</th>
                <th>Pekerjaan</th>
                <th>Baptism</th>
                <th>Family Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((familyMember, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={familyMember.name}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return { ...fm, name: v.target.value };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={familyMember.birthPlace}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return { ...fm, birthPlace: v.target.value };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={familyMember.birthDate?.toDateString()}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return {
                                ...fm,
                                birthDate: new Date(v.target.value),
                              };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={familyMember.education}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return { ...fm, education: v.target.value };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="appearance-none  rounded-[20px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={familyMember.job}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return { ...fm, job: v.target.value };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={familyMember.isBaptized}
                      onChange={(v) =>
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return {
                                ...fm,
                                isBaptized: v.target.checked,
                              };
                            }
                            return fm;
                          })
                        )
                      }
                    />
                  </td>
                  <td>
                    <select className="select">
                      <option></option>
                      <option>Head</option>
                      <option>Spouse</option>
                      <option>Child</option>
                      <option>Spouse</option>
                    </select>
                  </td>
                  <td>
                    {/* Edit Button */}
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        setFamilyMembers(
                          familyMembers.map((fm, i) => {
                            if (i === index) {
                              return { ...fm, isEditing: true };
                            }
                            return fm;
                          })
                        );
                      }}
                    >
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() =>
                        setFamilyMembers(
                          familyMembers.filter((fm, i) => i !== index)
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};
