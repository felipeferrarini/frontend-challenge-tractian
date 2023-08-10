import { Typography } from 'antd';
import { Providers } from './providers';
import './theme/globals.css';

export const App = () => {
  return (
    <Providers>
      <Typography.Title>Hello world</Typography.Title>
    </Providers>
  );
};
