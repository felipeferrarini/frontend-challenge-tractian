import { Card, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navbar } from './components';

export const LayoutPage = () => {
  return (
    <Layout className="min-h-screen">
      <Layout>
        <Header />
        <Navbar />
        <Layout.Content className="p-6 pb-0 flex">
          <Card
            style={{ flex: 1 }}
            className="flex-1"
            bodyStyle={{ height: '100%' }}
          >
            <Outlet />
          </Card>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
