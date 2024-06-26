import { useMutation } from '@tanstack/react-query';

import {
  ManifestUploadRequestDto,
  ManifestUploadResponseDto,
} from './client/data-contracts';
import { MutationOptions } from './types';
import { useApi } from './use-api';

export const useUploadManifest = (
  options: MutationOptions<
    ManifestUploadResponseDto,
    ManifestUploadRequestDto
  > = {}
) => {
  const api = useApi();

  return useMutation({
    mutationFn: (data: ManifestUploadRequestDto) =>
      api.manifestControllerUploadManifest(data),
    ...options,
  });
};
