import { ErrorPage, LayoutPage } from '@/features/common/containers';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/assets',
        lazy: () => import('@/features/assets/containers/list-assets')
      },
      {
        path: '/assets/:id',
        lazy: () => import('@/features/assets/containers/asset-details')
      },
      {
        path: '*',
        lazy: () => import('@/features/common/containers/not-found-page')
      }
    ]
  }
]);
