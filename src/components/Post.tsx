const Post = ({ data }) => {
  return (
    <>
      <div className="post_wrapper">
        <p className="title">{data.title}</p>
        <small className="author">{data.author}</small>
        <p className="body">{data.body}</p>
      </div>
      <style jsx>{`
        .title {
          font-size: 2rem;
          font-weight: bold;
          font-family: "Merriweather", serif;
          font-style: italic;
        }

        .post_wrapper {
          margin: 1rem;
          box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
          padding: 50px 20px;
          width: 80%;
          position: relative;
          background-color: #f4f4f4;
          background-image: url("/pattern2.jpg");
          background-blend-mode: overlay;

          background-size: contain;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
};

export default Post;
