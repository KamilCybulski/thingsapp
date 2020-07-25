import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';

const itemsService = {
  getItemsFromStorage(storageId) {
    return firestore()
      .collection('storages')
      .doc(storageId)
      .collection('items')
      .get()
      .then(querySnapshot => {
        let result = {};
        querySnapshot.forEach(doc => {
          result[doc.id] = { ...doc.data(), id: doc.id };
        });
        return result;
      });
  },

  addItem(storageId, item) {
    return functions().httpsCallable('addItem')({ storageId, item });
  },
};

export default itemsService;
