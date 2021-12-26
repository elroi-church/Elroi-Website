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
        />
      </MainLayout>
    </>
  );
};

export default baptism;
