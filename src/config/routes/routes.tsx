import { ErrorPage } from '@/pages/error';
import { LayoutPage } from '@/pages/layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/assets',
        lazy: () => import('@/pages/list-assets')
      },
      {
        path: '*',
        lazy: () => import('@/pages/not-found')
      }
    ]
  }
]);
