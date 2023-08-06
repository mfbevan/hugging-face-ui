import { PageContainer, QueryControl } from "@/components";
import { QueryHistory } from "@/components/query-history";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugging Face UI</title>
      </Head>
      <PageContainer>
        <QueryHistory />
        <QueryControl />
      </PageContainer>
    </>
  );
}
