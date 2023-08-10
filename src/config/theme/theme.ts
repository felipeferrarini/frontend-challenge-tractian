import '@fontsource-variable/inter';
import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  components: {
    Typography: {
      titleMarginBottom: 0
    }
  },
  token: {
    fontSize: 16,
    colorPrimary: '#1D4ED8',
    fontFamily: 'Inter Variable, sans-serif',
    borderRadius: 8
  }
};
