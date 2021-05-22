import { AuthenticationRoutes } from '../modules/Authentication/index.js';

export default (app) => {
  app.use('/authentication', AuthenticationRoutes);
};
