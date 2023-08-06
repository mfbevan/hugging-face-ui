import { PageContainer } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugging Face UI</title>
      </Head>
      <PageContainer>This is some page content</PageContainer>
    </>
  );
}
