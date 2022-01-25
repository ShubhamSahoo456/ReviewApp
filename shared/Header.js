import React from 'react';
import {View ,Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({navigation,title}) {

    return(
        <>
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <View style={styles.header}>
            <MaterialIcons  name='menu' size={28} style={styles.icon} onPress={()=>navigation.openDrawer()}/>
          
            <Image source={require('../assets/heart_logo.png')} style={styles.logo}/>
            <Text style={styles.text}>{title}</Text>
          
        </View>
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        position:'relative',
        left:4
    },
    text:{
        position:'absolute',
        left:140,
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:2
    },
    logo:{
        width:26,
        height:26,
        position:'absolute',
        left:100,
    },
    bg:{

    }
})