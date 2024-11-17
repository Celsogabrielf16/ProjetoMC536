import { createBrowserRouter, RouteObject } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SubmitProject from './pages/SubmitProject';

const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: LandingPage,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/sign-in',
    Component: SignIn,
  },
  {
    path: '/sign-up',
    Component: SignUp,
  },
  {
    path: '/submit-project',
    Component: SubmitProject,
  },
];

export const router = createBrowserRouter(ROUTES);
