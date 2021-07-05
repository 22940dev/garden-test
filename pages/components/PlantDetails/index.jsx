import React from 'react';
import { useGlobalContext } from '../../../context';
import {
  Overlay,
  DetailsContainer,
  ModalHeader,
  PlantDetails,
  CloseModal,
  PlantName,
  BotanicalName,
} from './styles';

const DetailsModal = ({ plant }) => {
  const { isModalOpen, closeModal, flowers } = useGlobalContext();
  return (
    <Overlay $isModalOpen={isModalOpen}>
      <DetailsContainer>
        <ModalHeader>
          <PlantName>Plant name</PlantName>
          <BotanicalName>Botanical name</BotanicalName>
        </ModalHeader>
        <PlantDetails>
          <p>Image goes here</p>
          <article>
            <p>More information on the plant</p>
            <h3>Native areas</h3>
            <p>Infor about native areas</p>
            <h3>Care</h3>
            <p>details about care and insructions</p>
          </article>
        </PlantDetails>

        <CloseModal onClick={closeModal}>close modal</CloseModal>
      </DetailsContainer>
    </Overlay>
  );
};

export default DetailsModal;
