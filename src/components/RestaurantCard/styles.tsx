import styled from 'styled-components/native';
import {animated} from 'react-spring';
import {Colors, Images} from '../../themes';
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

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  min-height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const GoIcon = styled.Image.attrs({
  source: Images.go_light,
})`
  width: 9px;
  height: 12px;
  margin-left: 2px;
`;

export const InfoView = styled.View`
  background: ${props => (props.go ? Colors.purple : Colors.green)};
  border-radius: 3px;
  height: 34px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainerView = styled.View`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`;

export const DaysView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 86px;
`;

export const DayText = styled.Text`
  font-family: 'Gilroy-Medium';
  font-size: 13px;
  color: ${props => (props.go ? Colors.purple_dark : Colors.green_dark)};
  letter-spacing: 0.22px;
  margin-top: 4px;
  margin-bottom: -2px;
`;

export const DiscountText = styled.Text`
  font-family: 'Gilroy-Medium';
  font-size: 10px;
  color: #ffffff;
  letter-spacing: 0.17px;
`;
