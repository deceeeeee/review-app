import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';

import Header from '../Shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => {
                    return (<Header title="GameZone!" navigation={navigation} />);
                }
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#0bbfe1'
            // backgroundColor: 'red'
        }
    }
});

export default HomeStack;