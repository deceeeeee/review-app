import { createStackNavigator } from 'react-navigation-stack';

import About from '../Screens/About';
import Header from '../Shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => {
                    return (<Header title="About GameZone!" navigation={navigation} />);
                }
            }
        }
    }
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#0bbfe1'
        }
    }
});

export default AboutStack;