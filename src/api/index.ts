import { IObservation } from '../interfaces/observation';
import { REACT_APP_AWS_API_URL, REACT_APP_AWS_API_KEY } from '../utils/config';

export async function fetchHealthRoute(token: string) {
  const res = await fetch(`${REACT_APP_AWS_API_URL}/health`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'x-api-key': `${REACT_APP_AWS_API_KEY}`,
    },
  });

  return res.json();
}
export async function fetchObs() {
  const res = await fetch(`${REACT_APP_AWS_API_URL}/obs`, {
    headers: {
      'x-api-key': `${REACT_APP_AWS_API_KEY}`,
    },
  });

  return res.json();
}

export async function createOb(ob: IObservation, token: string) {
  const res = await fetch(`${REACT_APP_AWS_API_URL}/obs`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'x-api-key': `${REACT_APP_AWS_API_KEY}`,
    },
    body: JSON.stringify(ob),
  });

  return res.json();
}

export async function uploadPhoto(fileArray: File[], token: string) {
  try {
    const files = fileArray.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      return fetch(`${REACT_APP_AWS_API_URL}/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'x-api-key': `${REACT_APP_AWS_API_KEY}`,
        },
        body: formData,
      }).then(res => res.json());
    });

    const res = await Promise.all(files);

    return res;
  } catch (err) {
    console.log('uploadPhoto error', err);
  }
}
