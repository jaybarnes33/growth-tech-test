import Layout from "components/Layout";
import Posts from "components/Posts";
import Head from "next/head";
import fetchData from "utils/fetchData";
import useSWR from "swr";
import styles from "styles/Home.module.css";

import Error from "components/Error";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const getPosts = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(`/api/posts/user?user=${id}`, getPosts);

  return (
    <Layout>
      <Head>
        <title>Posts | {id}</title>
      </Head>

      <main className={styles.container}>
        {error && <Error message={"An error occured whiles fetching data"} />}
        <Posts data={data} />
      </main>
    </Layout>
  );
};

export default index;
