import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabBar from '../components/TabBar';
import Icon from '../components/TabBar/icons';
import HomeScreen from '../containers/Home';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => <Icon name="Home" />,
      },
    },
    Reserva: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Reservas',
        tabBarIcon: ({tintColor}) => <Icon name="Reserves" />,
      },
    },
    Go: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Go's",
        tabBarIcon: ({tintColor}) => <Icon name="Gos" />,
      },
    },
    Chat: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => <Icon name="Chat" />,
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#4F4F4F',
      inactiveTintColor: '#ddd',
    },
  },
);

const Navigator = createStackNavigator(
  {
    Tab: {screen: TabNavigator},
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Navigator);
