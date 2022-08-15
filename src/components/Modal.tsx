import React, { MutableRefObject } from 'react';
import { Modal } from '../styles/modal';

type ModalProps = {
  $open: boolean;
  children: React.ReactNode;
  ref?: MutableRefObject<HTMLDivElement>;
};

const ModalComponent: React.FC<ModalProps> = ({ $open, children }) => {
  return (
    <Modal className="modal" $open={$open}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
