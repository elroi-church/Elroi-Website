import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import { RegisterRequest } from "../../core/features/auth/dtos/register.request";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "../../core/components/commons/inputs/FormInput";
import { useRegisterMutation } from "../../core/features/auth/api/auth.api";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be at least 6 chars"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Register: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [submit] = useRegisterMutation();

  const onSubmit = async (data: RegisterRequest) => {
    console.log(data);
    try {
      await submit({
        ...data,
      });
      router.push("/auth/login");
      toast("Register success", { type: "success" });
    } catch (error) {
      toast((error as any).message, { type: "error" });
    }
  };

  return (
    // Tailwind Register
    <>
      <Head>
        <title>Elroi Church Sawangan - Register</title>
      </Head>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover flex justify-center items-center"
          style={{
            backgroundImage: `url("/assets/img/loginbg.png")`,
            height: "100vh",
          }}
        >
          <div className="mt-[70px] w-full">
            <div className="w-1/2 mx-auto">
              <form
                className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-4">
                  {/* <h2 className="font-bold text-3xl text-center">Log In</h2> */}
                  <img
                    className="h-[150px] mx-auto"
                    src="/assets/img/logo_erc.png"
                    alt=""
                    width="auto"
                  />
                </div>
                <div className="mb-4">
                  <FormInput<Partial<RegisterRequest>>
                    name="name"
                    label={"Nama"}
                    className={"mb-2"}
                    id={"name"}
                    register={register}
                    placeholder={"Harap isi nama"}
                    errors={errors}
                  />
                </div>
                <div className="mb-4">
                  <FormInput<Partial<RegisterRequest>>
                    name="email"
                    type={"email"}
                    label={"Email"}
                    className={"mb-2"}
                    id={"email"}
                    register={register}
                    placeholder={"Harap isi email"}
                    errors={errors}
                  />
                </div>
                <div className="mb-4">
                  <FormInput<Partial<RegisterRequest>>
                    name="password"
                    type={"password"}
                    label={"Password"}
                    className={"mb-2"}
                    id={"password"}
                    register={register}
                    placeholder={"Harap isi password"}
                    errors={errors}
                  />
                </div>
                <div className="mb-4">
                  <FormInput<Partial<RegisterRequest>>
                    name="passwordConfirmation"
                    type={"password"}
                    label={"Konfirmasi Password"}
                    className={"mb-2"}
                    id={"passwordConfirmation"}
                    register={register}
                    placeholder={"Harap isi konfirmasi password anda"}
                    errors={errors}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded-[20px] focus:outline-none focus:shadow-outline w-2/3 mx-auto"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <br />
                <div className="flex items-center flex-col">
                  <p className="font-light">
                    Already Account ?
                    <Link href="/auth/login" passHref>
                      <a className="font-semibold hover:cursor-pointer ml-2">
                        Sign In
                      </a>
                    </Link>
                  </p>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Register;
