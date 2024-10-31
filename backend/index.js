import express from "express";
import cors from "cors";

const app = express();
const PORT = 1010;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, (req, res) => {
  console.log(`app is listening on the port of ${PORT}`);
});
