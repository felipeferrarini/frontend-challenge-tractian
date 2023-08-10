import { useIsMobile } from '@/hooks';
import { useTokens } from '@/hooks/use-tokens';
import { useDrawerStore } from '@/store';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Typography } from 'antd';
import { LanguageSwitch } from './language-switch';

export const Header = (): JSX.Element => {
  const { colorPrimary } = useTokens();
  const isMobile = useIsMobile();
  const onOpen = useDrawerStore(store => store.onOpen);

  return (
    <Layout.Header style={{ backgroundColor: colorPrimary, padding: '0 24px' }}>
      <div
        style={{
          width: '100%',
          display: 'inline-flex',
          justifyContent: 'space-between'
        }}
      >
        <Space>
          {isMobile && (
            <Button type="primary" onClick={onOpen} icon={<MenuOutlined />} />
          )}

          <Typography.Title level={4} style={{ color: 'white' }}>
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
