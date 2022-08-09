import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

type FlexWrapperProps = {
  $width?: number;
  $justify?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  align-items: center;
  width: ${props => (props.$width ? `${props.$width}%` : '100%')};
  justify-content: ${props => (props.$justify ? props.$justify : 'center')};
`;

type ButtonProps = {
  $bgColor?: string;
  $text_color?: string;
};

export const Button = styled.button<ButtonProps>`
  padding: 0.6rem 1.5rem;
  background-color: ${props => props.$bgColor || props.theme.bg_color};
  color: ${props => props.$text_color || props.theme.text_color};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  border: 1px solid ${props => props.$text_color || props.theme.text_color};
  border-radius: 3px;
  transition: all 0.3s ease;
  font-size: 1.4rem;

  &:hover {
    transform: scale(1.1);
    color: white;
    border: 1px solid white;
  }

  @media (max-width: 400px) {
    padding: 0.4rem 1.1rem;
    font-size: 1rem;
  }
`;

Button.defaultProps = {
  theme: {
    text_color: '#cecece',
    bg_color: '#044157',
  },
};

export const TextInput = styled.input`
  height: 3rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.5rem;
  outline: none;
  font-size: 1.4rem;
`;
