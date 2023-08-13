import { Card, Skeleton, Space } from 'antd';

export const LoadingState = (): JSX.Element => {
  return (
    <Card className="w-full">
      <Space direction="vertical" className="w-full">
        <Skeleton active paragraph={false} />
        <Skeleton.Node active fullSize className="!w-full" />
      </Space>
    </Card>
  );
};
