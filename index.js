import dotenv from 'dotenv';
import express from 'express';
import open from 'open';
import morgan from 'morgan';
import cors from 'cors';
import queryString from 'querystring';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/authorize', async (req, res) => {
  await open('');
  res.send('');
});

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
