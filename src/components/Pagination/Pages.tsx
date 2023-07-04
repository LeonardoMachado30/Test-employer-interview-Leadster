import styled from "styled-components";

const PageList = styled.ul`
  & > li {
    cursor: pointer;
    text-align: center;
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    // font-weight: 500;

    // &:hover {
    //   border: 1px solid var(--primary_color);
    //   color: var(--primary_color);
    // }
  }
`;

interface IProp {
  selectItem: (event: any, className: string) => void;
}

export default function Pages({ selectItem }: IProp): JSX.Element {
  const Pages = 4;
  const pagesArray = Array.from({ length: Pages }, (_, index) => index + 1);

  return (
    <PageList className="flex items-center">
      {pagesArray.map((page) => {
        const classNameActive = "active-border font-bold";
        const classNameDefault: string = page === 3 ? classNameActive : "";
        return (
          <li
            key={page}
            onClick={(event) => selectItem(event, classNameActive)}
            className={`${classNameDefault}`}
          >
            {page}
          </li>
        );
      })}
    </PageList>
  );
}
