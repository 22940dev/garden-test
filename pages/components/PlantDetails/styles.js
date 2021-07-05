import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'block' : 'none')};
  transition: all 0.3 ease;
`;

export const DetailsContainer = styled.div`
  background-color: darkslategray;
  width: 90%;
  height: 90%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.3 ease;
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export const PlantName = styled.h2`
  font-family: 'DM Mono';
  font-size: 1.25rem;
  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;

export const BotanicalName = styled.p`
  font-size: 1rem;
  font-style: italic;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const PlantDetails = styled.div`
  display: flex;
  gap: 4rem;
`;

export const CloseModal = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;
