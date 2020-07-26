const functions = require('firebase-functions');
const admin = require('firebase-admin');

const getStorageRef = async (storageId, userId) => {
  const storageRef = admin
    .firestore()
    .collection('storages')
    .doc(storageId);

  const storageSnapshot = await storageRef.get();
  if (!storageSnapshot.exists) {
    throw new functions.https.HttpsError(
      'not-found',
      'Storage with provided ID does not exist',
    );
  }

  const storageData = storageSnapshot.data();
  if (storageData.owner !== userId) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Does not have required permissions',
    );
  }

  return storageRef;
};

const addItem = async (storageId, item, userId) => {
  const storageRef = await getStorageRef(storageId, userId);
  const itemRef = await storageRef.collection('items').add(item);
  const result = await itemRef.get();
  return { id: itemRef.id, ...result.data() };
};

const getStorageItems = async (storageId, userId) => {
  const storageRef = await getStorageRef(storageId, userId);
  const itemsSnapshot = await storageRef.collection('items').get();

  let result = {};
  itemsSnapshot.forEach(doc => {
    result[doc.id] = { id: doc.id, ...doc.data() };
  });

  return result;
};

module.exports = { addItem, getStorageItems };
