import useSWR from "swr";

import Layout from "components/Layout";
import styles from "../../styles/Home.module.css";
import fetchData from "utils/fetchData";
import Company from "components/Company";
import Head from "next/head";
import Error from "components/Error";

const index = () => {
  const getCompanies = async (url: string) => await fetchData(url, "GET");
  const { data, error } = useSWR(`/api/companies`, getCompanies);

  return (
    <Layout>
      <Head>
        <title>Companies</title>
      </Head>
      <main className={styles.container}>
        {error && <Error message="Something went wrong" />}
        <div className={styles.companies_wrapper}>
          {data?.map((company, index: number) => (
            <Company data={company} />
          ))}
        </div>
      </main>{" "}
    </Layout>
  );
};

export default index;
