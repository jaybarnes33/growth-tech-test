import dbConnect from "config/db";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      const companies = await User.find().distinct("company");
      res.status(200).json(companies);
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};
