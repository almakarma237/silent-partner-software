'use client';

import { useValidationResolver } from '@/_lib/interface/useValidationResolver';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormSchema } from './FormSchemaContext';

interface ICustomFormProvider {
  children: React.ReactNode;
}

const CustomFormProvider: React.FC<ICustomFormProvider> = ({ children }) => {
  const { getState } = useFormSchema();

  const methods = useForm({ resolver: joiResolver(getState().schema as Joi.ObjectSchema<any>) });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export { CustomFormProvider };
