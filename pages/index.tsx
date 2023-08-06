import { PageContainer, QueryView } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugging Face UI</title>
      </Head>
      <PageContainer>
        <QueryView />
      </PageContainer>
    </>
  );
}
