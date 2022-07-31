import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FormInput } from "../../../core/components/commons/inputs/FormInput";
import { FormSelect } from "../../../core/components/commons/inputs/FormSelect";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import { useCreateFamilyMutation } from "../../../core/features/family/api/family.api";
import { User } from "../../../core/features/user/models/user";

export type SelectOption<T> = {
  value: T;
  label: string;
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().matches(phoneRegExp, "Phone is required"),
  })
  .required();

const EditProfile: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<User>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const [createFamily] = useCreateFamilyMutation();

  const onSubmit = async (data: User) => {
    try {
      const { name } = data;

      await createFamily({
        name,
      }).unwrap();

      router.push("/dashboard/family");
      toast("Success Menambahkan Data", {
        type: "success",
        autoClose: 2000,
      });
    } catch (error) {
      toast("Gagal Menambahkan Data", {
        type: "error",
      });
    }
  };

  const [page, setPage] = React.useState<number>(0);

  // create function handle submit form

  return (
    <AuthLayout>
      <div className=" px-5">
        <h1 className="font-bold text-3xl text-left mb-2">Edit Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section Family Information  */}
          <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
            {/* <h2 className="text-lg text-left mb-5">Family Information</h2> */}

            <div className="mb-4">
              <FormInput<Partial<User>>
                name="name"
                label={"Name"}
                className={"mb-2"}
                id={"name"}
                type={"text"}
                register={register}
                placeholder={"Please enter your name"}
                errors={errors}
              />

              <FormInput<Partial<User>>
                name="email"
                label={"Email"}
                className={"mb-2"}
                id={"email"}
                type={"text"}
                register={register}
                placeholder={"Please enter your email"}
                errors={errors}
              />

              <FormInput<Partial<User>>
                name="phone"
                label={"Phone Number"}
                className={"mb-2"}
                id={"phone"}
                type={"text"}
                register={register}
                placeholder={"Please enter your phone number"}
                errors={errors}
              />

              <FormSelect<Partial<User>>
                name="gender"
                label={"Gender"}
                className={"mb-2"}
                id={"gender"}
                register={register}
                placeholder={"Please select a gender"}
                errors={errors}
              >
                <option>Please select a gender</option>
                <option>Male</option>
                <option>Female</option>
              </FormSelect>

              <FormInput<Partial<User>>
                name="birthPlace"
                label={"Birth Place"}
                className={"mb-2"}
                id={"birthPlace"}
                register={register}
                placeholder={"Please enter your birth place"}
                errors={errors}
              />

              <FormInput<Partial<User>>
                name="birthDate"
                type={"date"}
                label={"Birth Date"}
                className={"mb-2"}
                id={"birthDate"}
                register={register}
                placeholder={"Please enter your birth date"}
                errors={errors}
              />
            </div>

            <div className="text-right">
              <input
                type="submit"
                value="Save / Submit"
                className="block uppercase sm:inline-block py-3 px-8 w-[280px] m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-center font-semibold leading-none border-primary border-2 bg-primary border-transparent text-white hover:cursor-pointer"
              />
            </div>
          </section>
        </form>
      </div>
    </AuthLayout>
  );
};

export default EditProfile;
