"use client";
import Image from "next/image";
import backgroundSky from "styles/assets/backgroun-sky.png";
import comparativo_img_CTA from "styles/assets/comparativo_img_CTA.png";
import Information from "components/Information";
import CardMovie from "components/CardMovie";
import Filter from "components/Filter";
import Pagination from "components/Pagination";

export default function ContentClientComponent(): JSX.Element {
  return (
    <>
      <section className="mb-24 w-full max-w-5xl">
        <Filter />
        <CardMovie />
        <Pagination />
      </section>

      <section
        className="flex items-center justify-center gap-10 w-full h-auto py-8"
        style={{
          backgroundImage: `url(${backgroundSky.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={comparativo_img_CTA}
          width={600}
          height={600}
          style={{ width: "40%" }}
          alt="comparativo"
        />

        <Information />
      </section>
    </>
  );
}
