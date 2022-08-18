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
  photos?: string[];
}

interface ISnowTest {
  name: string;
  result: string;
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
}
