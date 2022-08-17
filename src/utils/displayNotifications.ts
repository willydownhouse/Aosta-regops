import { INotification } from '../interfaces/utils';

const displayTime = 3000;

export const displayErrorNotification = (
  err: unknown,
  setNotification: (val: INotification) => void
) => {
  console.log('from display error:');
  console.log(err);
  if (err instanceof Error) {
    setNotification({
      message: err.message as string,
      type: 'error',
    });
    setTimeout(
      () => setNotification({ message: '', type: 'notif' }),
      displayTime
    );
  }
};

export const displayNotification = (
  msg: string,
  setNotification: (val: INotification) => void
) => {
  setNotification({
    message: msg,
    type: 'notif',
  });
  setTimeout(
    () => setNotification({ message: '', type: 'notif' }),
    displayTime
  );
};
