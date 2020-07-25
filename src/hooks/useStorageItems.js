import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsService } from '../services';
import { addItems } from '../store/items';

/**
 *
 * @param {string} storageId Id of a storage. Hook will fetch and return list of items from this storage only.
 * @param {object} options Hook options
 * @param {boolean} options.allowRefetch If set to true, hook will refetch data, even if it has already been
 * fetched before. Should be set to false if you dont expect data to change over time to prevent unnecessary queries.
 */
const useStorageItems = (storageId, options = {}) => {
  const dispatch = useDispatch();
  const { items, itemsLoaded } = useSelector(state => {
    const { own, accessible } = state.storages;
    const storage = own.data[storageId] || accessible.data[storageId];
    const itemsLoaded = state.storages.loadedItems.includes(storageId);

    if (!storage) {
      return { items: null, itemsLoaded };
    }

    const itemsIds = storage.items;
    if (!itemsIds) {
      return { items: null, itemsLoaded };
    }

    const items = itemsIds.map(id => state.items.data[id]);

    return { items, itemsLoaded };
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!itemsLoaded || options.allowRefetch) {
      setIsLoading(true);

      itemsService
        .getItemsFromStorage(storageId)
        .then(result => dispatch(addItems(result, storageId)))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageId]);

  return { items, error, isLoading };
};

export default useStorageItems;
