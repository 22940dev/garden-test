import styled from 'styled-components';
import variables from '../../../styles/variables.module.scss';

export const Article = styled.article`
  border-bottom: 1px solid gray;
  @media (min-width: 800px) {
    border: none;
  }
`;

// Plant Name
export const Plant = styled.h3`
  font-family: 'DM Mono';
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media (min-width: 800px) {
    font-size: 1.8rem;
  }
`;

export const PlantLink = styled.a`
  &:hover {
    color: gree;
    font-style: italic;
  }
`;

// superscript number next to plant name
export const Sup = styled.sup`
  font-size: large;
  vertical-align: top;
  margin-left: 8px;
`;

export const BotanicalName = styled.h4`
  font-size: 0.875rem;
  font-style: italic;
`;

export const PlantBlurb = styled.p`
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 800px) {
    margin-bottom: 1rem;
  }
`;
