import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props<T> = {
  data: T;
  viewHref?: string;
  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;
};

export const TableActions = <T,>({
  data,
  viewHref,
  onDelete,
  onEdit
}: Props<T>): JSX.Element => {
  const { t } = useTranslation('common');

  const items = useMemo(() => {
    return [
      {
        key: 'edit',
        label: t('dictionary.edit'),
        icon: <EditOutlined />,
        onClick: () => onEdit?.(data),
        disabled: !onEdit
      },
      {
        key: 'delete',
        label: t('dictionary.delete'),
        icon: <DeleteOutlined />,
        onClick: () => onDelete?.(data),
        danger: true,
        disabled: !onDelete
      }
    ].filter(item => !item.disabled);
  }, [data, onDelete, onEdit, t]);

  return (
    <Space>
      {viewHref && (
        <Tooltip title={t('dictionary.view')}>
          <Link to={viewHref}>
            <Button icon={<EyeOutlined />} aria-label={t('dictionary.view')} />
          </Link>
        </Tooltip>
      )}
      <Dropdown trigger={['click']} menu={{ items }} placement="bottom" arrow>
        <Button icon={<MoreOutlined />}></Button>
      </Dropdown>
    </Space>
  );
};
