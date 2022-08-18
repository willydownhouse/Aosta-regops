import { REACT_APP_AWS_API_URL, REACT_APP_AWS_API_KEY } from '../utils/config';

export async function fetchObs() {
  const res = await fetch(`${REACT_APP_AWS_API_URL}/obs`, {
    headers: {
      'x-api-key': `${REACT_APP_AWS_API_KEY}`,
    },
  });

  return res.json();
}
