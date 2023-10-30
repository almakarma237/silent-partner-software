import React from 'react';
import { NotificationType } from '@/features/notification/domain/NotificationTypes';
interface INotificationFeature {
  type: NotificationType;
  children: React.ReactNode;
}

const NotificationFeature: React.FC<INotificationFeature> = ({ type, children }) => {
  return <></>;
};

export { NotificationFeature };
export type { INotificationFeature };
