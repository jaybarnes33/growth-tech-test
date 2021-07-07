//@ts-nocheck
import Icon from "./Icon";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-brand">
            <Link href="/">
              <a>
                <Icon name="bi bi-hash" />
              </a>
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
              <input type="search" name="" id="" placeholder="Search " />
              <button>
                <Icon name="bi bi-search" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>
        {`
          header {
            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
          }
          nav {
            padding: 1rem 2rem;
            display: flex;
            font-size: 1.5rem;
            justify-content: space-between;
          }

          .nav-links {
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(3, 60px);
            font-size: 1.2rem;
            gap: 2rem;
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
          }
        `}
      </style>
    </>
  );
};

export default Header;
