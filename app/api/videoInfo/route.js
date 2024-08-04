import pool from "@/lib/db";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export  async function GET(req, res) {
  try {
    // const users = await prisma.user.findMany();
    // console.log(typeof users);
    const { rows } = await pool.query("SELECT * FROM videos");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error executing query", error);
   return new Response(JSON.stringify({ error: "Something went wrong" }), {
     status: 500,
     headers: { "Content-Type": "application/json" },
   });
  }
}
