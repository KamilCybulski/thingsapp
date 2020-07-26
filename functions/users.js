const admin = require('firebase-admin');

const storages = require('./storages');

const createUser = async user => {
  const { phoneNumber, uid } = user;

  await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set({
      phoneNumber,
      storages: [],
    });

  await storages.createStorage('My storage', uid);
};

const getUser = userId =>
  admin
    .firestore()
    .collection('users')
    .doc(userId)
    .get()
    .then(doc => doc.data());

module.exports = { createUser, getUser };
