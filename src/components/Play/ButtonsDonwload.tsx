import Image from "next/image";
import styled from "styled-components";
import cloud_icon from "styles/assets/clound_icon.svg";

interface IProp {
  className?: string;
  isActiveButton?: boolean;
}

export default function ButtonsDownload({
  className,
  isActiveButton,
}: IProp): JSX.Element {
  return (
    <div className={`flex mt-4 gap-2 ${className}`}>
      <button className="rounded flex" style={{ backgroundColor: "#c2f4ea" }}>
        <div
          className="py-1 px-1 h-full rounded-l-md flex justify-center items-center"
          style={{ backgroundColor: "#9fefdf" }}
        >
          <Image
            src={cloud_icon}
            width={20}
            height={30}
            alt="cloud"
            className="!fill-green-700"
          />
        </div>
        <p className="px-2 py-1 text-sm font-bold text-emerald-500">
          Spreadsheet.xls
        </p>
      </button>

      <button className="bg-sky-100 rounded flex">
        <div
          className="py-1 px-1 h-full rounded-l-md flex justify-center items-center"
          style={{ backgroundColor: "#a1d9ff" }}
        >
          <Image src={cloud_icon} width={20} height={30} alt="cloud" />
        </div>
        <p className="px-2 py-1 text-sm font-bold text-sky-700">Document.doc</p>
      </button>

      <button className="bg-yellow-100 text-yellow-700 rounded flex">
        <div
          className="py-1 px-1 h-full rounded-l-md flex justify-center items-center"
          style={{ backgroundColor: "#fff1a0" }}
        >
          <Image
            src={cloud_icon}
            width={20}
            height={30}
            alt="cloud"
            className="!fill-green-700"
          />
        </div>
        <p className="px-2 py-1 text-sm font-bold text-yellow-700">
          Presentation.ppt
        </p>
      </button>

      {isActiveButton && (
        <button
          className="rounded flex"
          style={{ backgroundColor: "#e8eef3", color: "#959ea5" }}
        >
          <div
            className="py-1 px-1 h-full rounded-l-md flex justify-center items-center"
            style={{ backgroundColor: "#d0dee7" }}
          >
            <Image
              src={cloud_icon}
              width={20}
              height={30}
              alt="cloud"
              className="!fill-green-700"
            />
          </div>
          <p className="px-2 py-1 text-sm font-bold">Folder.zip</p>
        </button>
      )}
    </div>
  );
}
