import Image from "next/image";
import logo from "@/styles/assets/logo.png";
import styled from "styled-components";

const CardRounded = styled.p`
  padding: "10px 12px";
  border-radius: 20px 20px 20px 4px;
`;

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <header>
          <Image src={logo} alt="logo" width={120} height={220} />
        </header>
        <section className="" style={{ padding: "178px" }}>
          <CardRounded>WEBINAR EXCLUSIVO</CardRounded>
          <p>Menos Conversinha</p>
          <hr />
          <p>Mais conversão</p>
          <p>
            Conheça as estratégias que mudaram o jogo e como aplicá-las no seu
            negócio
          </p>
        </section>
        Olá
      </main>
    </>
  );
}
