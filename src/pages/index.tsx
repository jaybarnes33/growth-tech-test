import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

import fetchData from "utils/fetchData";
import Layout from "components/Layout";
import User from "components/User";
import Error from "components/Error";

export default function Home() {
  const getUsers = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(`/api/users`, getUsers);

  return (
    <Layout>
      <section className={styles.container}>
        {error && <Error message={"An error occured whiles fetching data"} />}

        <div className={`${styles.users_wrapper}`}>
          {data?.map((user, index: number) => (
            <User user={user} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
