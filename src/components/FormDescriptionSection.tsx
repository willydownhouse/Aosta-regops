import { Field } from 'formik';
import React from 'react';
import { ErrorText, FlexWrapper, InputLabel, TextArea } from '../styles/utils';

type FormDescriptionSectionProps = {
  value: string | undefined;
  error: string | undefined;
  touched: boolean | undefined;
};

function FormDescriptionSection({
  error,
  touched,
  value,
}: FormDescriptionSectionProps) {
  return (
    <FlexWrapper className="description" $direction="column" $align="start">
      <InputLabel>Description</InputLabel>
      <Field name="description" value={value} as={TextArea} />
      {error && touched ? <ErrorText>{error}</ErrorText> : null}
    </FlexWrapper>
  );
}

export default FormDescriptionSection;
