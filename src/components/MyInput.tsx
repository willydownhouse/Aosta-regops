import React from 'react';
import { Field, FieldInputProps, FormikState } from 'formik';
import { ErrorText, InputLabel, MyInputWrap, TextInput } from '../styles/utils';

type MyInputProps = {
  name: string;
  extra_class?: string;
  placeholder?: string;
};

function MyInput({ name, extra_class, placeholder }: MyInputProps) {
  return (
    <MyInputWrap className={extra_class}>
      <InputLabel>{`${!placeholder ? modifyInputLabel(name) : ''}`}</InputLabel>
      <Field name={name}>
        {({
          field,
          form: { errors, touched },
        }: {
          field: FieldInputProps<any>;
          form: FormikState<any>;
        }) => {
          return (
            <>
              <TextInput
                placeholder={placeholder}
                $error={touched[name] && errors[name]}
                {...field}
              />
              {touched[name] && errors[name] ? (
                <ErrorText>{`${errors[name]}`}</ErrorText>
              ) : null}
            </>
          );
        }}
      </Field>
    </MyInputWrap>
  );
}

function modifyInputLabel(name: string) {
  return name.slice(0, 1).toUpperCase() + name.slice(1).replace('_', ' ');
}

export default MyInput;
