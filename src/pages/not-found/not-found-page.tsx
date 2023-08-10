import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('notFound');

  return (
    <div className="flex flex-1 h-full justify-center flex-col gap-6 text-center">
      <Typography.Title level={2}>{t('title')}</Typography.Title>
      <Typography.Text>{t('body')}</Typography.Text>
    </div>
  );
};
