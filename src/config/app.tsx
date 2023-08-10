import { RouterProvider } from 'react-router-dom';
import { setupI18n } from './i18n/i18n';
import { Providers } from './providers';
import { router } from './routes';
import './theme/globals.css';

setupI18n();

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
