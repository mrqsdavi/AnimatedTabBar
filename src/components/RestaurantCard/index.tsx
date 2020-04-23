import React from 'react';
import * as S from './styles';

interface RestaurantCardProps {
  name: string;
  cover: string;
  first_detail: string;
  second_detail: string;
}

const DAYS_LABEL = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

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

      <S.BottomContainer>
        <S.InfoView go={true}>
          <S.InfoContainerView row={true}>
            <S.InfoContainerView>
              <S.DaysView>
                {DAYS_LABEL.map((day, index) => (
                  <S.DayText key={index} go={true}>
                    {day}
                  </S.DayText>
                ))}
              </S.DaysView>
              <S.DiscountText>30% NA COMIDA</S.DiscountText>
            </S.InfoContainerView>
            <S.GoIcon />
          </S.InfoContainerView>
        </S.InfoView>
        <S.InfoView>
          <S.InfoContainerView row={true}>
            <S.InfoContainerView>
              <S.DaysView>
                {DAYS_LABEL.map((day, index) => (
                  <S.DayText key={index}>{day}</S.DayText>
                ))}
              </S.DaysView>
              <S.DiscountText>10% ATÉ 25%</S.DiscountText>
            </S.InfoContainerView>
          </S.InfoContainerView>
        </S.InfoView>
      </S.BottomContainer>
    </S.RestaurantCardWrapper>
  );
};

export default RestaurantCard;
