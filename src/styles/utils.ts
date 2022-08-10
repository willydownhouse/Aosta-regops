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

type TextInputProps = {
  $error?: any;
};

export const TextInput = styled.input<TextInputProps>`
  height: 3rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.5rem;
  outline: none;
  font-size: 1.4rem;
  border: ${props => `1px solid ${props.$error ? 'red' : '#999'}`};
  border-radius: 3px;
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ErrorText = styled.p`
  color: red;
`;
