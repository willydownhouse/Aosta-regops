import React from 'react';
import { Formik, Form } from 'formik';
import { FlexWrapper, FormGrid } from '../styles/utils';
import MyInput from './MyInput';
import { Button } from '../styles/buttons';
import FormTypeSection from './FormTypeSection';
import FormDescriptionSection from './FormDescriptionSection';
import FormSnowTests from './FormSnowTests';
import { initialValues, validationSchema } from '../utils/validationSchema';
import { displayNotification } from '../utils/displayNotifications';
import { INotification } from '../interfaces/notification';

type NewObFormProps = {
  setNotification: (val: INotification) => void;
};

function NewObForm({ setNotification }: NewObFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setFieldValue }) => {
        console.log('FROM SUBMIT:');
        console.log(values);
        // resetForm();
        // setFieldValue('snow_tests', []);
      }}
    >
      {({ values, errors, touched, isValid, setFieldValue }) => {
        function handleAddTestClick() {
          if (!values.test_result || values.snow_tested.length !== 1) {
            return displayNotification(
              'test name and result fields are required',
              setNotification
            );
          }

          values.snow_tests.push({
            name: values.snow_tested[0],
            result: values.test_result as string,
          });

          setFieldValue('test_result', '');
          setFieldValue('snow_tested', []);
        }

        return (
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

              <FormSnowTests
                error={errors.snow_tested as string}
                touched={touched.snow_tested}
              />

              <FlexWrapper className="result">
                <MyInput name="test_result" placeholder="test result" />
              </FlexWrapper>
              <FlexWrapper>
                <Button $mr={2} onClick={handleAddTestClick} type="button">
                  add test
                </Button>
                {values.snow_tests.length > 0 ? (
                  <>
                    <p>{values.snow_tests.length} tests</p>
                    <button
                      type="button"
                      onClick={() => setFieldValue('snow_tests', [])}
                    >
                      x
                    </button>
                  </>
                ) : null}
              </FlexWrapper>
              <FlexWrapper className="grid-top-row" $align="center">
                <MyInput name="lat" />
                <MyInput name="long" />
              </FlexWrapper>
              <FlexWrapper>
                <Button type="button" $mb={2} $mt={1}>
                  click coords from map
                </Button>
              </FlexWrapper>
              <FormDescriptionSection
                error={errors.description}
                touched={touched.description}
                value={values.description}
              />
            </FormGrid>

            <div style={{ height: '5%' }}>
              <Button $mt={2} disabled={!isValid} type="submit">
                Submit
              </Button>
            </div>

            {/* <p>Values:</p>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <p>Errors:</p>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewObForm;
