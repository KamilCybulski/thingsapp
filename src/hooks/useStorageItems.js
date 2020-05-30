import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsService } from '../services';
import { addItems } from '../store/items';

const useStorageItems = storageId => {
  const dispatch = useDispatch();
  const items = useSelector(state => {
    const storage =
      state.storages.own[storageId] || state.storages.accessible[storageId];
    if (!storage) {
      return null;
    }

    const itemsIds = storage.items;
    if (!itemsIds) {
      return null;
    }

    return itemsIds.map(id => state.items.data[id]);
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    itemsService
      .getItemsFromStorage(storageId)
      .then(result => dispatch(addItems(result, storageId)))
      .catch(err => setError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { items, error, isLoading };
};

export default useStorageItems;
