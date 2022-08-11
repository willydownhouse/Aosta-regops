import { Field } from 'formik';
import React from 'react';
import { ErrorText, FlexWrapper } from '../styles/utils';

type FormTypeSectionProps = {
  error: string | undefined;
};

function FormTypeSection({ error }: FormTypeSectionProps) {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  console.log(width);
  return (
    <FlexWrapper $direction="column" className="grid-top-row">
      <FlexWrapper
        $direction={width < 600 ? 'column' : 'row'}
        $justify="center"
      >
        <FlexWrapper>
          <h6>Avalance observation</h6>
          <Field type="checkbox" value="avalance_observation" name="type" />
        </FlexWrapper>
        <FlexWrapper>
          <h6>Danger sign</h6>
          <Field type="checkbox" value="danger_sign" name="type" />
        </FlexWrapper>
        <FlexWrapper>
          <h6>Conditions report</h6>
          <Field type="checkbox" value="consditions_report" name="type" />
        </FlexWrapper>
      </FlexWrapper>

      <FlexWrapper>
        <ErrorText>{error}</ErrorText>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default FormTypeSection;
