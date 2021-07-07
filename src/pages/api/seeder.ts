// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

import path from "path";
import dbConnect from "../../config/db";
import User from "../../models/User";
import Post from "../../models/Post";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      await User.deleteMany();
      await Post.deleteMany();
      const dataDir = path.join(process.cwd(), "/src/data");

      const usersRead = fs.readFile(path.join(dataDir, "users.json"), "utf-8");
      const postsRead = fs.readFile(path.join(dataDir, "posts.json"), "utf-8");
      let [users, posts] = await Promise.all([usersRead, postsRead]);

      [users, posts] = [JSON.parse(users), JSON.parse(posts)];

      await User.insertMany(users);
      await Post.insertMany(posts);
      res.status(200).json({ users, posts });
    } catch (error) {
      console.log(error);
      return res.status(500).json("Something went wrong");
    }
  }
};
