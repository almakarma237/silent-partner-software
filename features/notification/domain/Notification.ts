import { NotificationType } from "@/features/notification/domain/NotificationTypes";

namespace Notification {
  type Notification = {
    id: number;
    type: NotificationType;
    children: React.ReactNode;
    active: boolean;
  };

  export type Type = Notification;
}

export type { Notification };

