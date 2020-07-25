import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { itemsService } from '../../services';
import { addItems } from '../../store/items';
import { SCREENS } from '../../screens';

export const useNewItemFormHandler = storageId => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async values => {
      setIsLoading(true);

      try {
        const result = await itemsService.addItem(storageId, values);
        dispatch(addItems(result, storageId));
        navigation.navigate(SCREENS.storage, { storageId });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [setError, setIsLoading, storageId, dispatch, navigation],
  );

  return { isLoading, error, handleSubmit };
};
