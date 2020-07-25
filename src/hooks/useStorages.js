import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storageService } from '../services';
import { setStorages } from '../store/storages';

const useStorages = () => {
  const dispatch = useDispatch();
  const storages = useSelector(state => state.storages.data);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    storageService
      .getOwnStorages()
      .then(result => dispatch(setStorages(result)))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    storages,
    storagesList: Object.values(storages),
    isLoading,
    error,
  };
};

export default useStorages;
