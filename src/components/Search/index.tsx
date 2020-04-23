import React from 'react';
import * as S from './styles';

const Search = () => {
  return (
    <S.Container>
      <S.SearchIcon />
      <S.Input placeholder="Buscar por nome do restaurante" />
    </S.Container>
  );
};

export default Search;
