import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { CSSObjectWithLabel } from "react-select";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FormErrorMessage } from "../../../core/components/commons/inputs/FormErrorMessage";
import { FormInput } from "../../../core/components/commons/inputs/FormInput";
import { FormTextarea } from "../../../core/components/commons/inputs/FormTextarea";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import { useGetAllCityQuery } from "../../../core/features/area/api/city.api";
import { useGetAllStateQuery } from "../../../core/features/area/api/state.api";
import { City } from "../../../core/features/area/models/city.model";
import { State } from "../../../core/features/area/models/state.model";
import { useCreateFamilyMutation } from "../../../core/features/family/api/family.api";
import { FamilyInformation } from "../../../core/features/family/models/family.type";
import { Education } from "../../../core/features/commons/enums/education.enum";
import { TranslateEducation } from "../../../core/features/commons/utils/translate-education.util";
import { FormSelect } from "../../../core/components/commons/inputs/FormSelect";
import { FormCheckbox } from "../../../core/components/commons/inputs/FormCheckbox";
import { useGetProfileQuery } from "../../../core/features/auth/api/auth.api";
import { User } from "../../../core/features/user/models/user";

export type SelectOption<T> = {
  value: T;
  label: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    state_id: yup.number().positive().integer().required("State is required"),
    city_id: yup.number().positive().integer().required("City is required"),
    address: yup.string().required("Address is required"),
    district: yup.string().required(),
    postalCode: yup.string().required("Postal code is required"),
    familyPhoneNumber: yup.string().required("Phone number is required"),
  })
  .required();

const FamilyAddForm: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    resetField,
    formState: { errors },
  } = useForm<FamilyInformation>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createFamily] = useCreateFamilyMutation();

  const { data: profileData } = useGetProfileQuery(null);

  const [cityList, setCityList] = useState<SelectOption<number>[]>([]);
  const [stateList, setStateList] = useState<SelectOption<number>[]>([]);
  const [useProfileData, setUseProfileData] = useState<boolean>(false);
  const [profileDataState, setProfileDataState] = useState<User>({});

  const { data: stateData } = useGetAllStateQuery({
    country_id: 102,
  });

  useEffect(() => {
    if (stateData) {
      const mappedState = stateData.data?.map((state: State) => {
        return {
          value: state._id as number,
          label: state.name as string,
        };
      });
      setStateList(mappedState);
    }

    return () => {
      setStateList([]);
    };
  }, [stateData]);

  const { data: cityData } = useGetAllCityQuery(
    watch("state_id") ? { state_id: watch("state_id") } : skipToken,
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (cityData) {
      const mappedCity = cityData.data?.map((state: City) => {
        return {
          value: state._id as number,
          label: state.name as string,
        };
      });
      setCityList(mappedCity);
    }

    return () => {
      setCityList([]);
    };
  }, [cityData]);

  useEffect(() => {
    if (profileData) {
      setProfileDataState(profileData?.data!);
    }
    return () => {
      setProfileDataState({});
    };
  }, [profileData]);

  const onUseProfileData = (isUseProfile: boolean) => {
    if (isUseProfile) {
      const { name, birthDate, birthPlace, gender, baptismDate, email, phone } =
        profileDataState!;
      console.log(profileDataState);

      reset({
        ...watch(),
        familyHeadName: name,
        familyHeadEmail: email,
        birthDate: birthDate ? birthDate!.toString() : undefined,
        birthPlace: birthPlace ? birthPlace! : undefined,
        gender: gender ?? undefined,
        isBaptized: !!baptismDate,
        baptismDate: baptismDate ? baptismDate!.toString() : undefined,
        isMarried: false,
        isDedicatedToJesus: false,
        familyHeadPhoneNumber: phone ? phone! : undefined,
      });
    }
  };

  const onSubmit = async (data: FamilyInformation) => {
    try {
      const {
        name,
        state_id,
        city_id,
        address,
        district,
        postalCode,
        familyPhoneNumber,
        hamlet,
        neighbourhood,
        familyHeadName,
        familyHeadEmail,
        familyHeadPhoneNumber,
        birthDate,
        birthPlace,
        gender,
        baptismDate,
        isDedicatedToJesus,
        isMarried,
        job,
        isBaptized,
        education,
      } = data;

      await createFamily({
        name,
        state_id,
        city_id,
        address,
        district,
        postalCode,
        familyPhoneNumber,
        hamlet,
        neighbourhood,
        familyHeadName,
        familyHeadEmail,
        familyHeadPhoneNumber,
        birthDate,
        birthPlace,
        gender,
        baptismDate,
        isDedicatedToJesus,
        isMarried,
        job,
        isBaptized,
        education,
      }).unwrap();

      await router.push("/dashboard/family");

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
        <h1 className="font-bold text-3xl text-center">
          Kartu Keluarga Jemaat
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
            <h2 className="font-bold text-xl mb-5">Data Kepala Keluarga</h2>

            <div className={"mb-4"}>
              <label className={"mr-2"}>Use My Profile Data ?</label>
              <input
                type={"checkbox"}
                onChange={(e) => onUseProfileData(e.target.checked)}
              />
            </div>

            {/* <FormCheckbox<FamilyInformation> */}
            {/*   name="name" */}
            {/*   label={"Use My Profile Data"} */}
            {/*   className={"mb-2"} */}
            {/*   id={"name"} */}
            {/*   onChange={(e) => onUseProfileData()} */}
            {/*   register={register} */}
            {/*   placeholder={"Harap isi nama keluarga"} */}
            {/*   errors={errors} */}
            {/* /> */}

            <div className={"mb-4"}>
              <FormInput<FamilyInformation>
                name="familyHeadName"
                label={"Nama Kepala Keluarga"}
                className={"mb-2"}
                id={"familyHeadName"}
                register={register}
                placeholder={"Harap isi nama keluarga"}
                errors={errors}
              />

              <FormInput<FamilyInformation>
                name="familyHeadEmail"
                label={"Email Kepala Keluarga"}
                className={"mb-2"}
                id={"familyHeadEmail"}
                register={register}
                placeholder={"Harap isi email kepala keluarga"}
                errors={errors}
              />

              <FormInput<FamilyInformation>
                name="familyHeadPhoneNumber"
                label={"No Telepon Kepala Keluarga"}
                className={"mb-2"}
                id={"familyHeadPhoneNumber"}
                register={register}
                placeholder={"Harap isi No Telepon Kepala Keluarga"}
                errors={errors}
              />

              <FormInput<FamilyInformation>
                name="birthDate"
                label={"Tempat Lahir"}
                className={"mb-2"}
                id={"birthDate"}
                register={register}
                placeholder={"Harap isi nama keluarga"}
                errors={errors}
              />

              <FormSelect<FamilyInformation>
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

              <FormInput<FamilyInformation>
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

            <FormSelect<FamilyInformation>
              name="education"
              label={"Pendidikan"}
              className={"mb-2"}
              id={"Education"}
              register={register}
              placeholder={"Harap isi Pendidikan"}
              errors={errors}
            >
              <option></option>
              <option value={Education.Elementary}>
                {TranslateEducation(Education.Elementary)}
              </option>
              <option value={Education.JuniorHigh}>
                {TranslateEducation(Education.JuniorHigh)}
              </option>
              <option value={Education.SeniorHigh}>
                {TranslateEducation(Education.SeniorHigh)}
              </option>
              <option value={Education.Undergraduate}>
                {TranslateEducation(Education.Undergraduate)}
              </option>
              <option value={Education.Graduate}>
                {TranslateEducation(Education.Graduate)}
              </option>
              <option value={Education.Postgraduate}>
                {TranslateEducation(Education.Postgraduate)}
              </option>
              <option value={Education.Others}>
                {TranslateEducation(Education.Others)}
              </option>
            </FormSelect>

            <FormInput<FamilyInformation>
              name="job"
              type={"text"}
              label={"Pekerjaan"}
              className={"mb-2"}
              id={"job"}
              register={register}
              placeholder={"Harap isi Pekerjaan"}
              errors={errors}
            />
            <FormCheckbox<FamilyInformation>
              name="isBaptized"
              type={"text"}
              label={"Sudah di Baptis ?"}
              className={"mb-2"}
              id={"isBaptized"}
              register={register}
              errors={errors}
            />
            {watch("isBaptized") == true && (
              <FormInput<FamilyInformation>
                name="baptismDate"
                type={"date"}
                label={"Tanggal Baptis?"}
                className={"mb-2"}
                id={"baptismDate"}
                register={register}
                value={
                  watch("baptismDate")?.toString() || new Date().toDateString()
                }
                errors={errors}
              />
            )}

            <FormCheckbox<FamilyInformation>
              name="isMarried"
              label={"Sudah menikah ?"}
              className={"mb-2"}
              id={"isMarried"}
              register={register}
              errors={errors}
            />

            <FormCheckbox<FamilyInformation>
              name="isDedicatedToJesus"
              label={"Sudah diserahkan ?"}
              className={"mb-2"}
              id={"isDedicatedToJesus"}
              register={register}
              errors={errors}
            />

            {/* Section Family Information  */}

            <h2 className="font-bold text-lg text-left mb-5">Data Keluarga</h2>

            <div className="mb-4">
              <FormInput<FamilyInformation>
                name="name"
                label={"Nama Keluarga"}
                className={"mb-2"}
                id={"name"}
                register={register}
                placeholder={"Harap isi nama keluarga"}
                errors={errors}
              />

              <FormTextarea<FamilyInformation>
                name="address"
                label={"Alamat Lengkap"}
                id={"address"}
                className={"mb-2"}
                register={register}
                inputClassName={"rounded-xl"}
                placeholder={"Harap isi alamat Lengkap"}
                errors={errors}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Provinsi
              </label>
              <Controller<FamilyInformation>
                control={control}
                name="state_id"
                render={({
                  field: { onChange, value, name, ref },
                  fieldState,
                }) => (
                  <Select
                    ref={ref}
                    name={name}
                    classNamePrefix="addl-class"
                    styles={{
                      control: (styles) => ({
                        ...styles,
                        borderColor: fieldState.error
                          ? "red !important"
                          : styles.borderColor,
                        "&:hover": {
                          borderColor: fieldState.error
                            ? "red !important"
                            : (styles["&:hover"] as CSSObjectWithLabel)
                                .borderColor,
                        },
                      }),
                    }}
                    options={stateList}
                    value={stateList.find((c) => c.value === Number(value))}
                    onChange={(val) => onChange(val?.value)}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name={"state_id"}
                render={({ message }) => (
                  <FormErrorMessage>{message}</FormErrorMessage>
                )}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Kota/Kabupaten
              </label>
              <Controller<FamilyInformation>
                control={control}
                name="city_id"
                render={({
                  field: { onChange, value, name, ref },
                  fieldState,
                }) => (
                  <Select
                    ref={ref}
                    name={name}
                    classNamePrefix="addl-class"
                    options={cityList}
                    styles={{
                      control: (styles) => ({
                        ...styles,
                        borderColor: fieldState.error
                          ? "red !important"
                          : styles.borderColor,
                        "&:hover": {
                          borderColor: fieldState.error
                            ? "red !important"
                            : (styles["&:hover"] as CSSObjectWithLabel)
                                .borderColor,
                        },
                      }),
                    }}
                    value={cityList.find((c) => c.value === Number(value))}
                    onChange={(val) => onChange(val?.value)}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name={"city_id"}
                render={({ message }) => (
                  <FormErrorMessage>{message}</FormErrorMessage>
                )}
              />
            </div>

            <div className="mb-4">
              <FormInput<FamilyInformation>
                name="district"
                label={"Kecamatan"}
                className={"mb-2"}
                id={"district"}
                register={register}
                placeholder={"Harap isi Kecamatan"}
                errors={errors}
              />
              <FormInput<FamilyInformation>
                name="familyPhoneNumber"
                label={"No Telfon Keluarga"}
                className={"mb-2"}
                id={"familyPhoneNumber"}
                register={register}
                placeholder={"Harap isi No Telfon keluarga"}
                errors={errors}
              />
              <FormInput<FamilyInformation>
                name="hamlet"
                label={"RW"}
                className={"mb-2"}
                id={"hamlet"}
                register={register}
                placeholder={"Harap isi RW"}
                errors={errors}
              />
              <FormInput<FamilyInformation>
                name="neighbourhood"
                label={"RT"}
                className={"mb-2"}
                id={"neighbourhood"}
                register={register}
                placeholder={"Harap isi RT"}
                errors={errors}
              />
              <FormInput<FamilyInformation>
                name="postalCode"
                label={"Kode Pos"}
                className={"mb-2"}
                id={"postalCode"}
                register={register}
                placeholder={"Harap isi Kode Pos"}
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

export default FamilyAddForm;
