import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const storageService = {
  async getOwnStorages() {
    const { uid } = auth().currentUser;

    return firestore()
      .collection('storages')
      .where('owner', '==', uid)
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

export default storageService;
