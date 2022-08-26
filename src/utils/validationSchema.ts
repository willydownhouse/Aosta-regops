import * as yup from 'yup';
import { IObservation } from '../interfaces/observation';

export const aspects = [
  'north',
  'south',
  'east',
  'west',
  'northeast',
  'southeast',
  'southwest',
  'northwest',
];

export const validationSchema = yup.object({
  type: yup
    .array()
    .min(1, 'choose your observation type please')
    .max(1, 'please choose only one type'),
  valley: yup.string().required('Valley is required'),
  zone: yup.string().required('Zone is required'),
  lat: yup
    .number()
    .typeError('must be a number')
    .required('lat is required')
    .test('is zero?', 'lat cant be zero', val => val !== 0),
  long: yup
    .number()
    .typeError('must be a number')
    .required('long is required')
    .test('is zero?', 'long cant be zero', val => val !== 0),
  aspect: yup.string().oneOf(aspects).required('Aspect is required'),
  weather: yup.string().required('Weather is required'),
  altitude: yup
    .number()
    .min(0)
    .max(9000)
    .typeError('must be a number as meters')
    .required('altitude is required (m)'),
  temperature: yup
    .number()
    .typeError('must be a number')
    .min(-50)
    .max(50)
    .required('temperature is required'),
  avalance_danger: yup.string().required('avalance danger is required'),
  snow_cover: yup
    .number()
    .min(0)
    .max(500)
    .typeError('must be a number as cm')
    .required('snow cover is required (cm)'),
  description: yup
    .string()
    .required('description is required')
    .max(500, 'max length 500 characters'),
  snow_tested: yup.array().max(1, 'choose only 1 test'),

  test_result: yup
    .string()
    .max(15)
    .when('snow_tested', {
      is: (val: []) => val.length >= 1,
      then: yup.string().required('result is required for a test'),
    }),
  snow_tests: yup.array(),
  slope_angle: yup
    .number()
    .typeError('must be a number')
    .required('slope angle is required')
    .min(1, 'slope angle is required')
    .max(90),
  wind_speed: yup
    .number()
    .typeError('must be a number (m/s)')
    .required('wind speed is required (m/s)')
    .min(1, 'wind speed is required (m/s)')
    .max(50),
  wind_direction: yup
    .string()
    .oneOf(aspects)
    .required('wind direction is required'),
  photos: yup.array(),
});

export const initialValues: IObservation = {
  type: [],
  valley: '',
  zone: '',
  lat: 0,
  long: 0,
  description: '',
  altitude: '',
  aspect: '',
  temperature: '',
  weather: '',
  avalance_danger: '1',
  snow_cover: '',
  snow_tested: [],
  test_result: '',
  snow_tests: [],
  photos: [],
  createdBy: '',
  wind_speed: 0,
  wind_direction: '',
  slope_angle: 0,
};
