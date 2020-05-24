import firestore from '@react-native-firebase/firestore';

const userService = {
  getUser(id) {
    return firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(document => document.data());
  },
};

export default userService;
