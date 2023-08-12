import { Divider, Space, Typography } from 'antd';

type Props = {
  title: string;
  actions?: JSX.Element;
};

export const PageHeader = ({ title, actions }: Props): JSX.Element => {
  return (
    <Space direction="vertical" className="w-full">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <Typography.Title level={2} className="text-xl">
          {title}
        </Typography.Title>
        {actions}
      </div>
      <Divider className="my-0" />
    </Space>
  );
};
