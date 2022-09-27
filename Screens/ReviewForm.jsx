import React from 'react';
import {
    StyleSheet,
    Button,
    TextInput,
    View,
    Text
} from 'react-native';
import globalStyles from '../style';
import { Formik } from 'formik'; // Form Modules
import * as yup from 'yup'; // Validation
import FlatButton from '../Shared/Button'; // Custom Button

const reviewSchema = yup.object({
    title: yup.string()
            .label('Title')
            .required()
            .min(4),
    body: yup.string()
            .label('Body')
            .required()
            .min(8),
    rating: yup.string()
            .label('Rating')
            .required()
            .test( 'between-1-to-5', 'Rating must be a in between 1 - 5', (value) => {
                let val = parseInt(value);
                return val > 0 && val <= 5;
            } )
});

const ReviewForm = (props) => {
    const formObj = {
        title: '',
        body: '',
        rating: ''
    };

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={formObj}
                validationSchema={reviewSchema}
                onSubmit={
                    (values, actions) => {
                        console.log('Submitting');
                        actions.resetForm();
                        props.addReview(values);
                    }
                }
            >
                {
                    (props) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review Title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.title && props.errors.title}
                            </Text>

                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review Description'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.body && props.errors.body}
                            </Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating (1 - 5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                                keyboardType='numeric'
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.rating && props.errors.rating}
                            </Text>

                            <FlatButton
                                text="Submit"
                                onPress={props.handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    );
};

export default ReviewForm;