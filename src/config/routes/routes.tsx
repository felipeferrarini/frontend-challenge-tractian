import { assetsRoutes } from '@/features/assets/routes';
import { ErrorPage, LayoutPage } from '@/features/common/containers';
import { companiesRoutes } from '@/features/companies/routes';
import { unitsRoutes } from '@/features/units/routes';
import { usersRoutes } from '@/features/users/routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      ...assetsRoutes,
      ...companiesRoutes,
      ...unitsRoutes,
      ...usersRoutes,
      {
        path: '*',
        lazy: () => import('@/features/common/containers/not-found-page')
      }
    ]
  }
]);
