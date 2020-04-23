import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import RestaurantCard from '../../components/RestaurantCard';
import Search from '../../components/Search';
import SegmentControl from '../../components/SegmentControl';
import SafeAreaView from 'react-native-safe-area-view';
import {withNavigationFocus} from 'react-navigation';
import * as S from './styles';

import data from './content';

const Home = props => {
  const currentScrollOffset = useRef(0);
  const yHeaderPosition = useRef(new Animated.Value(0));

  const onScroll = event => {
    var currentOffset = event.nativeEvent.contentOffset.y;

    let toValue = -currentOffset;

    if (currentOffset <= currentScrollOffset.current - 2) {
      toValue = 0;
    }

    currentScrollOffset.current = currentOffset;

    Animated.spring(yHeaderPosition.current, {
      toValue: toValue < -100 ? -100 : toValue > 0 ? 0 : toValue,
    }).start();
  };

  return (
    <SafeAreaView>
      <S.HomeContainer>
        <S.AnimatedHeader
          style={{
            top: yHeaderPosition.current,
          }}>
          <S.Header>
            <Search />
            <S.AvatarButton
              onPress={() => props.navigation.navigate('Profile')}>
              <S.Avatar
                source={{
                  uri:
                    'http://guavadescontos.com/media/users/photo/IMG_20170612_072136_-_copia.jpg',
                }}
              />
            </S.AvatarButton>
          </S.Header>
          <SegmentControl options={['Todos', 'Free', 'Go!', 'Go! 2 em 1']} />
        </S.AnimatedHeader>

        <S.RestaurantList
          onScroll={onScroll}
          scrollEventThrottle={16}
          data={data}
          renderItem={({item, index}) => {
            return (
              <RestaurantCard
                index={index}
                {...item}
                style={[
                  {
                    marginBottom: index == data.length - 1 ? 100 : 10,
                  },
                ]}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </S.HomeContainer>
    </SafeAreaView>
  );
};

export default withNavigationFocus(Home);
