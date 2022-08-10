import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { FlexWrapper, TextInput } from '../styles/utils';

import MyInput from './MyInput';
import { Button } from '../styles/buttons';

const initialValues = {
  valley: '',
  zone: '',
  coords: {
    lat: '',
    long: '',
  },
  description: '',
  altitude: '',
  aspect: '',
  temperature: '',
  weather: '',
  avalance_danger: 1,
  snow_cover: '',

  // photos, snow_tested, snow_tests
};

const validationSchema = yup.object({
  valley: yup.string().required('Valley is required'),
  zone: yup.string().required('Zone is required'),
  lat: yup.number().typeError('must be a number').required('lat is required'),
  long: yup.number().typeError('must be a number').required('long is required'),
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
        <Form>
          <MyInput name="valley" />
          {/* <MyInput name="zone" />
          <FlexWrapper>
            <MyInput name="lat" />
            <MyInput name="long" />
          </FlexWrapper>
          <MyInput name="altitude" />
          <MyInput name="temperature" />
          <MyInput name="avalance_danger" />
          <MyInput name="snow_cover" />
          <MyInput name="aspect" />
          <MyInput name="weather" /> */}

          <div style={{ marginTop: '2rem' }}>
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
