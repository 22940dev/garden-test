import React from 'react';
import { useGlobalContext } from '../../../context';
import { Overlay, DetailsContainer } from './styles';
import utils from '../../../styles/utils.module.scss';

const DetailsModal = ({ plant }) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <Overlay $isModalOpen={isModalOpen}>
      <DetailsContainer>
        <h2>I am a modal with plant details</h2>
        <button onClick={closeModal}>close modal</button>
      </DetailsContainer>
    </Overlay>
  );
};

export default DetailsModal;
