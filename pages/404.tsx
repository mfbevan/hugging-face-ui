import { PageContainer, PageError } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const NotFound: NextPage = () => (
  <PageContainer>
    <Head>
      <title>404 Not Found</title>
    </Head>
    <PageError
      statusCode="4🫤4"
      title="Page Not Found"
      description="We couldn't find the page that you were looking for. Head back to the home page"
    />
  </PageContainer>
);

export default NotFound;
