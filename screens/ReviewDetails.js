import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { title, body,rating } = route.params;

  const images = {
    1:require('../assets/rating-1.png'),
    2:require('../assets/rating-2.png'),
    3:require('../assets/rating-3.png'),
    4:require('../assets/rating-4.png'),
    5:require('../assets/rating-5.png')
  }
  return (
    <View style={styles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.image}>
          <Text>GameZone rating :</Text>
          <Image source={images[rating]}/>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    padding:20
  },
  image:{
    borderTopWidth:1,
    borderTopColor:'#dcdcdc',
    flexDirection:'row',
    paddingTop:10,
    marginTop:10,
    justifyContent:'center',
    
  }
})
