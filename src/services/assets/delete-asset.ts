import { httpClient } from '@/config/libs';
import { IAsset } from '@/interfaces';

export const deleteAsset = async (id: number): Promise<IAsset> => {
  const { data } = await httpClient.delete<IAsset>(`/assets/${id}`);

  return data;
};
