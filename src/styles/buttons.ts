import styled from 'styled-components';

type ButtonProps = {
  $bgColor?: string;
  $text_color?: string;
  $mb?: number;
  $ml?: number;
  $mr?: number;
};

export const Button = styled.button<ButtonProps>`
  padding: 0.6rem 1.5rem;
  background-color: ${props => props.$bgColor || props.theme.colors.btn_main};
  color: ${props => props.$text_color || props.theme.colors.btn_text_ligth};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  border: 1px solid
    ${props => props.$text_color || props.theme.colors.btn_text_ligth};
  border-radius: 3px;
  transition: all 0.3s ease;
  font-size: 1.4rem;
  margin-bottom: ${props => `${props.$mb}rem` || 'none'};
  margin-left: ${props => `${props.$ml}rem` || 'none'};
  margin-right: ${props => `${props.$mr}rem` || 'none'};

  &:hover {
    transform: scale(1.1);
    color: white;
    border: 1px solid white;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:disabled:hover {
    transform: none;
    color: ${props => props.$text_color || props.theme.colors.btn_text_ligth};
    border: 1px solid
      ${props => props.$text_color || props.theme.colors.btn_text_ligth};
  }

  @media (max-width: 400px) {
    padding: 0.4rem 1.1rem;
    font-size: 1rem;
  }
`;
