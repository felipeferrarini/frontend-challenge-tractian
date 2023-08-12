import { PageHeader } from '@/components/layout';
import { useListAssets } from '@/services/assets';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ListAssetsTable } from './components/list-assets-table';
import { useDeleteAsset } from './hooks/use-delete-asset';

export const Component = () => {
  const { t } = useTranslation('listAssets');
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useListAssets(search);
  const { deleteModal, onDelete } = useDeleteAsset();

  return (
    <Space direction="vertical" className="w-full" size={24}>
      <PageHeader
        title={t('title')}
        actions={
          <Link to="create">
            <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
              {t('add-asset')}
            </Button>
          </Link>
        }
      />

      <Input.Search
        placeholder={t('search-for')}
        size="large"
        allowClear
        enterButton
        className="max-w-md"
        onSearch={setSearch}
        loading={isLoading}
      />

      <ListAssetsTable
        assets={data}
        isLoading={isLoading}
        onDelete={onDelete}
      />

      {deleteModal}
    </Space>
  );
};
