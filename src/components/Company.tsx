const Company = ({ data }) => {
  return (
    <>
      <div className="company_wrapper">
        <p className="name">{data.name}</p>
        <p className="catch_phrase">{data.catchPhrase}</p>
        <p className="bs">{data.bs}</p>
      </div>
      <style jsx>{`
        .company_wrapper {
          margin: 1rem;
          box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
          padding: 30px 30px 50px 30px;
          background-color: #f4f4f4;
          background-image: url("/pattern2.jpg");
          background-blend-mode: overlay;
          height: 7rem;
          background-size: contain;
          position: relative;
        }

        p {
          margin: 10px;
        }

        .name {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Merriweather", serif;
          font-style: italic;
        }

        .bs {
          position: absolute;
          bottom: 0.5rem;
          width: 100%;
          text-align: center;
          left: 0;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};

export default Company;
