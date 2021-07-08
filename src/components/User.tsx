//@ts-nocheck
import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const User = ({ user }) => {
  return (
    <>
      <div className="user-wrapper">
        <div className="intro">
          <p className="name"> {user.name}</p>
          <small className="company">{user.company.name}</small>
        </div>
        <div className="address">
          <div>
            <ul>
              <li>{`${user.address.suite} ${user.address.street}`}</li>
              <li>{`${user.address.city} ${user.address.zipcode}`}</li>
            </ul>
            <div className="company">
              <small></small>
              <p className="company-phrase">{user.company.catchPhrase}</p>
              <small>
                <p className="company-bs">{user.company.bs}</p>
              </small>
            </div>
          </div>

          <div className="icons">
            <Icon name="bi bi-globe" text={user.website} />
            <Icon name="bi bi-phone" text={user.phone} />

            <Icon name="bi bi-envelope" text={user.email.toLowerCase()} />

            <Icon
              name="bi bi-geo-alt"
              text={user.address.geo.lng + " , " + user.address.geo.lat}
            />
          </div>
        </div>
        <div
          className="arrow"
          title={`Read ${user.name.split(" ")[0]}'s posts`}
        >
          <Link href={`/posts/user/${user.id}`}>
            <a>
              {" "}
              <Icon name="bi bi-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .name {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Merriweather", serif;
          font-style: italic;
        }

        .user-wrapper {
          margin-top: 1rem;
          box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
          padding: 10px;
          width: 95%;
          position: relative;
          background-color: #f4f4f4;
          background-image: url("/pattern2.jpg");
          background-blend-mode: overlay;

          background-size: cover;
          background-repeat: no-repeat;
          height: 13.5rem;
        }

        .arrow {
          position: absolute;
          right: 1rem;
          bottom: 0.7rem;
          font-size: 1.5rem;
        }
        .icons {
          margin-top: -2rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .address {
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 10px;
          font-size: 0.8rem;
        }
        .address,
        .company {
          margin-top: 0.9rem;
        }

        .address ul {
          padding: 0;
          list-style-type: none;
        }

        .company-bs {
          position: absolute;
          bottom: 1rem;
          width: 100%;
          left: 0;
          text-align: center;
          font-style: italic;
        }

        @media screen and (min-width: 1300px) {
          .name {
            font-size: 2rem;
          }
          .user-wrapper {
            width: 330px;

            padding: 30px 30px 50px 30px;
            margin: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default User;
