import Head from "next/head";
import Header from "../components/Header/Header";
import st from "./LayoutHomePage.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function LayoutHomePage({ children }: Props) {
  return (
    <>
      <Head>
        <title>Disney Plus</title>
        <meta name="description" content="Disney Plus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={st.main}>{children}</main>
    </>
  );
}
