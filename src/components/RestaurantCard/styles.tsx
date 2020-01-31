import styled from 'styled-components/native';
import {animated} from 'react-spring';
import TouchableScale from 'react-native-touchable-scale';

export const RestaurantCard = styled(TouchableScale).attrs({
  activeScale: 0.95,
})`
  height: 177px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const RestaurantCardWrapper = animated(RestaurantCard);

export const RestaurantNameText = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 16px;
  color: white;
`;

export const RestaurantDetailText = styled.Text`
  font-family: Gilroy-Medium;
  font-size: 16px;
  color: white;
`;

export const RestaurantCoverImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const RestaurantShadow = styled.View`
  position: absolute;
  background: #545454;
  opacity: 0.45;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
