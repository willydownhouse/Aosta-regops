import React from 'react';
import { Modal } from '../styles/modal';

type ModalProps = {
  $open: boolean;
  children: React.ReactNode;
};

const ModalComponent: React.FC<ModalProps> = ({ $open, children }) => {
  return (
    <Modal className="obModal" $open={$open}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
