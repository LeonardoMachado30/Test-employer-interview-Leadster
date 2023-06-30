"use client";

import Image from "next/image";
import logo from "@/styles/assets/logo.png";
import backgroundTitle from "@/styles/assets/background-title.png";
import styled from "styled-components";

const Header = styled.header`
  padding: 44px;
`;

const Rounded = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1c3c50;
  border-radius: 30px;
  padding: 6px 18px;
  font-size: 16px;
  font-weight: 400;
  text-center;

  &:hover {
    color: #007eff;
    border: 1px solid #007eff;
  }
`;

const FilterList = styled.div``;

const SelectFilter = styled.select`
  border: 1px solid #1c3c50;
  color: #1c3c50;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;

  &:active,
  &:focus-visible {
    border: 1px solid #007eff !important;
    color: #007eff !important;
  }
`;

const Hr = styled.div`
  border: 1px solid #ccc;
  width: 60%;
`;
export default function Home(): JSX.Element {
  function buttonFilter(e: React.MouseEvent<HTMLButtonElement>) {
    // console.log(e.target.parentElement);

    // console.log(childrensList);
    e.target?.classList.add("active");
  }

  return (
    <>
      <main className="flex flex-col items-center justify-between p-4">
        <Header>
          <Image src={logo} alt="logo" width={200} height={440} />
        </Header>

        <Image
          src={backgroundTitle}
          alt="background"
          style={{ width: "100%", marginBottom: "100px" }}
        />
        <FilterList className="flex justify-center items-center gap-24 pb-6">
          <div className="flex justify-center items-center gap-5">
            <Rounded onClick={(e: any) => buttonFilter(e)}>Agências</Rounded>
            <Rounded onClick={(e: any) => buttonFilter(e)}>Chatbot</Rounded>
            <Rounded onClick={(e: any) => buttonFilter(e)}>
              Marketing Digital
            </Rounded>
            <Rounded onClick={(e: any) => buttonFilter(e)}>
              Geração de Leads
            </Rounded>
            <Rounded onClick={(e: any) => buttonFilter(e)}>Mídia Paga</Rounded>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold" style={{ color: "#1c3c50" }}>
              Ordenar por:
            </p>
            <SelectFilter>
              <option value="0">Data de publicação</option>
            </SelectFilter>
          </div>
        </FilterList>
        <Hr />
      </main>
    </>
  );
}
