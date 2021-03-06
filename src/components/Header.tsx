//@ts-nocheck
import Icon from "./Icon";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [keyword, setKeyWord] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/search/${keyword}`);
  };
  return (
    <>
      <header>
        <nav>
          <div className="nav-brand">
            <Link href="/">
              <a aria-label="logo">#</a>
            </Link>
          </div>

          <div className="nav-items">
            <ul className="nav-links">
              <li>
                <Link href="/">Users</Link>{" "}
              </li>
              <li>
                <Link href="/companies">Companies</Link>{" "}
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
            </ul>
            <div className="search">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  value={keyword}
                  onChange={(e) => setKeyWord(e.target.value)}
                  name="key"
                  id=""
                  placeholder="Search "
                />
                <button aria-label="search" name="search" type="submit">
                  <Icon name="bi bi-search" />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>
        {`
          header {
            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
            background-color: #f4f4f4;
            position: relative;
            z-index: 1;
          }
          nav {
            padding: 1rem 2rem;
            display: flex;
            font-size: 1.5rem;
            justify-content: space-between;
            backround-color: #f4f4f4;
          }

          .nav-links {
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(3, 60px);
            font-size: 1.2rem;
            gap: 2rem;
            padding: 1rem;
            place-items: center;
          }

          .nav-items {
            display: flex;
            flex-wrap: wrap;
          }
          .nav-brand {
            font-size: 2rem;
          }

          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .search input {
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 3px 0 0 3px;
            height: 40px;
          }

          .search button {
            text-align: center;
            margin-left: -5px;
            border: none;

            padding: 13px 1rem;
            border-radius: 0 3px 3px 0;
            background-color: #52006a;
            color: white;
          }

          .search input:focus {
            box-shadow: 0 0px 3px 0 #52006a;
          }
        `}
      </style>
    </>
  );
};

export default Header;
