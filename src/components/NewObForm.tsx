import React, { ChangeEvent, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaCloudUploadAlt } from 'react-icons/fa';
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
import { INotification } from '../interfaces/utils';
import { useTheme } from 'styled-components';
import DropDown from './DropDown';
import { useCoords } from '../context/coordsContext';

type NewObFormProps = {
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
};

function NewObForm({ setNotification, setObModalOpen }: NewObFormProps) {
  const { coords, setCoords } = useCoords();
  const [photoInputs, setPhotoInputs] = useState(0);

  console.log('coords', coords);

  useEffect(() => {
    if (!coords) return;

    initialValues.lat = coords.latitude;
    initialValues.long = coords.longitude;
  }, [coords]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setFieldValue }) => {
        console.log('FROM SUBMIT:');
        console.log(values.photos);
        // resetForm();
        // setFieldValue('snow_tests', []);
        setCoords(null);
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
        validateField,
      }) => {
        function handlePhotoInputChange(
          e: ChangeEvent<HTMLInputElement>,
          i: number
        ) {
          console.log(e.target.files);
          if (values.photos[i] && e.target.files?.length === 0) {
            //values.photos.splice(i, 1);

            values.photos[i] = undefined;

            /* setPhotoInputs(photoInputs - 1); */
            validateField('photos');
            return;
          }

          if (!e.target.files || e.target.files?.length === 0) return;

          const file = e.target.files[0];

          values.photos[i] = file;
          // ? (values.photos[i] = file)
          // : values.photos.push(file as File);

          validateField('photos');
        }
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
            stability: 'poor',
          });

          setFieldValue('test_result', '');
          setFieldValue('snow_tested', []);
        }

        function handleClickCoordsFromMap() {
          setCoords(null);
          setObModalOpen(false);
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
                error={errors.aspect}
                touched={touched.aspect}
              />
              <MyInput name="altitude" />

              <MyInput name="snow_cover" />
              <DropDown
                name="avalance_danger"
                label="Avalance danger"
                onBlur={handleBlur}
                onChange={handleChange}
                options={['1', '2', '3', '4', '5']}
                error={errors.avalance_danger}
                touched={touched.avalance_danger}
              />

              <MyInput name="temperature" />
              <MyInput name="weather" />

              <DropDown
                name="slope_angle"
                label="Slope angle"
                onChange={handleChange}
                onBlur={handleBlur}
                options={Array.from({ length: 90 }, (v, k) => k + 1)}
                error={errors.slope_angle}
                touched={touched.slope_angle}
              />
              <DropDown
                name="wind_direction"
                label="Wind direction"
                onChange={handleChange}
                onBlur={handleBlur}
                options={aspects}
                error={errors.wind_direction}
                touched={touched.wind_direction}
              />
              <DropDown
                name="wind_speed"
                label="Wind speed"
                onChange={handleChange}
                onBlur={handleBlur}
                options={Array.from({ length: 50 }, (v, k) => k + 1)}
                error={errors.wind_speed}
                touched={touched.wind_speed}
                placeholder="m/s"
              />

              <FormSnowTests
                error={errors.snow_tested as string}
                touched={touched.snow_tested}
              />

              <FlexWrapper className="result">
                <MyInput name="test_result" placeholder="test result" />
              </FlexWrapper>
              <FlexWrapper $pos className="add-test-btn">
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
                <Button onClick={handleClickCoordsFromMap} type="button">
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
                <Button
                  $mt={2}
                  $mb={2}
                  type="button"
                  onClick={() => {
                    if (photoInputs === 5) {
                      return;
                    } else {
                      setPhotoInputs(photoInputs + 1);
                    }
                  }}
                >
                  add photo
                </Button>
                {Array.from({ length: photoInputs }).map((el, i) => (
                  <FlexWrapper key={i}>
                    <label htmlFor={`${i}`}>
                      {/* <FaCloudUploadAlt size={'3rem'} /> */}
                      <span style={{ marginRight: '2rem' }}>upload</span>
                      <span>{values.photos[i]?.name || ''}</span>
                      <input
                        style={{ display: 'none' }}
                        id={`${i}`}
                        type={'file'}
                        name="photos"
                        /* value={values.photos[i]?.name} */
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handlePhotoInputChange(e, i)
                        }
                      />
                    </label>

                    <Button
                      type="button"
                      onClick={() => {
                        if (photoInputs === 0) return;

                        values.photos?.splice(i, 1);
                        setPhotoInputs(photoInputs - 1);
                      }}
                    >
                      x
                    </Button>
                  </FlexWrapper>
                ))}
              </FlexWrapper>
            </FormGrid>

            <FlexWrapper style={{ height: '5%' }} $justify="space-between">
              <Button $mt={2} $mb={2} disabled={!isValid} type="submit">
                Submit
              </Button>
              <Button type="button" $mt={2} $mb={2}>
                close
              </Button>
            </FlexWrapper>

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
