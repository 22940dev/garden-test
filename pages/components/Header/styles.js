import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display';
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 800px) {
    font-size: 7rem;
    line-height: 1;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;
