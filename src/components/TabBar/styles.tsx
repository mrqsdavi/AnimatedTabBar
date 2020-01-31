import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {animated} from 'react-spring';
import {isIphoneXorAbove} from '../../utils/platforms';
import {Colors} from '../../themes';

export const TabBarWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 76px;
  background: ${Colors.fill_tabbar};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: ${isIphoneXorAbove() ? 30 : 15}px 10px;
`;

export const TabBarButton = styled.TouchableOpacity`
  flex: ${props => (props.active ? 2 : 1)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TabBarButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  height: 40px;
  /* background-color: pink; */
`;

export const TabBarText = styled.Text`
  line-height: 22px;
  color: ${Colors.text_gray};
  font-family: Gilroy-Bold;
  font-size: 12px;
  ${Platform.OS === 'android' ? 'line-height: 40px;' : ''}
`;

const TabBarHighlight = styled.View`
  position: absolute;
  width: 100px;
  background: ${Colors.fill_gray};
  border-radius: 20px;
  opacity: 0.2;
`;

export const TabBarHighlightView = animated(TabBarHighlight);
