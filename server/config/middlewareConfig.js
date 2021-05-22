import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
};
