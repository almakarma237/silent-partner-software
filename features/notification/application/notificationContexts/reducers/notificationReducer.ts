import { Notification } from "@/features/notification/domain/Notification";
import { NotificationCollection } from "@/features/notification/domain/NotificationCollection";
import { NotificationType } from "@/features/notification/domain/NotificationTypes";

type State = NotificationCollection.Type;
  
  type Action = 
  | { type: 'ADD'; payload: Notification.Type }
  | { type: 'DELETE'; payload: number }
  | { type: 'INACTIVE'; payload: number };

// Initial notification state. It's empty for now
export const notificationInitialState:State = [];

// Our reducer function
const notificationReducer = (state = notificationInitialState, action: Action):State => {
  switch (action.type) {
    case NotificationType.ADD:
      // Add notification to the list (state..notifications)
      return [...state, action.payload];
    case NotificationType.DELETE:
      // Remove/Delete notification
      const deleteNotification = state?.filter(
        (notification) => notification.id !== action.payload
      );
      return [...deleteNotification];
    case NotificationType.INACTIVE:
      // Make notifcation inactive
      const notifications = state?.map((notification) => {
        if (notification.id === action.payload) {
          return {
            ...notification,
            active: false,
          };
        }
        return notification;
      });
      return [...notifications];
    default:
      return state;
  }
};

export { notificationReducer };

