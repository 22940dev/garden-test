import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ $isPanelOpen }) => ($isPanelOpen ? 'block' : 'none')};
`;

export const DetailsContainer = styled.div`
  background-color: lightblue;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
