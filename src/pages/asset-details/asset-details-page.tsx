import { PageHeader } from '@/components/layout';
import { useGetAsset } from '@/services/assets';
import { Space } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteAsset } from '../list-assets/hooks';
import {
  DetailsCard,
  LoadingState,
  NotFoundState,
  PageActions,
  StatusCard
} from './components';

export const Component = (): JSX.Element => {
  const { id = '0' } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetAsset(Number(id));
  const { deleteModal, onDelete } = useDeleteAsset({
    onSuccess: () => navigate('/assets')
  });

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data) {
    return <NotFoundState />;
  }

  return (
    <Space direction="vertical" className="w-full" size={24}>
      <PageHeader
        title={data.name}
        actions={<PageActions onDelete={() => onDelete(data)} />}
        backButtonLink="/assets"
        hideDivider
      />

      <div className="flex flex-col items-start gap-4 md:flex-row">
        <DetailsCard asset={data} />
        <StatusCard asset={data} />
      </div>
      {deleteModal}
    </Space>
  );
};
