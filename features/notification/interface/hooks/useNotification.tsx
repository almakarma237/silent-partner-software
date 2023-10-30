import { NotificationContext } from '@/features/notification/application/notificationContexts/notificationContext';
import { useContext } from 'react';

function useNotification() {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error('useNotification must be used within NotificationContext');
  }
  return context;
}

export default useNotification;
