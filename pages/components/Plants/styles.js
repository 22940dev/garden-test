import styled from 'styled-components';

export const PlantsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
