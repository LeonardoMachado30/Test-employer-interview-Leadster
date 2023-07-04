import Pages from "./Pages";
import selectItem from "utils/selectItem";

export default function Pagination(): JSX.Element {
  return (
    <div className="flex items-center justify-center text-2xl gap-3">
      <label className="text-2xl font-bold">Página</label>
      <Pages selectItem={selectItem} />
    </div>
  );
}
