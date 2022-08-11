import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  ErrorText,
  FlexWrapper,
  FormGrid,
  InputLabel,
  TextInput,
} from '../styles/utils';

import MyInput from './MyInput';
import { Button } from '../styles/buttons';
import FormTypeSection from './FormTypeSection';

const initialValues = {
  type: [],
  valley: '',
  zone: '',
  lat: '',
  long: '',
  description: '',
  altitude: '',
  aspect: '',
  temperature: '',
  weather: '',
  avalance_danger: '',
  snow_cover: '',

  // photos, snow_tested, snow_tests
};

const validationSchema = yup.object({
  type: yup
    .array()
    .min(1, 'choose your observation type please')
    .max(1, 'please choose only one type'),
  valley: yup.string().required('Valley is required'),
  zone: yup.string().required('Zone is required'),
  lat: yup.number().typeError('must be a number').required('lat is required'),
  long: yup.number().typeError('must be a number').required('long is required'),
  aspect: yup.string().required('Aspect is required'),
  weather: yup.string().required('Weather is required'),
  altitude: yup
    .number()
    .typeError('must be a number')
    .required('altitude is required'),
  temperature: yup
    .number()
    .typeError('must be a number')
    .min(-50)
    .max(50)
    .required('temperature is required'),
  avalance_danger: yup
    .number()
    .typeError('must be a number')
    .min(1, 'must be between 1-5')
    .max(5, 'must be between 1-5')
    .required('avalance danger is required'),
  snow_cover: yup
    .number()
    .min(0)
    .max(500)
    .typeError('must be a number')
    .required('snow cover is required (cm)'),
});

function NewObForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('FROM SUBMIT:');
        console.log(values);
      }}
    >
      {({ values, errors, touched, dirty, isValid }) => (
        <Form style={{ height: '100%' }}>
          <FormGrid>
            <FormTypeSection error={errors.type as string} />

            <MyInput name="valley" />
            <MyInput name="zone" />

            <MyInput name="aspect" />
            <MyInput name="temperature" />
            <MyInput name="avalance_danger" />
            <MyInput name="snow_cover" />
            <MyInput name="altitude" />
            <MyInput name="weather" />

            <FlexWrapper className="snow-tested">
              <FlexWrapper $width={40}>
                <p>Snow tests</p>
              </FlexWrapper>

              <FlexWrapper $width={60}>
                <h6>ECT</h6>
                <input type="checkbox" />
                <h6>CT</h6>
                <input type="checkbox" />
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper className="result">
              <MyInput name="test_result" placeholder="test result" />
            </FlexWrapper>
            <FlexWrapper className="grid-top-row" $align="start">
              <MyInput name="lat" />
              <MyInput name="long" />
              <FlexWrapper $align="center">
                <Button $ml={2}>Get coords</Button>
              </FlexWrapper>
            </FlexWrapper>
          </FormGrid>

          <div style={{ height: '5%' }}>
            <Button disabled={!isValid} type="submit">
              Submit
            </Button>
          </div>

          <p>Values:</p>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <p>Errors:</p>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default NewObForm;
