import React from 'react';
import {Image} from 'react-native';
import {Images} from '../../themes';

const iconMap = {
  Home: {
    icon: Images.home,
    iconStyle: {width: 20, height: 20, marginRight: 10},
  },
  Reserves: {
    icon: Images.reservas,
    iconStyle: {width: 22, height: 20, marginRight: 10},
  },
  Gos: {
    icon: Images.gos,
    iconStyle: {width: 14, height: 20, marginRight: 10},
  },
  Chat: {
    icon: Images.chat,
    iconStyle: {width: 21, height: 20, marginRight: 10},
  },
};

type IconProps = {
  name: string;
  color?: string;
  style?: any;
};

const Icon: React.FunctionComponent<IconProps> = ({name, style}) => {
  const icon = iconMap[name].icon;
  const iconStyle = iconMap[name].iconStyle;
  return <Image source={icon} style={[iconStyle, style]} />;
};

export default Icon;
