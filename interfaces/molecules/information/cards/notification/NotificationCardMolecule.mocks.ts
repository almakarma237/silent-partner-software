import { NotificationType } from '@/features/notification/domain/NotificationTypes';
import { INotificationCardMolecule } from './NotificationCardMolecule';

const base: INotificationCardMolecule = {
  type:NotificationType.ADD,
  children: 'book'
};

export const mockNotificationProps = {
  base,
};