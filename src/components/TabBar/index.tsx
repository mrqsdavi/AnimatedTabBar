import React, {useState, useRef} from 'react';
import {Platform} from 'react-native';
import {useSpring} from 'react-spring';

import * as S from './styles';

interface ButtonNativeLayout {
  height: number;
  width: number;
  x: number;
  y: number;
}

interface ButtonLayout {
  height: number;
  width: number;
  left: number;
  top: number;
}

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;
  const [highlightProps, setHighlightProps] = useSpring(() => ({
    left: 0,
    top: 0,
    width: 58,
    height: 52,
  }));

  // const [buttonsLayouts, setButtonsLayouts] = useState<ButtonNativeLayout[]>(
  //   [],
  // );
  // const [buttonsTextLayouts, setButtonsTextLayouts] = useState<
  //   ButtonNativeLayout[]
  // >([]);

  const buttonsLayouts = useRef<ButtonNativeLayout[]>([]);
  const buttonsTextLayouts = useRef<ButtonNativeLayout[]>([]);

  const setActive = index => {
    if (buttonsTextLayouts.current[index] && buttonsLayouts.current[index]) {
      const newHighlightProps = {
        ...buttonsLayouts.current[index],
        height: buttonsTextLayouts.current[index].height,
        width: buttonsTextLayouts.current[index].width,
        top: buttonsLayouts.current[index].y + (Platform.OS === 'ios' ? 0 : 3),
        left:
          buttonsLayouts.current[index].x + buttonsTextLayouts.current[index].x,
      };
      setHighlightProps(newHighlightProps);
    }
  };

  return (
    <S.TabBarWrapper>
      <S.TabBarHighlightView style={highlightProps} />
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <S.TabBarButton
            key={routeIndex}
            active={isRouteActive}
            onLayout={e => {
              buttonsLayouts.current[routeIndex] = e.nativeEvent.layout;
              if (isRouteActive) {
                setActive(routeIndex);
              }
            }}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            <S.TabBarButtonWrapper
              onLayout={e => {
                buttonsTextLayouts.current[routeIndex] = e.nativeEvent.layout;

                if (isRouteActive && buttonsLayouts.current[routeIndex]) {
                  setActive(routeIndex);
                }
              }}>
              {renderIcon({route, focused: isRouteActive, tintColor})}

              {/* <S.ScalerText pose={isRouteActive ? 'active' : 'inactive'}>
              {getLabelText({route})}
            </S.ScalerText> */}
              {isRouteActive && (
                <S.TabBarText>{getLabelText({route})}</S.TabBarText>
              )}
            </S.TabBarButtonWrapper>
          </S.TabBarButton>
        );
      })}
    </S.TabBarWrapper>
  );
};

export default TabBar;
