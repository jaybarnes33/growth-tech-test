// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../config/db";
import User from "../../models/User";
import Post from "../../models/Post";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      const keyword = req.query.keyword;
      let users = await User.find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { username: { $regex: keyword, $options: "i" } },
          { "company.name": { $regex: keyword, $options: "i" } },
          { "address.city": { $regex: keyword, $options: "i" } },
        ],
      });

      let obj = {};

      users = users.map((user) => {
        obj["type"] = "user";

        return { ...user._doc, ...obj };
      });

      let posts = await Post.find({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { body: { $regex: keyword, $options: "i" } },
        ],
      });

      posts = posts.map((post) => {
        obj["type"] = "post";
        users.forEach((user) => {
          if (user.id === post.userId) {
            obj["author"] = user.name;
          }
        });

        return { ...post._doc, ...obj };
      });

      res.status(200).json([...users, ...posts]);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Something went wrong");
    }
  }
};
