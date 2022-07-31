export function getYourPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function checkPositionObject(position: unknown) {
  if (!(position instanceof GeolocationPosition)) {
    throw new Error('Not a valid position object');
  }

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
}
