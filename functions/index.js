const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUser = functions.auth.user().onCreate(user => {
  const { phoneNumber, uid } = user;

  return admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set({
      phoneNumber,
      fridges: [],
    });
});
