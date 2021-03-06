import Layout from "components/Layout";
import Posts from "components/Posts";
import Head from "next/head";
import fetchData from "utils/fetchData";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import Error from "components/Error";
import Image from "next/image";
const index = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const nextPage = () => setPageIndex(pageIndex + 1);
  const prevPage = () => pageIndex > 1 && setPageIndex(pageIndex - 1);

  const getPosts = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(
    `/api/posts?limit=3&page=${pageIndex}`,
    getPosts
  );

  return (
    <Layout>
      {error && <Error message="Something went wrong" />}
      <Head>
        <title>Posts</title>
      </Head>
      <section className={styles.container}>
        <Posts data={data} />
        <div className={styles.buttons}>
          {pageIndex != 1 && (
            <button
              aria-label="Previous"
              className={styles.paginationbtn}
              onClick={(e) => prevPage()}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          )}
          {data?.hasMore && (
            <button
              aria-label="Next"
              className={styles.paginationbtn}
              onClick={() => nextPage()}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default index;
