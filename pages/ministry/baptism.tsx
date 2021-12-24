import { NextPage } from "next";
import React from "react";
import Banner from "../../components/commons/banner";
import MainLayout from "../../components/commons/layouts/MainLayout";
import Schedule from "../../components/commons/schedule";

const baptism: NextPage = () => {
  return (
    <>
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
          imgUrlTerm="/assets/img/schedule/schedule.png"
          termconditions={[
            {
              title: "1. Bawa pas photo berwarna ukuran 3x4 sebanyak 2 lembar.",
            },
            {
              title: "2. Bawa materai 10rb.",
            },
            {
              title: "3. Bawa handuk, dan baju ganti.",
            },
          ]}
        />
      </MainLayout>
    </>
  );
};

export default baptism;
