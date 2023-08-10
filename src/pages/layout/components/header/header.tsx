import { useIsMobile } from '@/hooks';
import { useDrawerStore } from '@/store';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Typography } from 'antd';
import { LanguageSwitch } from './language-switch';

export const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  const onOpen = useDrawerStore(store => store.onOpen);

  return (
    <Layout.Header className="bg-primary-500 px-6">
      <div className="inline-flex w-full justify-between">
        <Space>
          {isMobile && (
            <Button type="primary" onClick={onOpen} icon={<MenuOutlined />} />
          )}

          <Typography.Title level={4} className="!text-white">
            TRACTIAN
          </Typography.Title>
        </Space>
        <Space>
          <LanguageSwitch />
        </Space>
      </div>
    </Layout.Header>
  );
};
