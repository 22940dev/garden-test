import React from 'react';
import plants from '../../../data';
import { Plant, Sup, PlantLink, BotanicalName, PlantBlurb } from './styles';

const SinglePlant = () => {
  return (
    <>
      {plants.map((plant) => {
        const { id, name, blurb, botanical } = plant;
        return (
          <article key={id}>
            <Plant>
              <PlantLink>{name}</PlantLink>
              <Sup>{id}</Sup>
            </Plant>
            <BotanicalName>{botanical}</BotanicalName>
            <PlantBlurb>{blurb}</PlantBlurb>
          </article>
        );
      })}
    </>
  );
};

export default SinglePlant;
