import React from 'react';
import { INotification } from '../interfaces/utils';
import { SNotification } from '../styles/notification';

function Notification({ message, type }: INotification) {
  if (!message) return null;

  return (
    <SNotification $type={type}>
      <p>{message}</p>
    </SNotification>
  );
}

export default Notification;
