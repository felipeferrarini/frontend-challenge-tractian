import { useConfirmationModal } from '@/hooks';
import { IAsset } from '@/interfaces';
import { deleteAsset } from '@/services/assets';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const useDeleteAsset = () => {
  const { t } = useTranslation('listAssets');
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteAsset, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-assets']);
    }
  });

  const { modal: deleteModal, openModal } = useConfirmationModal<IAsset>({
    title: t('delete-confirmation.title'),
    description: t('delete-confirmation.description'),
    onConfirm: asset => mutateAsync(asset.id)
  });

  return {
    deleteModal,
    onDelete: openModal
  };
};
