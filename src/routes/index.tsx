import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Portfolio from '../pages/Portfolio';
import Katalog from '../pages/Katalog';
import Services from '../pages/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/katalog',
    element: <Katalog />,
  },
  {
    path: '/services',
    element: <Services />,
  },
]);
