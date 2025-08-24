import express from "express";
import { env } from "node:process";
import "dotenv/config"; // oneliner for configuration
import { closeDB, runDB } from "./db/database.js";

const app = express();
const port: number = Number(env.PORT) || 3000;
const address: string = "0.0.0.0"; // Required for Render

interface User {
  id: number;
  name: string;
  email: string;
}

app.get("/user", (request, response) => {
  const user: User = {
    id: 1,
    name: "David Karlsson",
    email: "david@example.com",
  };

  response.status(201).send(user);
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

// Start server on Port variable

async function startServer() {
  try {
    await runDB();
    app.listen(port, address, () => {
      console.log(`Listening to port ${port}`);
      console.log(`Start the app: http://localhost:${port}`);
    });
    process.on("SIGINT", async () => {
      console.log("Cleaning up...");
      await closeDB();
      process.exit(0);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
