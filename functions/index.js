const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const createStorage = async (storageName, userId) => {
  const newStorageData = {
    owner: userId,
    participants: [],
    name: storageName,
  };

  const storageRef = await admin
    .firestore()
    .collection('storages')
    .add(newStorageData);

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

const addItem = async (storageId, item, userId) => {
  console.log('STORAGE: ', storageId);
  console.log('ITEM: ', item);
  console.log('USER: ', userId);
  const storageRef = admin
    .firestore()
    .collection('storages')
    .doc(storageId);
  const storageSnapshot = await storageRef.get();

  if (!storageSnapshot.exists) {
    throw new functions.https.HttpsError('not-found', 'Storage does not exist');
  }

  const storage = storageSnapshot.data();

  console.log('STORAGE OWNER: ', storage.owner);
  console.log('FUCKING OWNS SHIT: ', storage.owner === userId);

  if (storage.owner !== userId && !storage.participants.includes(userId))
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Does not have required permissions',
    );

  return storageRef.collection('items').add(item);
};

exports.createUser = functions.auth.user().onCreate(createUser);
exports.createStorage = functions.https.onCall((data, context) =>
  createStorage(data, context.auth.uid),
);
exports.addItem = functions.https.onCall((data, context) =>
  addItem(data.storageId, data.item, context.auth.uid),
);
