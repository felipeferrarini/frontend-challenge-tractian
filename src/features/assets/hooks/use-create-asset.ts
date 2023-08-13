import { validations } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StatusEnum } from '../entities';
import { CreateAssetDto, createAsset } from '../services';

const schema = (t: TFunction) =>
  validations(t).Object<CreateAssetDto>({
    model: validations(t).String(),
    name: validations(t).String(),
    maxTemp: validations(t).NullableNumber(),
    power: validations(t).NullableNumber(),
    rpm: validations(t).NullableNumber(),
    status: validations(t).Enum(Object.values(StatusEnum)),
    unitId: validations(t).Number(),
    assignedUserIds: validations(t).NumberArray(),
    companyId: validations(t).Number()
  });

export const useCreateAsset = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('createAsset');
  const queryClient = useQueryClient();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema(t))
  });

  const { mutate, ...state } = useMutation(createAsset, {
    onSuccess: () => {
      navigate(`/assets`);
      queryClient.invalidateQueries(['list-assets']);
    }
  });

  return {
    handleSubmit: handleSubmit(data => mutate(data)),
    control,
    ...state
  };
};
