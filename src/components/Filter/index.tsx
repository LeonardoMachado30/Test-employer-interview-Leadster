import styled from "styled-components";
import Rounded from "./Rounded";
import selectItem from "utils/selectItem";

const Ordenation = styled.div`
  & > p {
    color: var(--secodnary_color);
  }

  & > select {
    border: 1px solid var(--secondary_color);
    color: var(--secondary_color);
    border-radius: 10px;
    padding: 6px 12px;
    font-size: 16px;

    &:active,
    &:focus-visible {
      // border: 0px solid #fff !important;
    }
  }
`;

export default function Filter(): JSX.Element {
  const roundedList = [
    "Agências",
    "Chatbot",
    "Marketing Digital",
    "Geração de Leads",
    "Mídia Paga",
  ];

  return (
    <div className="flex items-center justify-between mb-5 flex-wrap lg:flex-nowrap px-4 lg:px-0">
      <div className="flex items-center gap-2 md:gap-4 flex-wrap lg:flex-nowrap ">
        {roundedList?.map((title) => (
          <Rounded key={title} title={title} selectItem={selectItem} />
        ))}
      </div>

      <Ordenation className="flex gap-2 items-center justify-between   w-full lg:justify-start lg:w-auto">
        <p className="font-bold text-sm">Ordenar por:</p>

        <select>
          <option value="0">Data de publicação</option>
        </select>
      </Ordenation>
    </div>
  );
}
