import React from 'react';
import RestaurantCard from '../../components/RestaurantCard';
import SafeAreaView from 'react-native-safe-area-view';
import {withNavigationFocus} from 'react-navigation';
import * as S from './styles';

import data from './content';

const Home = props => {
  return (
    <SafeAreaView>
      <S.HomeContainer>
        <S.Header>
          <S.Title>{''}</S.Title>
          <S.AvatarButton onPress={() => props.navigation.navigate('Profile')}>
            <S.Avatar
              source={{
                uri:
                  'http://guavadescontos.com/media/users/photo/IMG_20170612_072136_-_copia.jpg',
              }}
            />
          </S.AvatarButton>
        </S.Header>

        <S.RestaurantList
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
