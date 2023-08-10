import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('notFound');

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
        textAlign: 'center'
      }}
    >
      <Typography.Title level={2}>{t('title')}</Typography.Title>
      <Typography.Text>{t('body')}</Typography.Text>
    </div>
  );
};
