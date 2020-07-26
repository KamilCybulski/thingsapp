import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsService } from '../services';
import { addItems } from '../store/items';

const useStorageItems = storageId => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.data);
  const storage = useSelector(state => state.storages.data[storageId]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    itemsService
      .getItemsFromStorage(storageId)
      .then(result => dispatch(addItems(result, storageId)))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!storage || !storage.items) {
    return { items: null };
  }

  return { items: Object.values(items), isLoading, error };
};

export default useStorageItems;
