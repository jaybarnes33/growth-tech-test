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
        </nav>
      </header>

      <style jsx>
        {`
          header {
            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
          }
          nav {
            display: flex;
            padding: 1rem 2rem;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
          }

          .nav-links {
            list-style-type: none;
            display: flex;
            margin-left: auto;
            gap: 2rem;
            font-size: 1.2rem;
          }

          .nav-brand {
            font-size: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Header;
