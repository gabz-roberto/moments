import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor executando na porta: ${PORT}`);
  }
});
