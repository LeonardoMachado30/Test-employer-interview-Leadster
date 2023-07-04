import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import play from "styles/assets/play.png";
import moveList from "utils/movieList.json";
import thumbnail from "styles/assets/thumbnail.png";
import Play from "components/Play";

const Card = styled.div`
  max-width: 364px;
  max-height: 290px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  position: relative;

  // border-t

  & > p {
    padding: 20px 32px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary_color);
    }
  }

  &:hover {
    cursor: pointer;

    & > p {
      color: var(--primary_color);
    }
  }

  & > div > img {
    width: 100% !important;
    border-radius: 20px 20px 0 0;
  }

  &:hover > div {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary_color);
      border-radius: 20px 20px 0 0;
      animation: opacity-up 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 68px;
      height: 68px;
      background-image: url(${play.src}) !important;
      background-repeat: no-repeat;
      background-size: cover;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0s
        both;
    }
  }
`;

interface IOpenModal {
  open: boolean;
  modalData?: null;
}

export default function CardMovie(): JSX.Element {
  const [openModal, setOpenModal] = useState<IOpenModal>({
    open: false,
  });

  const closeModal = () => {
    setOpenModal({ modalData: null, open: false });
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7 border-y-2 border-gray-300 py-16 mb-8">
        {moveList?.movie?.map((data, index) => {
          const img: string = !data?.image ? thumbnail.src : "";

          return (
            <Card
              key={index}
              className="shadow-lg"
              onClick={() => setOpenModal({ modalData: data, open: true })}
            >
              <div>
                <Image
                  src={img}
                  alt={`${data.title}-${index}`}
                  width={300}
                  height={300}
                />
              </div>
              <p>{data.title}</p>
            </Card>
          );
        })}
      </section>

      {openModal.open && <Play closeModal={closeModal} />}
    </>
  );
}
