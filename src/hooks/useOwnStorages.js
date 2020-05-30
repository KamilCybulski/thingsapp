import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storageService } from '../services';
import { setOwnStorages } from '../store/storages';

/**
 *
 * @param {object} options Hook options
 * @param {boolean} options.allowRefetch If set tu true, will refetch data on component mount, even
 * if the data was loaded before.
 */
const useOwnStorages = (options = {}) => {
  const dispatch = useDispatch();
  const { ownStorages } = useSelector(state => {
    const { own } = state.storages;

    return { ownStorages: own.data };
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    storageService
      .getOwnStorages()
      .then(result => dispatch(setOwnStorages(result)))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ownStoragesList = useMemo(() => Object.values(ownStorages), [
    ownStorages,
  ]);

  return { ownStorages, ownStoragesList, isLoading, error };
};

export default useOwnStorages;
