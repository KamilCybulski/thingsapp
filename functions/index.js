const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const createStorage = async (storageName, userId) => {
  const storageRef = await admin
    .firestore()
    .collection('storages')
    .add({
      owner: userId,
      participants: [],
      name: storageName,
      items: [],
    });

  await admin
    .firestore()
    .collection('users')
    .doc(userId)
    .update(
      'ownStorages',
      admin.firestore.FieldValue.arrayUnion(storageRef.id),
    );

  const result = await storageRef.get();
  return result.data();
};

const createUser = async user => {
  const { phoneNumber, uid } = user;

  await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set({
      phoneNumber,
      ownStorages: [],
      accessibleStorages: [],
    });

  await createStorage('My storage', uid);
};

exports.createUser = functions.auth.user().onCreate(createUser);
exports.createStorage = functions.https.onCall((data, context) =>
  createStorage(data, context.auth.uid),
);
