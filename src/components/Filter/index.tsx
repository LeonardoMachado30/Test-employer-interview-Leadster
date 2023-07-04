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
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-4">
        {roundedList?.map((title) => (
          <Rounded key={title} title={title} selectItem={selectItem} />
        ))}
      </div>

      <Ordenation className="flex gap-2 items-center">
        <p className="font-bold text-sm">Ordenar por:</p>

        <select>
          <option value="0">Data de publicação</option>
        </select>
      </Ordenation>
    </div>
  );
}
