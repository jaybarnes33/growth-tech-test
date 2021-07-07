const Icon = ({ name, text }) => {
  return (
    <>
      {" "}
      <div>
        <i className={name}></i>
        <span>{text}</span>
      </div>
      <style jsx>
        {`
          span {
            margin-left: 10px;
            font-size: 0.8rem;
          }
        `}
      </style>
    </>
  );
};

export default Icon;
