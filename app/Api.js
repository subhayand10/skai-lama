import { GoogleGenerativeAI } from "@google/generative-ai";
//const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
const genAI = new GoogleGenerativeAI("AIzaSyD2qLer7ZCdHy2oIFPHVjhZ6HuvXrcWFCM");
async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([
    prompt,
  ]);
  console.log(result.response.text());
  return result.response.text();
}

export default run;

