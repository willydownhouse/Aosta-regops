import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Button, TextInput } from '../styles/utils';

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
  temperature: 0,
  weather: '',
  avalance_danger: 1,
  snow_cover: 0,

  // photos, snow_tested, snow_tests
};

const validationSchema = yup.object({
  valley: yup.string().required('Valley is required'),
});

function NewObForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Field
            name="valley"
            value={values.valley}
            //component={TextInput}
            type="text"
          />
          {touched.valley && errors.valley ? <p>{errors.valley}</p> : null}

          <div>
            <Button type="submit">Submit</Button>
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
