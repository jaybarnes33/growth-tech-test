import Layout from "components/Layout";
import Posts from "components/Posts";
import Head from "next/head";
import fetchData from "utils/fetchData";
import useSWR from "swr";
import styles from "styles/Home.module.css";

import Error from "components/Error";
import { useRouter } from "next/dist/client/router";
const index = ({}) => {
  const router = useRouter();
  const id = router.query;

  const getPosts = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(`/api/posts?userId=${id}`, getPosts);

  return (
    <Layout>
      {error && <Error message={error} />}
      <Head>
        <title>Posts</title>
      </Head>
      <main className={styles.container}>
        <Posts data={data} />
      </main>
    </Layout>
  );
};

export default index;
