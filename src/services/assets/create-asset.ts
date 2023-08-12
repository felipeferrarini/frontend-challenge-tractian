import { httpClient } from '@/config/libs';
import { IAsset, IAssetSpecifications, StatusEnum } from '@/interfaces';

export interface CreateAssetDto {
  model: string;
  name: string;
  specifications: IAssetSpecifications;
  status: StatusEnum;
  unitId: number;
  assignedUserIds: number[];
  companyId: number;
}

export const createAsset = async (payload: CreateAssetDto): Promise<IAsset> => {
  const { data } = await httpClient.post<IAsset>('/assets', payload);
  return data;
};
