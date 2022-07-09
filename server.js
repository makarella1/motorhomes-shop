import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import motorhomesRouter from './routes/motorhomes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/assets'));

app.use('/api/motorhomes', motorhomesRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `We're doing fine on port ${PORT}, boss! Now let's change the world :)`
      )
    )
  );
