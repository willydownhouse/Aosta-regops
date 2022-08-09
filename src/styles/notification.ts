import styled from 'styled-components';

type SNotificationProps = {
  $type: string;
};

export const SNotification = styled.div<SNotificationProps>`
  background-color: ${props =>
    props.$type === 'error' ? '#ea9999' : '#e5e5e5'};
  padding: 1rem 2rem;
  border: ${props =>
    props.$type === 'error' ? '2px solid #cc0000' : '2px solid #999'};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1px;
  z-index: 10;
`;
