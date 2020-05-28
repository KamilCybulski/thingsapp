import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storageService } from '../services';
import { setOwnStorages } from '../store/storages';

const useOwnStorages = () => {
  const dispatch = useDispatch();
  const ownStorages = useSelector(state => state.storages.own);
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

  return { ownStorages, isLoading, error };
};

export default useOwnStorages;