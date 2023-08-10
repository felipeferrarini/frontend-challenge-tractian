import { Card, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navbar } from './components';

export const LayoutPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header />
        <Navbar />
        <Layout.Content style={{ padding: '24px 24px 0', display: 'flex' }}>
          <Card
            style={{ flex: 1 }}
            bodyStyle={{
              height: '100%'
            }}
          >
            <Outlet />
          </Card>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
