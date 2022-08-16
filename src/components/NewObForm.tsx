import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FlexWrapper,
  FormGrid,
  HoverP,
  InputLabel,
  TestHoverBox,
  TestHoverInfo,
  TextInput,
} from '../styles/utils';
import MyInput from './MyInput';
import { Button, XButton } from '../styles/buttons';
import FormTypeSection from './FormTypeSection';
import FormDescriptionSection from './FormDescriptionSection';
import FormSnowTests from './FormSnowTests';
import {
  aspects,
  initialValues,
  validationSchema,
} from '../utils/validationSchema';
import { displayNotification } from '../utils/displayNotifications';
import { INotification } from '../interfaces/notification';
import { useTheme } from 'styled-components';
import DropDown from './DropDown';

type NewObFormProps = {
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
};

function NewObForm({ setNotification, setObModalOpen }: NewObFormProps) {
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
      {({
        values,
        errors,
        touched,
        isValid,
        setFieldValue,
        handleBlur,
        handleChange,
      }) => {
        function handleAddTestClick() {
          if (
            !values.test_result ||
            values.snow_tested.length !== 1 ||
            errors.test_result
          ) {
            return displayNotification(
              'please check your test name and result fields',
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

              <DropDown
                name="aspect"
                label="Aspect"
                onChange={handleChange}
                onBlur={handleBlur}
                options={aspects}
              />

              <MyInput name="temperature" />
              <MyInput name="snow_cover" />
              <DropDown
                name="avalance_danger"
                label="Avalance danger"
                onBlur={handleBlur}
                onChange={handleChange}
                options={['1', '2', '3', '4', '5']}
              />

              <MyInput name="altitude" />
              <MyInput name="weather" />

              <FormSnowTests
                error={errors.snow_tested as string}
                touched={touched.snow_tested}
              />

              <FlexWrapper className="result">
                <MyInput name="test_result" placeholder="test result" />
              </FlexWrapper>
              <FlexWrapper $pos>
                <Button $mr={2} onClick={handleAddTestClick} type="button">
                  add test
                </Button>
                {values.snow_tests.length > 0 ? (
                  <>
                    <HoverP>{values.snow_tests.length} tests</HoverP>
                    <XButton
                      type="button"
                      onClick={() => setFieldValue('snow_tests', [])}
                    >
                      delete
                    </XButton>
                  </>
                ) : null}
                {values.snow_tests.length > 0 ? (
                  <TestHoverBox className="hover">
                    {values.snow_tests.map(test => {
                      return (
                        <TestHoverInfo key={test.result}>
                          <span>{test.name}</span>
                          <span>{test.result}</span>
                        </TestHoverInfo>
                      );
                    })}
                  </TestHoverBox>
                ) : null}
              </FlexWrapper>
              <FlexWrapper className="grid-top-row" $align="center">
                <MyInput name="lat" extra_class="small-screen-padding" />
                <MyInput name="long" />
              </FlexWrapper>
              <FlexWrapper>
                <Button onClick={() => setObModalOpen(false)} type="button">
                  click coords from map
                </Button>
              </FlexWrapper>
              <FormDescriptionSection
                error={errors.description}
                touched={touched.description}
                value={values.description}
              />

              <FlexWrapper
                $direction="column"
                className="photo-inputs"
                $align="start"
              >
                <InputLabel>Photos</InputLabel>
                <FlexWrapper
                  $direction="column"
                  $align="start"
                  $justify="space-around"
                >
                  <input name="photos" type={'file'} />
                  <input name="photos" type={'file'} />
                  <input name="photos" type={'file'} />
                  <input name="photos" type={'file'} />
                  <input name="photos" type={'file'} />
                </FlexWrapper>
              </FlexWrapper>
            </FormGrid>

            <div style={{ height: '5%' }}>
              <Button $mt={2} disabled={!isValid} type="submit">
                Submit
              </Button>
            </div>

            <p>Values:</p>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <p>Errors:</p>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewObForm;
