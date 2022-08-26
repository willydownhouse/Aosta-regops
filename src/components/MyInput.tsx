import React from 'react';
import { Field, FieldInputProps, FormikState } from 'formik';
import { ErrorText, InputLabel, MyInputWrap, TextInput } from '../styles/utils';

type MyInputProps = {
  name: string;
  extra_class?: string;
  placeholder?: string;
  type?: string;
  valueFromProps?: number;
};

function MyInput({
  name,
  extra_class,
  placeholder,
  type,
  valueFromProps,
}: MyInputProps) {
  return (
    <MyInputWrap className={extra_class}>
      <InputLabel>{`${!placeholder ? modifyInputLabel(name) : ''}`}</InputLabel>
      <Field name={name} as={type || 'text'}>
        {({
          field: { value, name, onBlur, onChange, checked, multiple },
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
                /* {...field} */
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                checked={checked}
                multiple={multiple}
                value={valueFromProps || value}
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
