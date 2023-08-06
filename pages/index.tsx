import { PageContainer } from "@/components";
import { QueryControl } from "@/components/query-control/QueryControl";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugging Face UI</title>
      </Head>
      <PageContainer>
        <QueryControl />
      </PageContainer>
    </>
  );
}
