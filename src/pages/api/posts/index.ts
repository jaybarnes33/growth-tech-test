import dbConnect from "config/db";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/Post";
import User from "../../../models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { limit = 10, page = 1 } = req.query as Record<string, string>;
    const [parsedLimit, parsedPage] = [Number(limit), Number(page)];
    try {
      dbConnect();

      const users = await User.find();

      let posts = await Post.find()
        .skip((parsedPage - 1) * parsedLimit)
        .limit(parsedLimit);

      // Find authors
      posts = posts.map((post) => {
        let obj = {};
        users.forEach(async (user) => {
          if (post.userId === user.id) {
            obj["author"] = user.name;
          }
        });
        return { ...post._doc, ...obj };
      });

      const allPosts = await Post.find().select("_id");
      const lastPost = posts[posts.length - 1];

      const indexOfCursor = allPosts.findIndex(
        (value) => value._id?.toString() === lastPost._id?.toString()
      );

      const hasMore = indexOfCursor + 1 < allPosts.length;
      res.status(200).json({ posts, hasMore });
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};
