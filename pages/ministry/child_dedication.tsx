import { NextPage } from "next";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import Schedule from "../../core/components/commons/schedule";

const baptism: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Banner
          title="Child Dedication"
          imgUrl="/assets/img/dedication/dedication.png"
        />
        <div className="m-auto w-1/2 my-[70px] text-center">
          <h1 className="font-bold text-[30px] mb-3">MAZMUR 127:4</h1>
          <p className="text-3xl font-light">
            “Seperti anak-anak panah di tangan pahlawan, demikianlah anak-anak
            pada masa muda.”
          </p>
        </div>
        <Schedule
          bgColor="bg-gray-100"
          titleSchedule="CHILD DEDICATION SCHEDULE"
          imgUrl="/assets/img/schedule/schedule.png"
          payload={[
            {
              title: "Registration",
              subtitle: "6 December - 1 January 2021",
            },
            { title: "Child Dedication", subtitle: "2 January 2022" },
          ]}
          imgUrlTerm="/assets/img/dedication/term.png"
          termconditions={[
            {
              title: "1. Foto 3X4 (2 Lembar)",
            },
            {
              title: "2. Orang Tua Sudah di  Baptis Selam",
            },
            {
              title: "3. Fotocopy Akta Kelahiran",
            },
          ]}
        />
      </MainLayout>
    </>
  );
};

export default baptism;
