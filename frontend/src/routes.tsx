import { createBrowserRouter, RouteObject } from 'react-router-dom';

const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: () => <h1>Home</h1>,
  },
  {
    path: '/sign-in',
    Component: () => <h1>Login</h1>,
  },
  {
    path: '/sign-up',
    Component: () => <h1>Cadastro</h1>,
  },
];

export const router = createBrowserRouter(ROUTES);
