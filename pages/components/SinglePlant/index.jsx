import React, { useState } from 'react';
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
  const { openModal, flowers } = useGlobalContext();
  return (
    <>
      {flowers.map((flower) => {
        const { id, name, blurb, botanical } = flower;
        return (
          <Article key={id}>
            <Plant>
              <PlantLink onClick={() => openModal(flower)}>{name}</PlantLink>
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
