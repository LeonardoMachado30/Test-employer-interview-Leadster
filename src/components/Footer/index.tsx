import Image from "next/image";
import logo from "styles/assets/logo.png";
import facebook from "styles/assets/facebook.svg";
import instagram from "styles/assets/instagram.svg";
import linkedin from "styles/assets/linkedin.svg";

export default function Footer(): JSX.Element {
  const objFooter = [
    {
      itemArr: ["Links Principais", "Home", "Ferramenta", "Preços", "Contato"],
    },
    {
      itemArr: [
        "Cases",
        "Geração de Leads B2B",
        "Geração de Leads em Software",
        "Geração de Leads em Imobiliária",
        "Cases de Sucesso",
      ],
    },
    ,
    {
      itemArr: [
        "Materiais",
        "Blog",
        "Parceria com Agências",
        "Guia Definitivo do Marketing",
        "Materiais Gratuitos",
      ],
    },
  ];

  return (
    <footer className="flex flex-col w-full max-w-6xl items-center">
      <div className="py-7">
        <Image src={logo} width={240} height={60} alt="Leads logo" />
        <p className="text-sm">Transformando visitantes em clientes.</p>
      </div>

      <div className="flex items-start justify-evenly w-full mb-20">
        {/* <ul className="flex flex-col gap-6 text-sm opacity-80">
          <li className="font-bold opacity-100 mb-3 text-base">
            Links Principais
          </li>
          <li>Home</li>
          <li>Ferramenta</li>
          <li>Preços</li>
          <li>Contato</li>
        </ul>

        <ul className="flex flex-col gap-6 text-sm opacity-80">
          <li className="font-bold opacity-100 mb-3 text-base">Cases</li>
          <li>Geração de Leads B2B</li>
          <li>Geração de Leads em Software</li>
          <li>Geração de Leads em Imobiliária</li>
          <li>Cases de Sucesso</li>
        </ul>

        <ul className="flex flex-col gap-6 text-sm opacity-80">
          <li className="font-bold opacity-100 mb-3 text-base">Materiais</li>
          <li>Blog</li>
          <li>Parceria com Agências</li>
          <li>Guia Definitivo do Marketing</li>
          <li>Materiais Gratuitos</li>
        </ul> */}

        {objFooter.map((element, index) => {
          return (
            <ul key={index} className="flex flex-col gap-6 text-sm opacity-80">
              {element?.itemArr.map((items, index) => {
                const classNameTitle =
                  index === 0 ? "font-bold opacity-100 mb-3 text-base" : "";

                return (
                  <li key={items} className={classNameTitle}>
                    {items}
                  </li>
                );
              })}
            </ul>
          );
        })}

        <ul className="flex flex-col gap-6 text-sm opacity-80">
          <li className="font-bold opacity-100 mb-2 text-base">
            Siga a Leadster
          </li>
          <li className="flex items-center gap-3">
            <Image src={linkedin} width={40} height={40} alt="linkedin" />
            <Image src={facebook} width={40} height={40} alt="linkedin" />
            <Image src={instagram} width={40} height={40} alt="instagram" />
          </li>
          <li className="flex flex-col gap-3">
            <div className="text-sm opacity-80">
              E-mail: contato@leadster.com.br
            </div>
            <div className="text-sm opacity-80">Telefone: (42) 98828-9851</div>
          </li>
        </ul>
      </div>

      <ul className="flex text-center justify-around text-xs border-gray-100 border-t-2 w-full py-6">
        <li className="flex gap-1">
          Copyright e 2015 - 2022 Todos os direitos reservados |
          <strong style={{ color: "#6fe7fb" }}>LeadSter</strong>
        </li>
        <li>
          Rua José Loureiro, 464 - centro - Curitiba PR - 80010-000 | Termos de
          uso
        </li>
      </ul>
    </footer>
  );
}
