import {
    View,
    Animated,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import Ionic from "react-native-vector-icons/Ionicons";
  import Feather from "react-native-vector-icons/Feather";
  
  const Status = ({ route, navigation }) => {
    const { name } = route.params;
    const { image } = route.params;
  //timer for the story
    useEffect(() => {
      let timer = setTimeout(() => {
        navigation.goBack();
      }, 5000);
  //Animated timing allows for us to define an animation that takes a certain amount of time. 
  //it animates from 0 to 5 for 5000ms
      Animated.timing(progress, {
        toValue: 5,
        duration: 5000,
        useNativeDriver: false,
      }).start();
      return () => clearTimeout(timer);
    }, []);
    //animated.value:In order to create a value that can be animated we need to create a new value
    const [progress, setProgress] = useState(new Animated.Value(0));
  
    //The interpolate function allows animated values to be derived from other animated values.
    const progressAnimation = progress.interpolate({
      //interpolates outputrange with input range:interpolates output  from 0 to 100 when value become 0 to 5
      inputRange: [0, 5],
      outputRange: ["0%", "100%"],
    });
  
    return (
      <View style={styles.status}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.statusBar}>
          <Animated.View
            style={{
              height: "100%",
              backgroundColor: "white",
              width: progressAnimation,
            }}
          ></Animated.View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.images}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
            {/* close icon navigates to home page */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionic name="close" style={styles.icons} />
            </TouchableOpacity>
          </View>
          {/* to veiw image in larger dimensions */}
        </View>
        <Image source={image} style={styles.zoomImage} />
  
        {/* input box to send message to the story */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="send message"
            placeholderTextColor="white"
            style={styles.input}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="navigation" style={styles.feather} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    feather: {
      color: "white",
      fontSize: 30,
    },
    inputContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginVertical: 10,
      width: "100%",
    },
    input: {
      borderColor: "white",
      borderRadius: 25,
      width: "85%",
      height: 50,
      paddingLeft: 20,
      borderWidth: 1,
      fontSize: 20,
      color: "white",
    },
    zoomImage: {
      position: "absolute",
      width: "100%",
      height: 450,
    },
    icons: {
      fontSize: 20,
      color: "white",
      opacity: 0.6,
    },
    textContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
    },
    text: {
      color: "white",
      fontSize: 15,
      paddingLeft: 10,
      
    },
    imageContainer: {
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      top: 12,
      left: 0,
      width: "90%",
    },
    images: {
      borderRadius: 100,
      width: 30,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      borderRadius: 100,
      backgroundColor: "orange",
      resizeMode: "cover",
      width: "92%",
      height: "92%",
    },
    statusBar: {
      height: 3,
      width: "95%",
      borderWidth: 1,
      backgroundColor: "gray",
      position: "absolute",
      top: 12,
    },
    status: {
      backgroundColor: "black",
      height: "100%",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default Status;
  