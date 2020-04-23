import styled from 'styled-components/native';
import {Images, Colors, Metrics} from '../../themes';

export const Container = styled.View`
  border: 1px solid #f2f5f7;
  border-radius: 4px;
  height: 28px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left-width: ${props => (props.index === 0 ? 0 : 1)}px;
  border-color: #f2f5f7;
`;

export const Text = styled.Text`
  font-family: 'Gilroy-Medium';
  font-size: 12px;
  color: #9aa3ad;
  letter-spacing: 0.3px;
  margin-top: 4px;
`;
