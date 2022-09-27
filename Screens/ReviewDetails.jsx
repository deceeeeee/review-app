import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';
import Init from '../Init/Init';
import Card from '../Shared/Card';

import globalStyles from '../style';

const styles = globalStyles;
const customStyles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});

const ReviewDetails = (props) => {
    const { navigation } = props;
    const ratingImages = Init.images.ratings;
    
    const pressHandler = () => {
        navigation.goBack();
    };

    const title = navigation.getParam('title');
    const body = navigation.getParam('body');
    const rating = navigation.getParam('rating');
    
    const currentRatingImage = ratingImages[rating];

    return (
        <View style={styles.container}>
            <Card>
                <Text> {title} </Text>
                <Text> {body} </Text>
                <View style={customStyles.rating}>
                    <Text> GameZone Rating: </Text>
                    <Image source={currentRatingImage} />
                </View>
                {/* <Text style={styles.titleText}> {rating} </Text> */}
            </Card>
            <Button title="Back to fckin homepage" onPress={pressHandler} />
        </View>
    );
}

export default ReviewDetails;