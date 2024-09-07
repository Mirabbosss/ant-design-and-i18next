import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from '../layouts/dashboard';
import { Profile } from '../layouts/profile';
import { Home, Products, Users } from '../pages';

export const Router = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/users', element: <Users /> }
    ]
  },
  {
    path: '/profile',
    element: <Profile />
  }
]

export const appRouter = createBrowserRouter(Router);