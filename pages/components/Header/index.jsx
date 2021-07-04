import React from 'react';
import { HeaderContainer, Title } from './styles';
import utils from '../../../styles/utils.module.scss';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <span className={utils.italic}>Mother&apos;s</span> Garden.
      </Title>
    </HeaderContainer>
  );
};

export default Header;
