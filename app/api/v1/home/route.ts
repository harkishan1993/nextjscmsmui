import connectDB from "@/app/_lib/mongodb/connect";
import { NextApiRequest } from "next";

export const GET = async (req : NextApiRequest)=>{
   console.log(process.env.DB_CONNECT_STR)
  await connectDB()
  return new Response(`${process.env.DB_CONNECT_STR}`)
}