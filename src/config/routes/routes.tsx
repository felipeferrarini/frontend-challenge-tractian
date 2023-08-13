import { assetsRoutes } from '@/features/assets/routes';
import { ErrorPage, LayoutPage } from '@/features/common/containers';
import { companiesRoutes } from '@/features/companies/routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      ...assetsRoutes,
      ...companiesRoutes,
      {
        path: '*',
        lazy: () => import('@/features/common/containers/not-found-page')
      }
    ]
  }
]);
