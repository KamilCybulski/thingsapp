import functions from '@react-native-firebase/functions';

const userService = {
  getUser: id => functions().httpsCallable('getUser')(id),
};

export default userService;
