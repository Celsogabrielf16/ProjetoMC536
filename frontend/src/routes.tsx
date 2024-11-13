import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const ROUTES: RouteObject[] = [
  {
    path: '/',
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
];

export const router = createBrowserRouter(ROUTES);
