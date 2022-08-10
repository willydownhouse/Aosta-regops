import React, { Children } from 'react';
import { Field, FieldInputProps, FormikState } from 'formik';
import { StyledComponent } from '@emotion/styled';
import { ErrorText, InputLabel, TextInput } from '../styles/utils';

type MyInputProps = {
  name: string;
};

function MyInput({ name }: MyInputProps) {
  return (
    <div>
      <InputLabel>{name}</InputLabel>
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
              <TextInput $error={touched[name] && errors[name]} {...field} />
              {touched[name] && errors[name] ? (
                <ErrorText>{`${errors[name]}`}</ErrorText>
              ) : null}
            </>
          );
        }}
      </Field>
    </div>
  );
}

export default MyInput;
// function MyInput({
//   name,
//   type,
//   value,
//   touched,
//   error,
//   as,
//   component,
// }: MyInputProps) {
//   return (
//     <div>
//       <InputLabel>{name}</InputLabel>
//       <Field component={component} name={name} value={value} type={type} />
//       {touched && error ? <ErrorText>{error}</ErrorText> : null}
//     </div>
//   );
// }

// export default MyInput;
