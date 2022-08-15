import { Field } from 'formik';
import React, { ChangeEvent } from 'react';
import { ErrorText, FlexWrapper } from '../styles/utils';

type FormSnowTests = {
  error: string | undefined;
  touched: boolean | undefined | never[];
};

function FormSnowTests({ error, touched }: FormSnowTests) {
  return (
    <FlexWrapper className="snow-tested">
      <FlexWrapper $direction="column">
        <FlexWrapper>
          <FlexWrapper $width={40}>
            <p>Snow tests</p>
          </FlexWrapper>

          <FlexWrapper $width={60}>
            <FlexWrapper>
              <h6>ECT</h6>
              <Field name="snow_tested" type="checkbox" value={'ECT'} />
              <h6>CT</h6>
              <Field name="snow_tested" value="CT" type="checkbox" />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>

        {error && touched ? <ErrorText>{error}</ErrorText> : null}
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default FormSnowTests;
