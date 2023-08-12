import { StatusEnum } from '@/interfaces';

export const mapStatusToColor = (status: string) => {
  const map: Record<StatusEnum, string> = {
    inAlert: 'warning',
    inOperation: 'success',
    inDowntime: 'error',
    plannedStop: 'default',
    unplannedStop: 'error'
  };

  return map[status as StatusEnum];
};
