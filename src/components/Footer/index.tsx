import Image from "next/image";
import logo from "styles/assets/logo.png";
import facebook from "styles/assets/facebook.svg";
import instagram from "styles/assets/instagram.svg";
import linkedin from "styles/assets/linkedin.svg";

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

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col w-full max-w-6xl items-center">
      <div className="py-7">
        <Image src={logo} width={240} height={60} alt="Leads logo" />
        <p className="text-sm">Transformando visitantes em clientes.</p>
      </div>

      <div className="flex items-start justify-evenly w-full lg:mb-20 flex-col lg:flex-row px-4 lg:px-0">
        <ItemsMap />

        <ul className="flex flex-col lg:gap-6 gap-3 text-sm opacity-80 lg:mt-0 mt-4 mb-2 lg:mb-0">
          <li className="font-bold opacity-100 text-base">Siga a Leadster</li>
          <li className="flex items-center gap-3">
            <Image
              src={linkedin}
              width={40}
              height={40}
              alt="linkedin"
              className="cursor-pointer"
            />
            <Image
              src={facebook}
              width={40}
              height={40}
              alt="facebook"
              className="cursor-pointer"
            />
            <Image
              src={instagram}
              width={40}
              height={40}
              alt="instagram"
              className="cursor-pointer"
            />
          </li>
          <li className="flex flex-col gap-3">
            <div className="text-sm opacity-80">
              E-mail: contato@leadster.com.br
            </div>
            <div className="text-sm opacity-80">Telefone: (42) 98828-9851</div>
          </li>
        </ul>
      </div>

      <ul className="flex text-center justify-around text-xs border-gray-100 border-t-2 w-full py-6 lg:flex-row flex-col lg:px-0 px-4">
        <li className="flex gap-1">
          Copyright e 2015 - 2022 Todos os direitos reservados |{" "}
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


const ItemsMap = () =>
  objFooter.map((element: any, index: number) => {
    return (
      <ul
        key={index}
        className="flex flex-col lg:gap-6 gap-3 text-sm opacity-80 lg:mt-0 mt-4"
      >
        {element?.itemArr.map((items: any, index: number) => {
          const classNameTitle =
            index === 0 ? "font-bold opacity-100 lg:mb-3 mb-1 text-base" : "";

          return (
            <li key={items} className={classNameTitle}>
              {index === 0 ? items : <a href="#">{items}</a>}
            </li>
          );
        })}
      </ul>
    );
  });
