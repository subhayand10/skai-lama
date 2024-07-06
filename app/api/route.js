import { YoutubeTranscript } from "youtube-transcript";

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

    const transcript = await YoutubeTranscript.fetchTranscript(url);
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
