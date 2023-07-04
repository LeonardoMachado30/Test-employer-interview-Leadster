import Image from "next/image";
import ContentClientComponent from "components/ContentClientComponent";
import Footer from "components/Footer";
import logo from "styles/assets/logo.png";
import backgroundTitle from "styles/assets/background-title.png";

export default function Home(): JSX.Element {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <header style={{ padding: "44px" }}>
          <Image src={logo} alt="logo" width={200} height={440} />
        </header>

        <Image
          src={backgroundTitle}
          alt="background"
          style={{ width: "100%", marginBottom: "100px" }}
        />

        <ContentClientComponent />

        <Footer />
      </main>
    </>
  );
}
