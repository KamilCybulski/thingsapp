import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';

import { Text, Button } from '..';
import { removeNotification } from '../../store/notifications';

const NotificationsController = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector(state => ({
    notifications: state.notifications,
  }));

  if (!notifications) {
    return null;
  }

  return (
    <>
      {notifications &&
        notifications.map((notification, i) => (
          <View key={i}>
            <Text>{notification.type}:</Text>
            <Text>{notification.message}</Text>
            <Button
              onPress={() => dispatch(removeNotification(notification.id))}
            >
              Delete
            </Button>
          </View>
        ))}
    </>
  );
};

export default NotificationsController;
