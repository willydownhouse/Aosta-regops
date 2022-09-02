import React, { ChangeEvent, useEffect, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FaCloudUploadAlt } from 'react-icons/fa';
import {
  FlexWrapper,
  FormGrid,
  HoverP,
  TestHoverBox,
  TestHoverInfo,
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
import { createOb, uploadPhoto } from '../api';
import { IObservation } from '../interfaces/observation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';

type NewObFormProps = {
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;

  token: string;
};

function NewObForm({ setNotification, setObModalOpen, token }: NewObFormProps) {
  const { coords, setCoords } = useCoords();
  const [photoInputs, setPhotoInputs] = useState(0);
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((ob: IObservation) => createOb(ob, token));
  const { user } = useAuth0();
  // useEffect(() => {
  //   console.log('data from mutate:');
  //   console.log(data);
  // }, [data]);

  async function handleSubmit(
    values: IObservation,
    { resetForm }: FormikHelpers<IObservation>
  ) {
    // console.log('FORM VALUES');
    // console.log(values);

    if (values.photos.some(val => !val)) {
      return displayNotification(
        'please choose file or remove unnecessary inputs',
        setNotification
      );
    }

    if (values.photos.length !== 0) {
      const res = await uploadPhoto(values.photos as File[], token);

      values.photos = res?.map(item => item.url) as string[];
    }

    values.createdBy = user?.nickname as string;
    values.coords = {
      lat: values.lat as number,
      long: values.long as number,
    };

    // console.log('values after uploading photos');
    // console.log(values);
    mutate(values, {
      onError: err => console.log('mutate err', err),
      onSuccess: data => {
        console.log('mutate success:', data);
        displayNotification(
          'Thank you for the new observation',
          setNotification
        );
        queryClient.invalidateQueries(['obs']);
      },
    });

    // resetForm();
    // setFieldValue('snow_tests', []);
    setCoords({ latitude: 0, longitude: 0 });
  }

  useEffect(() => {
    //console.log('coords', coords);
    // if (!coords) return;
    // initialValues.lat = coords.latitude;
    // initialValues.long = coords.longitude;
  }, [coords]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
        setFieldError,
      }) => {
        values.lat = coords.latitude;
        values.long = coords.longitude;

        function handlePhotoInputChange(
          e: ChangeEvent<HTMLInputElement>,
          i: number
        ) {
          // when click cancel
          if (values.photos[i] && e.target.files?.length === 0) {
            values.photos[i] = undefined;

            validateField('photos');
            return;
          }

          if (!e.target.files || e.target.files?.length === 0) return;

          const file = e.target.files[0];

          values.photos[i] = file;

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
            stability: 'poor', //KORJAA!!!!
          });

          setFieldValue('test_result', '');
          setFieldValue('snow_tested', []);
        }

        function handleClickCoordsFromMap() {
          setCoords({ latitude: 0, longitude: 0 });
          setObModalOpen(false);
          setFieldError('lat', undefined);
          setFieldError('long', undefined);
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
                options={Array.from({ length: 30 }, (v, k) => k + 1)}
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
                <MyInput
                  name="lat"
                  extra_class="small-screen-padding"
                  valueFromProps={coords?.latitude}
                />
                <MyInput name="long" valueFromProps={coords?.longitude} />
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
                    } else if (
                      values.photos.length !== photoInputs ||
                      values.photos.some(val => !val)
                    ) {
                      displayNotification(
                        'please choose file first',
                        setNotification
                      );
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
                      <FlexWrapper>
                        <FaCloudUploadAlt
                          size={'3rem'}
                          style={{ color: theme.colors.btn_main }}
                        />
                        <span>{(values.photos[i] as File)?.name || ''}</span>
                        <input
                          style={{ display: 'none' }}
                          id={`${i}`}
                          type={'file'}
                          name="photos"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handlePhotoInputChange(e, i)
                          }
                          accept="image/*"
                        />
                      </FlexWrapper>
                    </label>

                    <XButton
                      type="button"
                      onClick={() => {
                        if (photoInputs === 0) return;

                        values.photos?.splice(i, 1);
                        setPhotoInputs(photoInputs - 1);
                      }}
                    >
                      x
                    </XButton>
                  </FlexWrapper>
                ))}
              </FlexWrapper>
            </FormGrid>

            <FlexWrapper style={{ height: '5%' }} $justify="space-between">
              <Button $mt={2} $mb={2} disabled={!isValid} type="submit">
                Submit
              </Button>
              <Button
                onClick={() => setObModalOpen(false)}
                type="button"
                $mt={2}
                $mb={2}
              >
                close
              </Button>
            </FlexWrapper>

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
