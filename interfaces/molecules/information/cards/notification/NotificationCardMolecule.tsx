import { NotificationType } from '@/features/notification/domain/NotificationTypes';
import React from 'react';

import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

interface INotificationCardMolecule {
  type?: NotificationType;
  children: React.ReactNode;
  customClassNames?: string;
  close?: (id: number) => void;
  id?: number;
}

const NotificationCardMolecule: React.FC<INotificationCardMolecule> = ({
  type = NotificationType.ADD,
  children,
  customClassNames,
  close,
  id,
}) => {
  return (
    <div className='m-2 my-5 flex w-96 max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400'>
      <div
        className={[
          'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg',
          classes.type[type].style,
          customClassNames,
        ].join(' ')}
      >
        {React.createElement(classes.type[type].icon)}
      </div>
      <div className='ml-3 text-sm font-normal'>{children}</div>
      {close && id !== undefined && (
        <button
          type='button'
          onClick={() => close(id)}
          className='-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          <AiOutlineClose />
        </button>
      )}
    </div>
  );
};

const classes = {
  type: {
    ADD: {
      style: 'text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200',
      icon: FaTelegramPlane,
    },
    ALERT: {
      style: 'text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200',
      icon: FaTelegramPlane,
    },
    DELETE: {
      style:
        'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200',
      icon: MdError,
    },
    ERROR: {
      style:
        'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200',
      icon: AiFillCloseCircle,
    },
    INACTIVE: {
      style: 'text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200',
      icon: FaTelegramPlane,
    },
    SUCCESS: {
      style: 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200',
      icon: AiFillCheckCircle,
    },
    WARNING: {
      style:
        'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200',
      icon: MdError,
    },
  },
};

export { NotificationCardMolecule };
export type { INotificationCardMolecule };
