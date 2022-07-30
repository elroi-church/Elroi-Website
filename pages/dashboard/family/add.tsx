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

const WaterBaptismForm: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FamilyInformation>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const [createFamily] = useCreateFamilyMutation();

  const [cityList, setCityList] = useState<SelectOption<number>[]>([]);
  const [stateList, setStateList] = useState<SelectOption<number>[]>([]);

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
        <h1 className="font-bold text-3xl text-center">
          Kartu Keluarga Jemaat
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section Family Information  */}
          <section className="shadow-md border border-gray-100 rounded-lg p-5 mb-5">
            <h2 className="text-lg text-left mb-5">Family Information</h2>

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

export default WaterBaptismForm;
