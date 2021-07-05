import React, { useState } from 'react';
import plants from '../../../data';
import {
  Article,
  Plant,
  Sup,
  PlantLink,
  BotanicalName,
  PlantBlurb,
} from './styles';
import { useGlobalContext } from '../../../context';

const SinglePlant = () => {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <>
      {plants.map((plant) => {
        const { id, name, blurb, botanical } = plant;
        return (
          <Article key={id}>
            <Plant>
              <PlantLink onClick={openModal}>{name}</PlantLink>
              <Sup>{id}</Sup>
            </Plant>
            <BotanicalName>{botanical}</BotanicalName>
            <PlantBlurb>{blurb}</PlantBlurb>
          </Article>
        );
      })}
    </>
  );
};

export default SinglePlant;
