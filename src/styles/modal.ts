import styled from 'styled-components';

type ModalProps = {
  $open: boolean;
};

export const Modal = styled.div<ModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${props => (props.$open ? 5 : -10)};
  opacity: ${props => (props.$open ? 1 : 0)};
  width: 75vw;
  height: 90vh;
  background-color: #f2f2f2;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;
  transition: z-index 0.3s ease-in;
  transition: opacity 1s ease;
  padding: 2rem;

  @media (max-width: 678px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
    height: 95vh;
    padding: 0.5rem;
  }
`;
