import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#dcdcdc" } }}
    >
      <Stack.Screen options={({navigation})=>(
            {
              headerTitle: ()=> <Header title="About" navigation={navigation}/>
            }
          )} name="About" component={About} />
    </Stack.Navigator>
  );
}
