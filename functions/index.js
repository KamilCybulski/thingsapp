const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const createUser = user => {
  const { phoneNumber, uid } = user;

  return admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set({
      phoneNumber,
      ownStorages: [],
      accessibleStorages: [],
    });
};

const createStorage = async (data, context) => {
  // const { uid } = context.auth;
  const uid = 'zenon';

  const storageRef = await admin
    .firestore()
    .collection('storages')
    .add({
      owner: uid,
      participants: [],
      name: data,
      items: [],
    });

  await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .update(
      'ownStorages',
      admin.firestore.FieldValue.arrayUnion(storageRef.id),
    );

  const result = await storageRef.get();
  return result.data();
};

exports.createUser = functions.auth.user().onCreate(createUser);
exports.createStorage = functions.https.onCall(createStorage);
