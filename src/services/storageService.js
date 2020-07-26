import functions from '@react-native-firebase/functions';

const storageService = {
  getOwnStorages: () => functions().httpsCallable('getStorages')(),
};

export default storageService;
