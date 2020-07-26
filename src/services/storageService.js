import functions from '@react-native-firebase/functions';

const storageService = {
  getOwnStorages: async () => {
    const result = await functions().httpsCallable('getStorages')();
    return result.data;
  },
};

export default storageService;
