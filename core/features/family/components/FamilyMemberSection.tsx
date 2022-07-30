import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { FormCheckbox } from "../../../components/commons/inputs/FormCheckbox";
import { FormInput } from "../../../components/commons/inputs/FormInput";
import { FormSelect } from "../../../components/commons/inputs/FormReactSelect";
import {
  useCreateFamilyMemberMutation,
  useDeleteFamilyMemberMutation,
  useGetAllFamilyMemberQuery,
  useGetFamilyMemberDetailQuery,
  useUpdateFamilyMemberMutation,
} from "../api/family-member.api";
import { FamilyRole } from "../models/enums/family-role.enum";
import { FamilyMember } from "../models/family-member";
import { toast } from "react-toastify";
import { TranslateFamilyRole } from "../utils/translate-family-role";

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
    gender: yup.string().required("Gender is required"),
    name: yup.string().required("Name is required"),
    birthDate: yup.date().nullable(),
    birthPlace: yup.string().required("Birth place is required"),
    education: yup.string().nullable(),
    job: yup.string().nullable(),
    isBaptized: yup.boolean().nullable(),
  })
  .required();

type FamilyMemberProps = {
  familyId: string;
};

export const FamilyMemberSection: React.FC<FamilyMemberProps> = ({
  familyId,
}) => {
  const { data: familyMemberData, refetch } = useGetAllFamilyMemberQuery({
    limit: 20,
    familyId,
  });

  const [addFamilyMember] = useCreateFamilyMemberMutation();

  const [updateFamilyMember] = useUpdateFamilyMemberMutation();
  const [deleteFamilyMember] = useDeleteFamilyMemberMutation();

  const [familyMembers, setFamilyMembers] = React.useState<FamilyMember[]>([
    // {
    //   name: "Antonius Joshua",
    //   birthDate: new Date(),
    //   birthPlace: "",
    //   education: "",
    //   job: "",
    //   isBaptized: false,
    //   familyRole: FamilyRole.Head,
    // },
  ]);

  const [isEdit, setIsEdit] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  useEffect(() => {
    if (familyMemberData) {
      setFamilyMembers(familyMemberData.data);
    }
  }, [familyMemberData]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FamilyMember>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onShowCreateForm = () => {
    setShowForm(true);

    setIsEdit(false);

    reset();
  };

  const onShowEditForm = (familyMember: FamilyMember) => {
    setShowForm(true);

    setIsEdit(true);

    const newData: FamilyMember = {
      ...familyMember,
      birthDate: familyMember.birthDate
        ? dayjs(familyMember.birthDate).format("YYYY-MM-DD")
        : null,
    };

    reset(newData);

    // change date format to yyyy-MM-dd
    // const birthDate = dayjs(familyMember.birthDate).format("YYYY-MM-DD");
    // setValue("_id", familyMember._id);
    // setValue("name", familyMember.name);
    // setValue("familyRole", familyMember.familyRole);
    // setValue("birthDate", birthDate);
    // setValue("birthPlace", familyMember.birthPlace);
    // setValue("education", familyMember.education);
    // setValue("job", familyMember.job);
    // setValue("isBaptized", familyMember.isBaptized);
  };

  const onSubmit = async (data: FamilyMember) => {
    try {
      console.log(data);
      const { birthDate, ...value } = data;
      if (!isEdit) {
        await addFamilyMember({
          ...value,
          birthDate: birthDate ?? null,
          familyId,
        }).unwrap();
      } else {
        await updateFamilyMember({
          ...value,
          birthDate: birthDate ?? null,
          familyId,
        }).unwrap();
      }

      reset();
      refetch();
      setShowForm(false);
      setIsEdit(false);
    } catch (error) {
      toast((error as any).data.message, {
        type: "error",
      });
    }
  };

  const onDelete = async (index) => {
    try {
      const confirm = window.confirm("Are you sure to delete this member?");
      if (confirm) {
        const familyMember = familyMembers[index];
        await deleteFamilyMember({
          id: familyMember._id!,
        }).unwrap();
        refetch();
      }
    } catch (error) {
      toast((error as any).data.message, {
        type: "error",
      });
    }
  };

  return (
    <>
      {/* Family Member */}
      <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${showForm ? "block" : "hidden"}`}
        >
          <h2 className="text-lg text-left mb-5">Family Member Information</h2>

          <div className="mb-4">
            <FormInput<Partial<Partial<FamilyMember>>>
              name="name"
              label={"Nama Lengkap"}
              className={"mb-2"}
              id={"name"}
              register={register}
              placeholder={"Harap isi Nama"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormInput<Partial<Partial<FamilyMember>>>
              name="email"
              label={"Email"}
              className={"mb-2"}
              id={"email"}
              type={"email"}
              register={register}
              placeholder={"Harap isi Email"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormInput<Partial<FamilyMember>>
              name="phoneNumber"
              label={"Nomor HP"}
              className={"mb-2"}
              id={"phoneNumber"}
              type={"text"}
              register={register}
              placeholder={"Harap isi Nomor HP"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormSelect<Partial<FamilyMember>>
              name="gender"
              label={"Jenis Kelamin"}
              className={"mb-2"}
              id={"gender"}
              register={register}
              placeholder={"Harap pilih Jenis Kelamin"}
              errors={errors}
            >
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </FormSelect>
          </div>

          <div className="mb-4">
            <FormInput<Partial<FamilyMember>>
              name="birthPlace"
              label={"Tempat Lahir"}
              className={"mb-2"}
              id={"birthPlace"}
              register={register}
              placeholder={"Harap isi Tempat Lahir"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormInput<Partial<FamilyMember>>
              name="birthDate"
              type={"date"}
              label={"Tanggal Lahir"}
              className={"mb-2"}
              id={"birthDate"}
              register={register}
              placeholder={"Harap isi Tanggal Lahir"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormInput<Partial<FamilyMember>>
              name="education"
              type={"text"}
              label={"Pendidikan"}
              className={"mb-2"}
              id={"Education"}
              register={register}
              placeholder={"Harap isi Pendidikan"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormInput<Partial<FamilyMember>>
              name="job"
              type={"text"}
              label={"Pekerjaan"}
              className={"mb-2"}
              id={"job"}
              register={register}
              placeholder={"Harap isi Pekerjaan"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormCheckbox<Partial<FamilyMember>>
              name="isBaptized"
              type={"text"}
              label={"Suda di Baptis ?"}
              className={"mb-2"}
              id={"isBaptized"}
              register={register}
              placeholder={"Harap isi Pekerjaan"}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <FormSelect<Partial<FamilyMember>>
              name="familyRole"
              label={"Family Role"}
              className={"mb-2"}
              id={"familyRole"}
              register={register}
              placeholder={"Harap pilih Family Role"}
              errors={errors}
            >
              <option></option>
              <option value={FamilyRole.Head}>
                {TranslateFamilyRole(FamilyRole.Head)}
              </option>
              <option value={FamilyRole.Spouse}>
                {TranslateFamilyRole(FamilyRole.Spouse)}
              </option>
              <option value={FamilyRole.Child}>
                {TranslateFamilyRole(FamilyRole.Child)}
              </option>
              <option value={FamilyRole.Relatives}>
                {TranslateFamilyRole(FamilyRole.Relatives)}
              </option>
              <option value={FamilyRole.Others}>
                {TranslateFamilyRole(FamilyRole.Others)}
              </option>
            </FormSelect>
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
        <section className="flex justify-between">
          <h2 className="text-lg text-left mb-5">Family Member</h2>
          <button className="btn btn-sm btn-primary" onClick={onShowCreateForm}>
            Add Family Member
          </button>
        </section>
        <section className="w-full  overflow-auto">
          <table className="table w-full mt-5">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Nomor HP</th>
                <th>Jenis Kelamin</th>
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
                    <span className="font-bold">{familyMember.name}</span>
                  </td>
                  <td>
                    <span className="font-bold">{familyMember.email}</span>
                  </td>
                  <td>
                    <span className="font-bold">
                      {familyMember.phoneNumber}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold">{familyMember.gender}</span>
                  </td>
                  <td>
                    <span className="font-bold">{familyMember.birthPlace}</span>
                  </td>
                  <td>
                    <span className="font-bold">
                      {dayjs(familyMember.birthDate).format("YYYY-MM-DD")}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold">{familyMember.education}</span>
                  </td>
                  <td>
                    <span className="font-bold">{familyMember.job}</span>
                  </td>
                  <td>
                    <span className="font-bold">
                      {familyMember.isBaptized ? "Sudah" : "Belum"}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold">
                      {TranslateFamilyRole(familyMember.familyRole)}
                    </span>
                  </td>
                  <td>
                    {/* Edit Button */}
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => onShowEditForm(familyMember)}
                    >
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => onDelete(index)}
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
