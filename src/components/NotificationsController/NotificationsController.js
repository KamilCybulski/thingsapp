import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Text } from '..';
import { removeNotification } from '../../store/notifications';
import AddIcon from '../../assets/icons/add--white.svg';

const NotificationsContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;

const NotificationWrapper = styled.View`
  align-items: center;
  background-color: ${({ type }) => (type === 'Error' ? '#e22a5d' : '#25ce6d')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 6px 5px 6px 15px;
`;

const CloseButton = styled.TouchableOpacity`
  transform: rotate(45deg);
`;

const NotificationsController = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector(state => ({
    notifications: state.notifications,
  }));

  if (!notifications) {
    return null;
  }

  return (
    <NotificationsContainer>
      {notifications.map(notification => (
        <NotificationWrapper key={notification.id} type={notification.type}>
          <Text color="#fff">
            {notification.type}: {notification.message}
          </Text>
          <CloseButton
            onPress={() => dispatch(removeNotification(notification.id))}
          >
            <AddIcon width={30} height={30} fill="#fff" />
          </CloseButton>
        </NotificationWrapper>
      ))}
    </NotificationsContainer>
  );
};

export default NotificationsController;
