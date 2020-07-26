import functions from '@react-native-firebase/functions';

const itemsService = {
  getItemsFromStorage: async storageId => {
    const result = await functions().httpsCallable('getStorageItems')(
      storageId,
    );
    return result.data;
  },

  addItem: (storageId, item) =>
    functions().httpsCallable('addItem')({ storageId, item }),
};

export default itemsService;
