import { PageContainer, PageError } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const Error: NextPage = () => (
  <PageContainer>
    <Head>
      <title>Nexeth</title>
    </Head>
    <PageError
      statusCode="5😱0"
      title="Critical Error"
      description="Something went really wrong! Head back to the home page and try again later."
    />
  </PageContainer>
);

export default Error;
