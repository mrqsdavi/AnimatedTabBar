import styled from 'styled-components/native';
import {Images, Metrics} from '../../themes';

export const Container = styled.View`
  position: relative;
  background: #fbfafc;
  border: 1px solid #edf1f4;
  border-radius: 4px;
  width: ${Metrics.screenWidth - 95}px;
  height: 41px;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  font-family: 'Gilroy-Medium';
  font-size: 15px;
  color: #878787;
  letter-spacing: 0.38px;
  flex: 1;
  padding-left: 40px;
`;

export const SearchIcon = styled.Image.attrs({
  source: Images.search,
})`
  left: 12px;
  align-self: center;
  width: 20px;
  height: 20px;
  position: absolute;
`;
