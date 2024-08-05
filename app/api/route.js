import { YoutubeTranscript } from "youtube-transcript";
import { PrismaClient } from "@prisma/client";
import {  getVideoTitle } from "yt-get";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parse the request body to extract the URL
    const body = await req.json();
    const url = body.url;
    if (!url) {
      return new Response(JSON.stringify({ error: "URL not provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
      if (!prisma.videos) {
        throw new Error("Model 'videos' is not defined in the Prisma client.");
      }

     console.log(prisma)
    const videoTitle=await getVideoTitle(url);

    const newVideoTitle = await prisma.videos.create({
      data: {
        title: videoTitle,
        urls:[videoTitle,url]
      },
    });

    console.log("New Title:", newVideoTitle);

    const transcript = await YoutubeTranscript.fetchTranscript(url);
    console.log("TRanscript"+transcript)
    return new Response(JSON.stringify(transcript), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
