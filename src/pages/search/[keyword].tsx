import Layout from "components/Layout";
import Posts from "components/Posts";
import Head from "next/head";
import fetchData from "utils/fetchData";
import useSWR from "swr";
import styles from "styles/Home.module.css";

import Error from "components/Error";

import User from "components/User";
import Post from "components/Post";
const index = ({ keyword }) => {
  const getPosts = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(`/api/search?keyword=${keyword}`, getPosts);

  return (
    <Layout>
      {error && <Error message={"An error occured whiles fetching data"} />}
      <Head>
        <title>Posts</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.search_wrapper}>
          {data?.map((item: any, index: number) =>
            item.type === "user" ? (
              <User key={index} user={item} />
            ) : (
              <Post key={index} data={item} />
            )
          )}
        </div>
      </main>
    </Layout>
  );
};

index.getInitialProps = ({ query }) => {
  const { keyword } = query;
  return { keyword };
};
export default index;