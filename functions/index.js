const functions = require('firebase-functions');
const admin = require('firebase-admin');

const storages = require('./storages');
const users = require('./users');
const items = require('./items');

admin.initializeApp();

// User
exports.createUser = functions.auth.user().onCreate(users.createUser);
exports.getUser = functions.https.onCall((data, context) =>
  users.getUser(context.auth.uid),
);

// Storages
exports.createStorage = functions.https.onCall((data, context) =>
  storages.createStorage(data, context.auth.uid),
);
exports.getStorages = functions.https.onCall((data, context) =>
  storages.getStorages(context.auth.uid),
);

// Items
exports.addItem = functions.https.onCall((data, context) =>
  items.addItem(data.storageId, data.item, context.auth.uid),
);
exports.getStorageItems = functions.https.onCall((data, context) =>
  items.getStorageItems(data, context.auth.uid),
);
