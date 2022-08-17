import React, { MutableRefObject } from 'react';
import { Modal, Overlay } from '../styles/modal';

type ModalProps = {
  $open: boolean;
  children: React.ReactNode;
  ref?: MutableRefObject<HTMLDivElement>;
};

const ModalComponent: React.FC<ModalProps> = ({ $open, children }) => {
  return (
    <Overlay $open={$open} className="overlay">
      <Modal className="modal">{children}</Modal>
    </Overlay>
  );
};

export default ModalComponent;
