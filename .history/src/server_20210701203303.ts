import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello asd" });
});

app.listen(3333, () => console.log("Server is running"));