import React from "react";
import { View, Text, StatusBar,ScrollView } from "react-native";
//icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
//components
import Stories from "../screenComponents/Stories"
import Posts from "../screenComponents/Posts"
const Home = () => {
  return (
    /* View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls */
    <View style={{backgroundColor:"white",height:"100%"}}>
      {/* displays the current time, WiFi and cellular network information, battery level and/or other status icons */}
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={{ justifyContent:'space-between',
     flexDirection:'row',
     paddingHorizontal: 15,
     alignItems: 'center'}}>
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{
            fontFamily:"Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{fontSize:24}}/>
      </View>
      {/* to scroll stories and posts */}
      <ScrollView>
        <Stories/>
        <Posts/>
      </ScrollView>
    </View>
  );
};

export default Home;