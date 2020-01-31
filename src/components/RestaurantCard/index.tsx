import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

interface RestaurantCardProps {
  name: string;
  cover: string;
  first_detail: string;
  second_detail: string;
}

const RestaurantCard: React.FunctionComponent<RestaurantCardProps> = props => {
  const {name, cover, first_detail, second_detail} = props;
  return (
    <S.RestaurantCardWrapper {...props}>
      <S.RestaurantCoverImage
        source={{
          uri: cover,
        }}
      />
      <S.RestaurantShadow />
      <S.RestaurantNameText>{name}</S.RestaurantNameText>
      <S.RestaurantDetailText>
        {first_detail} • {second_detail}
      </S.RestaurantDetailText>
    </S.RestaurantCardWrapper>
  );
};

export default RestaurantCard;
