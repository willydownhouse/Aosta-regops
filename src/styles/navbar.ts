import styled from 'styled-components';

export const SNavBar = styled.nav`
  background-color: ${props => props.theme.colors.bg_nav};
  color: ${props => props.theme.colors.text_nav};
  height: 10vh;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 0rem 0.5rem;
  }
`;

export const StyledA = styled.span`
  display: inline-block;
  padding: 0.6rem 1rem;
  background-color: ${props => props.theme.colors.logo_a};
  border-radius: 5px;
`;
