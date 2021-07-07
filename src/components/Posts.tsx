import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import Post from "./Post";

const Posts = ({ data }) => {
  return (
    <div className={styles.posts_wrapper}>
      {data?.posts?.map((post, index: number) => (
        <Post data={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
