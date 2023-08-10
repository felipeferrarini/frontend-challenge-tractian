import { ConfigProvider as ThemeProvider } from 'antd';
import type { PropsWithChildren } from 'react';
import { theme } from './theme';

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
