import styled from 'styled-components';

type OverlayProps = {
  $open: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: z-index 0.3s ease-in;
  transition: opacity 0.7s ease;
  z-index: ${props => (props.$open ? 5 : -10)};
  opacity: ${props => (props.$open ? 1 : 0)};
`;

export const Modal = styled.div`
  width: 60vw;
  height: 90vh;
  background-color: ${props => props.theme.colors.bg_modal};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow: scroll;
  padding: 2rem;

  @media (max-width: 1200px) {
    width: 75vw;
  }

  @media (max-width: 678px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
    height: 95vh;
    padding: 0.5rem;
  }
`;
