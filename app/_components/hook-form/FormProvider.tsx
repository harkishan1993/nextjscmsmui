import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

import { FormEvent, FormEventHandler } from 'react';

// ----------------------------------------------------------------------

export default function FormProvider({ children, onSubmit, methods }
  :
  { children: React.ReactNode, onSubmit: FormEventHandler<HTMLFormElement>, methods: any}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}