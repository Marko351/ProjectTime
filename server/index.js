import dotenv from 'dotenv';
dotenv.config({ path: `../.env.${process.env.APP_ENV}` });
import express from 'express';

import middlewareConfig from './config/middlewareConfig.js';
import routesConfig from './config/routesConfig.js';

console.log(process.env.WAKATIME_API_URL);

const app = express();

middlewareConfig(app);
routesConfig(app);

const PORT = 5500;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App is up and running on port: ${PORT}`);
});
