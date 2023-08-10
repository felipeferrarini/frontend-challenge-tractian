import { Layout } from 'antd';

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      TRACTIAN ©{year} Created by Felipe Ferrarini
    </Layout.Footer>
  );
};
