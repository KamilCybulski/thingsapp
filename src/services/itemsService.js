import firestore from '@react-native-firebase/firestore';

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
};

export default itemsService;
