import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../Shared/Card';
import ReviewForm from './ReviewForm';

import globalStyles from '../style';

const styles = globalStyles;
const customStyles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    openIcon: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    closeIcon: {
        marginTop: 20,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }
});

const Home = (props) => {
    const { navigation } = props;
    
    const [reviews, setReviews] = useState([
        {id: 3, title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum'},
        {id: 2, title: 'Gotta Catch Them All (again)', rating: 4, body: 'Lorem Ipsum'},
        {id: 1, title: 'Not So "Final Fantasy"', rating: 3, body: 'Lorem Ipsum'},
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const openReviewDetails = (detail) => {
        navigation.navigate('ReviewDetails', detail);
    };

    const addReview = (review) => {
        
        setReviews( (currentReviews) => {
            let newKey = reviews[0].id + 1;
    
            review.key = newKey;

            return [
                review,
                ...currentReviews
            ]
        } );

        setModalOpen(false);
    };

    const toggleKeyboard = () => {
        console.log(isKeyboardVisible);
        if(isKeyboardVisible) Keyboard.dismiss();
    }
    
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={toggleKeyboard}>
                    <View style={customStyles.modalContent}>
                        <MaterialIcons 
                            name="close"
                            size={24}
                            style={customStyles.closeIcon}
                            onPress={ () => setModalOpen(false) }
                        />
                        {/* <Text>
                            Hello from the modal :)
                        </Text> */}
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name="add"
                size={24}
                style={customStyles.openIcon}
                onPress={ () => setModalOpen(true) }
            />

            <FlatList
                data={reviews}
                renderItem={
                    ({item}) => {
                        return (
                            <TouchableOpacity onPress={() => openReviewDetails(item)}>
                                {/* <Text style={styles.cardItem}>{ item.title }</Text> */}
                                <Card>
                                    <Text style={styles.titleText}>
                                        { item.title }
                                    </Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
}

export default Home;