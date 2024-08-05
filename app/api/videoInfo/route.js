import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export  async function GET(req, res) {
  try {
    const videoInfo = await prisma.videos.findMany();
    return new Response(JSON.stringify(videoInfo), {
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
