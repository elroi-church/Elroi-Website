import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import { useGetProfileQuery } from "../../../core/features/auth/api/auth.api";
import { useChangeAvatarMutation } from "../../../core/features/user/user.api";

export type SelectOption<T> = {
  value: T;
  label: string;
};

export type FormChangePicture = {
  image: string;
};

const schema = yup
  .object({
    image: yup.string().required("Image is required"),
  })
  .required();

const ChangePassword: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormChangePicture>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const { data: profileData, refetch } = useGetProfileQuery(null);

  const [changeAvatar] = useChangeAvatarMutation();

  const [image, setImage] = React.useState<string>();
  const [imageFile, setImageFile] = React.useState<File>();

  useEffect(() => {
    if (profileData) {
      setImage(profileData?.data?.image);
    }
  }, [profileData]);

  const onSubmit = async () => {
    try {
      // await createFamily({
      //   name,
      // }).unwrap();
      if (!imageFile) {
        throw new Error("Image is required");
      }

      await changeAvatar({
        avatar: imageFile!,
      }).unwrap();

      refetch();

      toast("Change Profile Success", {
        type: "success",
        autoClose: 2000,
      });
    } catch (error) {
      toast("Failed to change password", {
        type: "error",
      });
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // file to base64
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result as string;
        console.log(base64);
        setImage(base64);

        setValue("image", base64);
      };
      setImageFile(file);
    }

    // if (file) {
    //   console.log(file);
    // }
  };

  // create function handle submit form
  return (
    <AuthLayout>
      <div className=" px-5">
        <h1 className="font-bold text-3xl text-left mb-2">Change Picture</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section Family Information  */}
          <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
            {/* <h2 className="text-lg text-left mb-5">Family Information</h2> */}

            <div className="mb-4">
              <img src={image} width={150} alt="avatar" />
              <div>
                <label className="block text-left text-gray-700 text-sm mb-2">
                  Photo
                </label>
                <input type={"file"} onChange={onFileChange} />
                <input type={"hidden"} name="image" />
                <div>{errors.image && <span>{errors.image.message}</span>}</div>
              </div>
              {/* <FormInput<FormChangePassword>
                name="password"
                label={"Password"}
                className={"mb-2"}
                id={"password"}
                type={"password"}
                register={register}
                placeholder={"Please enter your password"}
                errors={errors}
              /> */}
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
