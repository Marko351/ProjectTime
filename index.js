import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/login', (req, res) => {
  console.log(req);
  console.log(res);
});

const PORT = 5500;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App is up and running on port: ${PORT}`);
});
