import React from 'react';
import {View,Button,StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Text} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validateSchema = yup.object({
    title:yup.string()
            .required()
            .min(4),
    body:yup.string()
            .required()
            .min(10),
    rating:yup.string()
            .required()
            .test('is-num-1-5','Rating must be a number 1-5',(val)=>{
                return parseInt(val) >0 && parseInt(val)<6
            })
})


export default function FormReview ({reviewForm}) {

    return(
        <>
        <TouchableWithoutFeedback style={styles.form_content} onPress={()=>Keyboard.dismiss()}>
        <View>
            <Formik 
                initialValues={{
                    title:'',
                    body:'',
                    rating:''
                }}
                validationSchema={validateSchema}
                onSubmit={(values,actions)=>{
                    reviewForm(values)
                    actions.resetForm()
                }}>
                {
                    (props)=>(
                        <View style={styles.form_content}>
                            <TextInput 
                                style={styles.input}
                                placeholder='Review Title'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={styles.error_text}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline 
                                style={styles.input}
                                placeholder='Review Body'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={styles.error_text}>{props.touched.body && props.errors.body}</Text>
                            <TextInput
                                keyboardType='numeric' 
                                style={styles.input}
                                placeholder='Review Rating'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={styles.error_text}>{props.touched.rating && props.errors.rating}</Text>
                            <View style={styles.submit_btn}>
                                <Button title='Submit' color='#fff' onPress={props.handleSubmit}/>
                            </View>
                                
                        </View>
                    )
                }
            </Formik>
        </View>
        </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        borderWidth:1,
        width:300,
        borderRadius:10,
        marginBottom:10
    },
    form_content:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        
    },
    submit_btn:{
        backgroundColor:'#f01d01',
        width:300,
        borderRadius:10
    },
    error_text:{
        color:'crimson',
        marginBottom:10,
        marginTop:-8,
        fontWeight:'bold',
        
    }
})