'use client';

import { NotificationProvider } from '@/features/notification/application/notificationContexts/notificationContext';
import { CustomFormProvider } from '@/interfaces/organisms/inputControls/form/CustomFormProvider';
import FormSchemaProvider from '@/interfaces/organisms/inputControls/form/FormSchemaContext';
import React from 'react';
import { CustomSWRProvider } from './providers/customSWRProvider';

interface IProvider {
  children: React.ReactNode;
}

const Provider: React.FC<IProvider> = ({ children }) => {
  return (
    <FormSchemaProvider>
      <CustomFormProvider>
        <NotificationProvider position='bottomRight'>
          <CustomSWRProvider>{children}</CustomSWRProvider>
        </NotificationProvider>
      </CustomFormProvider>
    </FormSchemaProvider>
  );
};

export { Provider };
