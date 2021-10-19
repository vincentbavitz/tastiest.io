import { LoadingContext } from 'contexts/loader';
import { useContext } from 'react';

export function usePageLoader() {
  return useContext(LoadingContext);
}
