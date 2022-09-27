import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import globalStyles from '../style';

const styles = globalStyles;

const About = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}> About Screen </Text>
        </View>
    );
}

export default About;