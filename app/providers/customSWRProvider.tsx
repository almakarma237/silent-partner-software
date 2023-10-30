'use client';

import { NotificationType } from '@/features/notification/domain/NotificationTypes';
import useNotification from '@/features/notification/interface/hooks/useNotification';
import React from 'react';
import { SWRConfig } from 'swr';

interface ICustomSWRProvider {
  children: React.ReactNode;
}

const CustomSWRProvider: React.FC<ICustomSWRProvider> = ({ children }) => {
  const { notify } = useNotification();

  const message = ({ data, status, statusText }: { data: { message: string }; status: string; statusText: string }) => {
    return (
      <React.Fragment>
        <span className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>status Code: {status}</span>
        <p className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>Meaning: {statusText}</p>
        <div className='mb-2 text-sm font-normal'>{data?.message}</div>
      </React.Fragment>
    );
  };

  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
            console.log(error);
            notify({
              type: NotificationType.ERROR,
              children: message(error?.response),
            });
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export { CustomSWRProvider };
