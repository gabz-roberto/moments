import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://gabz_roberto:Gabriel10@cluster0.1kgbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Servidor executando na porta: ${PORT}`)))
  .catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false);
