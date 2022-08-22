export interface IObservation {
  id?: string;
  type: string[];
  valley: string;
  zone: string;
  lat: string | number;
  long: string | number;
  description: string;
  altitude: string;
  aspect: string;
  temperature: string;
  weather: string;
  avalance_danger: string;
  snow_cover: string;
  snow_tested: string[];
  test_result: string;
  snow_tests: ISnowTest[];
  photos: File[] | undefined[];
  createdBy: string;
  slope_angle: number;
  wind_speed: number;
  wind_direction: string;
  coords?: {
    lat: number;
    long: number;
  };
}

interface ISnowTest {
  name: string;
  result: string;
  stability: string;
}

export interface IServerOb {
  id?: string;
  type: string[];
  valley: string;
  zone: string;
  coords: {
    lat: number;
    long: number;
  };
  description: string;
  altitude: string;
  aspect: string;
  temperature: string;
  weather: string;
  avalance_danger: string;
  snow_cover: string;
  snow_tested: string[];
  test_result: string;
  snow_tests: ISnowTest[];
  photos: string[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  slope_angle: number;
  wind_speed: number;
  wind_direction: string;
}
