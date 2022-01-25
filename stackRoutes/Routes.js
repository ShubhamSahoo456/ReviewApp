import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/Header'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: "#dcdcdc" }}}
        >
          <Stack.Screen options={({navigation})=>(
            {
              headerTitle: ()=> <Header title="GameZone" navigation={navigation}/>
            }
          )} name="Home" component={Home} />
          <Stack.Screen name="Review" component={ReviewDetails} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}
