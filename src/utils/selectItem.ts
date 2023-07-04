export default function selectItem(event: any, className: string): void {
  const target = event.currentTarget;
  const childrenArr = Array.from(target.parentElement?.children);

  childrenArr.map((children: any) => children?.classList.remove(className));

  target.classList.add(className);
}
