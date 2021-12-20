import { NextPage } from "next";
import React from "react";
import Banner from "../../components/commons/banner";
import MainLayout from "../../components/commons/layouts/MainLayout";

const baptism: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Banner
          title="Heaven’s Party"
          imgUrl="/assets/img/ministry/baptism.png"
        />
      </MainLayout>
    </>
  );
};

export default baptism;
