import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useGetAllFamilyMemberQuery } from "../../../../core/features/family/api/family-member.api";
import { useGetFamilyDetailQuery } from "../../../../core/features/family/api/family.api";
import { FamilyRole } from "../../../../core/features/family/models/enums/family-role.enum";
import { Family } from "../../../../core/features/family/models/family";
import { FamilyMember } from "../../../../core/features/family/models/family-member";
import { formatDate } from "../../../../core/helpers/time-parser";

const minWidth = 150;

const SpanTitle = styled.span`
  font-weight: bold;
  min-width: ${minWidth}px;
`;

const CustomColumn: React.FC<{ item?: FamilyMember }> = ({ item }) => {
  return (
    <div className="grid grid-cols-8 gap-0 text-center">
      <div className="border border-black">
        {item?.name ? <span>{item!.name}</span> : <span>-</span>}
      </div>
      <div className="border border-black">
        {item?.birthPlace && item?.birthDate ? (
          <span>{`${item?.birthPlace}, ${formatDate(item?.birthDate)}`}</span>
        ) : (
          <span>-</span>
        )}
      </div>
      <div className="border border-black">
        {item?.education ? <span>{item!.education}</span> : <span>-</span>}
      </div>
      <div className="border border-black">
        {item?.job ? <span>{item!.job}</span> : <span>-</span>}
      </div>
      <div className="border border-black">
        {item?.gender ? <span>{item!.gender}</span> : <span>-</span>}
      </div>
      <div className="border border-black">
        {item?.isDedicatedToJesus ? <span>Sudah</span> : <span>Belum</span>}
      </div>
      <div className="border border-black">
        {item?.isBaptized ? <span>Sudah</span> : <span>Belum</span>}
      </div>
      <div className="border border-black">
        {item?.isMarried ? <span>Sudah</span> : <span>Belum</span>}
      </div>
    </div>
  );
};

const FamilyPrint: NextPage = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef!.current,
  });

  const router = useRouter();

  const id = router.query.id as string;

  const [familyInformation, setFamilyInformation] = useState<Family>();

  const [groupFamilyMember, setGroupFamilyMember] = useState<
    { [key: string]: FamilyMember[] } | undefined
  >();

  const { data: familyData } = useGetFamilyDetailQuery(
    id ? { id: id } : skipToken,
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const { data: familyMemberData } = useGetAllFamilyMemberQuery(
    id ? { familyId: id } : skipToken,
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  let documentStyle = {
    body: {
      fontFamily: "roboto",
      fontSize: 11,
      lineHeight: 1.4,
    },
    "@page": {
      size: "letter landscape",
      margin: 0,
      fontSize: 8,
      lineHeight: 1.2,
    },
  };

  // Print css style
  useEffect(() => {
    // loop through the styles and apply them to the document
    for (const prop in documentStyle.body) {
      document.body.style[prop] = documentStyle.body[prop];
    }
    return () => {};
  }, [documentStyle]);

  useEffect(() => {
    if (familyData) {
      setFamilyInformation(familyData.data);
    }
  }, [familyData]);

  useEffect(() => {
    if (familyMemberData) {
      const group = familyMemberData.data.reduce((acc, curr) => {
        const key = curr?.familyRole!;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
      }, {} as { [key: string]: FamilyMember[] });

      console.log(group);

      setGroupFamilyMember(group);
    }
  }, [familyMemberData]);

  const onHandlePrint = () => {
    setPageOrientation("landscape");
    handlePrint();
  };

  function setPageOrientation(cssPageOrientation: string) {
    // const style = document.createElement("style");
    // style.innerHTML = `@page {size: ${cssPageOrientation}}`;
    // style.id = "page-orientation";
    //
    // document.head.appendChild(style);

    for (const prop in documentStyle["@page"]) {
      document.body.style[prop] = documentStyle["@page"][prop];
    }
  }

  const Logo = () => (
    <div className="w-1/5">
      <img
        src="/assets/logo.png"
        style={{ maxWidth: "100px" }}
        alt="logo"
        className="object-cover shrink"
      />
    </div>
  );

  return (
    <div>
      <section className="py-2">
        <Link href="/dashboard/family">
          <Button>Back</Button>
        </Link>
        <Button onClick={onHandlePrint} color="warning">
          Print
        </Button>
      </section>
      <section ref={componentRef} className="p-5">
        <header>
          {/* Logo & Title */}
          <section className="flex flex-row min-w-0 w-full">
            <div className="w-full flex flex-row">
              <Logo />
              <div className="flex flex-row justify-between ml-5 w-4/5">
                <h2 className="text-2xl lg:text-3xl uppercase font-medium">
                  Kartu Keluarga Jemaat
                </h2>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl uppercase font-normal">
                  Gereja Bethel Indonesia
                </h3>
                <p>
                  No.73, Jl. Raya Muchtar No.Rt.02, Bojongsari Lama, Kec.
                  Bojongsari, Kota Depok, Jawa Barat 16516, Indonesia
                </p>
              </div>
            </div>
          </section>
          {/* Info */}
          <section>
            <div className="flex flex-row justify-between mt-5 bg-primary px-2 py-2">
              <div>
                <p> No. KKJ: {familyInformation?.code}</p>
              </div>
              <div>
                <p>Rayon: {familyInformation?.churchArea}</p>
              </div>
              <div>
                <p> Cabang / Ranting: {familyInformation?.churchName}</p>
              </div>
              <div className="flex flex-row">
                <p>Mulai Berjamaat: 2017 | </p>
                <p>
                  Tanggal Proses: {formatDate(familyInformation?.createdAt!)}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="flex flex-row justify-between mt-5 bg-primary px-2 py-2">
                <div>
                  <div className="flex items-start">
                    <SpanTitle> Kepala Keluarga </SpanTitle>
                    <p> :&nbsp;{familyInformation?.name}</p>
                  </div>
                  <div className="flex items-start">
                    <SpanTitle> Alamat </SpanTitle>
                    <p>:&nbsp;{familyInformation?.address}</p>
                  </div>
                  <div className="flex items-start">
                    <SpanTitle> No. Telp </SpanTitle>
                    <p>:&nbsp;{familyInformation?.familyPhoneNumber}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <SpanTitle> Kecamatan </SpanTitle>
                    <p>:&nbsp;{familyInformation?.district}</p>
                  </div>
                  <div className="flex items-start">
                    <SpanTitle> Kab/Kota </SpanTitle>
                    <p>:&nbsp;{familyInformation?.city?.name}</p>
                  </div>
                  <div className="flex items-start">
                    <SpanTitle> Provinsi </SpanTitle>
                    <p>:&nbsp;{familyInformation?.state?.name}</p>
                  </div>
                  <div className="flex items-start">
                    <SpanTitle> Kode Pos </SpanTitle>
                    <p>:&nbsp;{familyInformation?.postalCode}</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </section>
        </header>
        <main className="mt-2">
          <div className="grid grid-cols-8 gap-0 text-center">
            <div className="border border-black">Nama</div>
            <div className="border border-black">Tempat, Tanggal Lahir</div>
            <div className="border border-black">Pendidikan</div>
            <div className="border border-black">Pekerjaan</div>
            <div className="border border-black">Jenis Kelamin</div>
            <div className="border border-black">Diserahkan</div>
            <div className="border border-black">Baptis Selam</div>
            <div className="border border-black">Nikah</div>
          </div>
          <section className="mt-2">
            <h2>A. Kepala Rohani</h2>

            <section>
              {groupFamilyMember?.[FamilyRole.Head]?.map((item) => (
                <CustomColumn item={item} key={item._id} />
              ))}
            </section>
          </section>

          <section className="mt-2">
            <h2>B. Pasangan</h2>
            <section>
              {groupFamilyMember?.[FamilyRole.Spouse]?.length === 0 ? (
                groupFamilyMember?.[FamilyRole.Spouse]?.map((item) => (
                  <CustomColumn item={item} key={item._id} />
                ))
              ) : (
                <CustomColumn />
              )}
            </section>
          </section>

          <section className="mt-2">
            <h2>C. Anak</h2>
            <section>
              {groupFamilyMember?.[FamilyRole.Child]?.length === 0 ? (
                groupFamilyMember?.[FamilyRole.Child]?.map((item) => (
                  <CustomColumn item={item} key={item._id} />
                ))
              ) : (
                <CustomColumn />
              )}
            </section>
          </section>

          <section className="mt-2">
            <h2>D.Orang lain yang tinggal serumah</h2>
            <section>
              {groupFamilyMember?.[FamilyRole.Child]?.length === 0 ? (
                groupFamilyMember?.[FamilyRole.Child]?.map((item) => (
                  <CustomColumn item={item} key={item._id} />
                ))
              ) : (
                <CustomColumn />
              )}
            </section>
          </section>
        </main>
        <footer className="mt-5">
          {/* Notes */}
          <section className="flex flex-row">
            <div>
              <h2>Catatan : </h2>
            </div>
          </section>
        </footer>
      </section>
    </div>
  );
};

export default FamilyPrint;
