export interface ICoords {
  latitude: number;
  longitude: number;
}

export interface INotification {
  message: string;
  type: 'notif' | 'error';
}
