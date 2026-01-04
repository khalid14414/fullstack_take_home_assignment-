import app from "./app.js";
import prisma from "../prisma/client.js";

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
    app.listen(PORT, () => console.log(`API running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  }
}

start();
