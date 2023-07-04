import ButtonsDonwload from "./ButtonsDonwload";

interface IProp {
  closeModal: () => void;
}

export default function Play({ closeModal }: IProp): JSX.Element {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-40 absolute inset-0"></div>

      <div className="bg-white rounded-2xl w-full max-w-xl z-10 scale-up-center mx-4">
        <Header closeModal={closeModal} />

        <div
          className="bg-gray-700 w-full h-full"
          style={{ maxHeight: "350px", minHeight: "160px" }}
        >
          Video
        </div>
        <Footer />
      </div>

      <div className="absolute left-0 bottom-0 bg-white px-4 pb-3 scale-up-center hidden lg:block">
        <ButtonsDonwload className="flex-col" isActiveButton={true} />
      </div>
    </div>
  );
}

const Header = ({ closeModal }: IProp) => (
  <div className="px-6">
    <div
      className="flex flex-col border-t-4 rounded-md border-blue-500 py-2"
      style={{ marginTop: "-2px" }}
    >
      <button
        className="text-gray-600 hover:text-gray-800 self-end"
        onClick={() => closeModal()}
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 011.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" />
        </svg>
      </button>
      <h2 className="lg:text-xl text-lg font-bold max-w-xs self-center mb-6">
        <strong style={{ color: "#0085ff" }}>Webinar:</strong> Como aumentar sua
        Gerção de Leads feat. Traktor
      </h2>
    </div>
  </div>
);

const Footer = () => (
  <div className="px-6 lg:py-4 py-2 pb-7 bg-gray-100 rounded-b-2xl">
    <div className="flex flex-col gap-3">
      <p className="border-b-2 border-gray-200 py-3 text-sm font-bold">
        Descrição
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adiping elit. Morbi eu cursus
        massa. Etiam efficitur est at dolor et sollicitudin ullamcorper at et
        enim. Suspendisse eleifend metus ultrices iaculis aliquam.
      </p>
    </div>
    <div className="flex flex-col">
      <h3 className="font-bold border-b-2 border-gray-200 py-3">Download</h3>
      <ButtonsDonwload className="flex-col lg:flex-row" />
    </div>
  </div>
);
