import Dashboard from '../Dashboard/Dashboard';
import Goals from '../Goals/Goals';
import Leaderboard from '../Leaderboard/Leaderboard';
import Projects from '../Projects/Projects';

const routes = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    component: Dashboard,
  },
  {
    name: 'Goals',
    path: 'goals',
    component: Goals,
  },
  {
    name: 'Leaderboard',
    path: 'leaderboard',
    component: Leaderboard,
  },
  {
    name: 'Projects',
    path: 'projects',
    component: Projects,
  },
];

export default routes;
