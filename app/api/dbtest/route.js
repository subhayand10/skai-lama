import pool from "@/lib/db";


export  async function GET(req, res) {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
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
