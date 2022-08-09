import styled from 'styled-components';

export const SNavBar = styled.nav`
  background-color: #044157;
  color: #f4f4f4;
  height: 10%;
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
  background-color: rgb(299, 119, 4);
  border-radius: 5px;
`;
