import {View} from 'react-native';
import styled from 'styled-components/native';
import {animated} from 'react-spring/native';
import {Colors} from '../../themes';

export const HomeContainer = styled.View`
  background-color: white;
  max-height: 100%;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 18px;
`;

export const Title = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 26px;
  color: ${Colors.fill_tabbar};
  padding-top: 10px;
`;

export const AvatarButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  margin-right: 5px;
`;

export const AvatarDownIcon = styled.Image`
  width: 9px;
  height: 7px;
`;

export const RestaurantList = styled.FlatList`
  padding: 0 18px;
`;

export const AnimatedView = animated(View);
