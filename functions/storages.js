const admin = require('firebase-admin');

const createStorage = async (storageName, userId) => {
  const newStorageData = {
    owner: userId,
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
    .update('storages', admin.firestore.FieldValue.arrayUnion(storageRef.id));

  const result = await storageRef.get();
  return result.data();
};

const getStorages = userId =>
  admin
    .firestore()
    .collection('storages')
    .where('owner', '==', userId)
    .get()
    .then(querySnapshot => {
      let result = {};
      querySnapshot.forEach(doc => {
        result[doc.id] = { ...doc.data(), id: doc.id };
      });
      return result;
    });

module.exports = { getStorages, createStorage };
