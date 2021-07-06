import React from 'react';
import SinglePlant from '../SinglePlant';
import { PlantsContainer } from './styles';
import { useGlobalContext } from '../../../context';

const Plants = () => {
  return (
    <PlantsContainer>
      <SinglePlant />
    </PlantsContainer>
  );
};

export default Plants;
