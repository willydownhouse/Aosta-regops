import styled from 'styled-components';

export const SFooter = styled.footer`
  height: 8vh;
  background-color: ${props => props.theme.colors.bg_nav};
  color: ${props => props.theme.colors.btn_text_ligth};
  display: flex;
  align-items: center;
  justify-content: center;
`;
