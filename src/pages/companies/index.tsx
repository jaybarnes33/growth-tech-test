import useSWR from "swr";

import Layout from "components/Layout";
import styles from "../../styles/Home.module.css";
import fetchData from "utils/fetchData";
import Company from "components/Company";

const index = () => {
  const getCompanies = async (url: string) => await fetchData(url, "GET");
  const { data, error, isValidating } = useSWR(`/api/companies`, getCompanies);

  return (
    <Layout>
      <main className={styles.container}>
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
