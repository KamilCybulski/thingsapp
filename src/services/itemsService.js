import functions from '@react-native-firebase/functions';

const itemsService = {
  getItemsFromStorage: storageId =>
    functions().httpsCallable('getStorageItems')(storageId),

  addItem: (storageId, item) =>
    functions().httpsCallable('addItem')({ storageId, item }),
};

export default itemsService;
