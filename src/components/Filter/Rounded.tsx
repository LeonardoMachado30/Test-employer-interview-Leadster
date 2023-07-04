import styled from "styled-components";

const RoundedCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--secondary_color);
  border-radius: 24px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  text-center;
  width: 100%;
  text-align: center;
 white-space: nowrap;
 margin-bottom: .4rem;

  &:hover {
    color: var(--primary_color);
    border: 1px solid var(--primary_color);
  }
`;

interface IProp {
  title: string;
  selectItem: (event: any, className: string) => void;
}

export default function Rounded({ title, selectItem }: IProp): JSX.Element {
  const classNameDefault: string = title.includes("Leads")
    ? "active-background"
    : "";
  return (
    <RoundedCard
      className={classNameDefault}
      onClick={(e: any) => selectItem(e, "active-background")}
    >
      {title}
    </RoundedCard>
  );
}
