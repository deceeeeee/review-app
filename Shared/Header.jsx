import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header(props) {
    const { title, navigation } = props;

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            {/* Icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/images/heart_logo.png')} />
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        // color: '#333',
        color: '#fff',
        letterSpacing: 1
    },
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }, 
    icon: {
        position: 'absolute',
        left: 16,
        color: '#fff',
        zIndex: 5
        // color: '#333'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});

export default Header;