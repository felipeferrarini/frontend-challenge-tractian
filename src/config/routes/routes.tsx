import { LayoutPage, NotFoundPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [{ path: '*', element: <NotFoundPage /> }]
  }
]);
