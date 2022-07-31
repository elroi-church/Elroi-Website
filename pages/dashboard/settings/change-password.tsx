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

export type FormChangePassword = {
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const ChangePassword: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormChangePassword>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const [createFamily] = useCreateFamilyMutation();

  const onSubmit = async (data: FormChangePassword) => {
    try {
      const { password } = data;

      // await createFamily({
      //   name,
      // }).unwrap();

      router.push("/dashboard/family");
      toast("Change Password Success", {
        type: "success",
        autoClose: 2000,
      });
    } catch (error) {
      toast("Failed to change password", {
        type: "error",
      });
    }
  };

  // create function handle submit form
  return (
    <AuthLayout>
      <div className=" px-5">
        <h1 className="font-bold text-3xl text-left mb-2">Change Password</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section Family Information  */}
          <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
            {/* <h2 className="text-lg text-left mb-5">Family Information</h2> */}

            <div className="mb-4">
              <FormInput<FormChangePassword>
                name="password"
                label={"Password"}
                className={"mb-2"}
                id={"password"}
                type={"password"}
                register={register}
                placeholder={"Please enter your password"}
                errors={errors}
              />

              <FormInput<FormChangePassword>
                name="confirmPassword"
                label={"Confirm Password"}
                className={"mb-2"}
                id={"password"}
                type={"password"}
                register={register}
                placeholder={"Please enter your password"}
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

export default ChangePassword;
