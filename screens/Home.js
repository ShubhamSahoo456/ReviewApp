import React, { useState } from 'react';
import {View , Button, FlatList, TouchableOpacity, Text, StyleSheet, Modal,TouchableWithoutFeedback} from 'react-native'
import Card from '../shared/Card';
import { MaterialIcons } from "@expo/vector-icons";
import FormReview from '../screens/Formreview';



export default function HomeScreen({ navigation }) {
  const [modal,setModal] = useState(false)
  const [listItem, setListItem] = useState([
    {title:'shubham sahoo', rating: 5, body:'lorem csdbbdsh bdsvbhjs',key:"1"},
    {title:'Amit Thakur', rating: 3, body:'lorem csdbbdsh bdsvbhjs',key:"2"},
    {title:'Sohail Amjad', rating: 2, body:'lorem csdbbdsh bdsvbhjs',key:"3"},
    {title:'Salman', rating: 4, body:'lorem csdbbdsh bdsvbhjs',key:"4"}
  ])

  const pressHandler = (item) => {
    navigation.navigate('Review',item)
  }

  const reviewForm = (values) => {
    values.key = Math.random().toString()
    setListItem((prev)=>(
      [values,...prev]
    ))
    setModal(false)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Modal 
        visible={modal}
        animationType='slide'>
          <View style={styles.modal_content}>
            <MaterialIcons name='close' size={30} style={styles.close_btn} onPress={()=>setModal(false)}/>
            <FormReview reviewForm={reviewForm}/>
          </View>
      </Modal>
      <MaterialIcons name='add' size={24} style={styles.add_btn} onPress={()=>setModal(true)}/>
        <FlatList 
          data={listItem}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>pressHandler(item)}>
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  add_btn:{
    margin:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#dcdcdc'
  },
  close_btn:{
    margin:10,
    
    borderRadius:10,
    borderColor:'#dcdcdc'
  },
  modal_content:{
    flex:1,
    alignItems:'center',
    marginTop:50,
    
  }
})