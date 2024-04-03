import express from "express";

const app = express();

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port:", port);
});
