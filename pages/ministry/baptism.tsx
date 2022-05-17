import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import Schedule from "../../core/components/commons/schedule";

const baptism: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elroi Church Sawangan - Ministry of Baptism</title>
      </Head>
      <MainLayout>
        <Banner
          title="Heaven’s Party"
          imgUrl="/assets/img/ministry/baptism.png"
        />
        <Schedule
          titleSchedule="WATER BAPTISM SCHEDULE"
          imgUrl="/assets/img/schedule/schedule.png"
          payload={[
            {
              title: "Registration",
              subtitle: "1 December - 31 December 2021",
            },
            { title: "Water Baptism", subtitle: "1 January 2022" },
          ]}
          imgUrlTerm="/assets/img/ministry/baptism2.png"
          termconditions={[
            {
              title: "1. Bawa pas photo berwarna ukuran 3x4 sebanyak 2 lembar",
            },
            {
              title: "2. Bawa materai 10rb.",
            },
            {
              title: "3. Bawa handuk, dan baju ganti.",
            },
            {
              title: "4. Pakai masker",
            },
            {
              title: "5. Isi formulir registrasi di lokasi Baptisan",
            },
          ]}
        />
      </MainLayout>
    </>
  );
};

export default baptism;
