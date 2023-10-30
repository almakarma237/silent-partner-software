import { Notification } from "@/features/notification/domain/Notification";

namespace NotificationCollection {
  type NotificationCollection = Readonly<Array<Notification.Type>>;

  export type Type = NotificationCollection;
}

export type { NotificationCollection };

