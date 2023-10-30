import {
  notificationInitialState,
  notificationReducer,
} from '@/features/notification/application//notificationContexts/reducers/notificationReducer';
import { NotificationCollection } from '@/features/notification/domain/NotificationCollection';
import { NotificationType } from '@/features/notification/domain/NotificationTypes';
import {
  INotificationCardMolecule,
  NotificationCardMolecule,
} from '@/interfaces/molecules/information/cards/notification/NotificationCardMolecule';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useCallback, useEffect, useReducer } from 'react';

export type NotificationContextType = {
  getNotification: () => NotificationCollection.Type;
  notify: ({ type, children }: INotificationCardMolecule) => number;
  deleteNotification: (id: number) => void;
  closeNotification: (id: number) => void;
};

interface INotificationProvider {
  children: React.ReactNode;
  position?: 'topCenter' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  customClassNames?: string;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const NotificationProvider: React.FC<INotificationProvider> = ({
  position = 'topCenter',
  customClassNames,
  children,
}) => {
  const [state, dispatch] = useReducer(notificationReducer, notificationInitialState);

  const getNotification = () => {
    return state;
  };

  const deleteNotification = (id: number) => {
    dispatch({
      type: NotificationType.DELETE,
      payload: id,
    });
  };

  const closeNotification = (id: number) => {
    dispatch({
      type: NotificationType.INACTIVE,
      payload: id,
    });
    setTimeout(() => {
      deleteNotification(id);
    }, 1000);
  };

  const notify = ({ type = NotificationType.ADD, children }: INotificationCardMolecule) => {
    const notificationId = state.length;
    dispatch({
      type: NotificationType.ADD,
      payload: {
        id: notificationId,
        type: type,
        children,
        active: true,
      },
    });
    setTimeout(() => {
      closeNotification(notificationId);
    }, 6000);
    return notificationId;
  };

  const showNotifications = useCallback(
    () => (
      <>
        {state.map((notification) => (
          <AnimatePresence key={notification?.id}>
            {notification?.active && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: '10%',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: '0%',
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: '10%',
                }}
              >
                <NotificationCardMolecule type={notification?.type} close={closeNotification} id={notification?.id}>
                  {notification.children}
                </NotificationCardMolecule>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </>
    ),
    [state]
  );

  useEffect(() => {
    state;
  }, [state]);

  const value = {
    getNotification,
    deleteNotification,
    notify,
    closeNotification,
  };
  return (
    <>
      <NotificationContext.Provider value={{ ...value }}>
        <div className={[classes.position[position], customClassNames].join(' ')}>{showNotifications()}</div>
        {children}
      </NotificationContext.Provider>
    </>
  );
};

const classes = {
  position: {
    topCenter: 'fixed left-0 top-0 h-fit flex w-full flex-col justify-center',
    topLeft: 'fixed top-5 left-5',
    topRight: 'fixed top-5 right-5',
    bottomLeft: 'fixed bottom-5 left-5',
    bottomRight: 'fixed bottom-5 right-5',
  },
};

/* 
Top Center: fixed left-0 top-0 h-fit flex w-full flex-col justify-center
Top left: fixed top-5 left-5
Top right: fixed top-5 right-5
Bottom left: fixed bottom-5 left-5
Bottom right: fixed bottom-5 right-5 */
