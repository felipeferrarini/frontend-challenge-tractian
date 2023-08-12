import { Card, Layout, Spin } from 'antd';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header, Navbar } from './components';

export const LayoutPage = () => {
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <Layout className="min-h-screen">
      <Layout>
        <Header />
        <Navbar />
        <Layout.Content className="flex p-6 pb-0">
          <Card
            className="container mx-auto flex-1"
            bodyStyle={{ height: '100%' }}
          >
            <Spin spinning={isLoading}>
              <Outlet />
            </Spin>
          </Card>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
