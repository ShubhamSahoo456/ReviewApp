import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function Card (props) {

    return(
        <>
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        width:300,
        marginVertical:10,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.3,
        shadowColor:'#333',
        shadowRadius:3,
    },
    cardContent:{
        marginVertical:20,
        marginHorizontal:10
    }
})