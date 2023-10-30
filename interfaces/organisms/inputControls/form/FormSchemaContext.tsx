import Joi from 'joi';
import { createContext, useContext, useMemo, useReducer, useState } from 'react';

type Dispatch = (action: Action) => void;
type State = {
  formValues?: any;
  schema?: Joi.ObjectSchema<any>;
};
type Action = { type: 'createFormSchema'; payload: State };

export type FormSchemaContextType = {
  getState: () => State;
  createFormSchema: (payload: State) => any;
};

const formSchemaReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'createFormSchema':
      return { formValues: action.payload.formValues, schema: action.payload.schema };
  }
};

const initialState: State = {};

interface IFormSchemaProvider {
  children: React.ReactNode;
}

export const FormSchemaContext = createContext<FormSchemaContextType | undefined>(undefined);

export const FormSchemaProvider: React.FC<IFormSchemaProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(formSchemaReducer, initialState);
  const [temporarystate, setTemporaryState] = useState({});

  const getState = () => {
    return state;
  };

  const api = useMemo(() => {
    const createFormSchema = (payload: State) => {
      dispatch({ type: 'createFormSchema', payload });
    };

    return {
      createFormSchema,
    };
  }, []);

  return (
    <FormSchemaContext.Provider
      value={{
        ...api,
        getState,
      }}
    >
      {children}
    </FormSchemaContext.Provider>
  );
};

export function useFormSchema() {
  const context = useContext(FormSchemaContext);
  if (context === undefined) {
    throw new Error('useFormSchema must be used within a FormSchemaProvider');
  }
  return context;
}

export default FormSchemaProvider;
