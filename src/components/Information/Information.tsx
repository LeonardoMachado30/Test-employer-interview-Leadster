
import Image from "next/image";
import styled from "styled-components";
import rating from "styles/assets/rating.webp";
import no_card_dark from "styles/assets/no-card-dark.webp";
import selo_RD from "styles/assets/selo_RD.png";

const Button = styled.button`
  padding: 20px 40px;
  background-color: var(--primary_color);
  border-radius: 200px;
  color: var(--white_color);
  font-weight: 600;
  font-sizer: 24px;
`;

export default function Information(): JSX.Element {
  return (
    <div className="flex flex-col justify-center gap-2">
      <p className="font-semibold text-4xl">Pronto para triplicar sua</p>
      <p className="font-bold text-4xl">Geração de Leads?</p>
      <p className="font-normal text-2xl">
        Criação e ativação em <strong>4 minutos</strong>.
      </p>

      <div className="flex items-center border-t-2 border-gray-300 pt-4 mt-2 gap-3">
        <Button>VER DEMONSTRAÇÃO</Button>
        <Image src={selo_RD} alt="selo RD" />
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center font-semibold text-sm gap-1 text-center">
          <Image src={no_card_dark} width={15} height={15} alt="Credit card" />
          Não é necessário Cartão de Crédito
        </div>
        |
        <div className="flex items-center justify-center font-semibold text-sm">
          <Image src={rating} width={80} height={15} alt="Credit card" />
          4.9/5 média de satisfação
        </div>
      </div>
    </div>
  );
}
