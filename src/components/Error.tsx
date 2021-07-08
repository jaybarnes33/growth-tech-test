import React from "react";

const Error = ({ message }) => {
  return (
    <>
      <div>{message}</div>
      <style jsx>{`
        div {
          background-color: #f4f4f4;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default Error;
