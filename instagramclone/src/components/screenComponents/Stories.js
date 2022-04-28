import {Text, ScrollView, TouchableOpacity, View,Image,StyleSheet } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
//pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
import {useNavigation} from "@react-navigation/native"

const Stories = () => {
  const navigation = useNavigation()
  //story info of different users
  const storyInfo =[
{
  id:1,
  name:"your story",
  image:require("../../storage/images/myimage.png")
},
{
  id:2,
  name:"gintu",
  image:require("../../storage/images/image2.jpg")
},
{
  id:3,
  name:"binu",
  image:require("../../storage/images/image3.jpg")
},
{
  id:4,
  name:"nithish",
  image:require("../../storage/images/image4.jpg")
},
{
  id:5,
  name:"teenu_123",
  image:require("../../storage/images/image5.jpg")
},
{
  id:6,
  name:"Nila90",
  image:require("../../storage/images/image6.jpg")
}




  ]
  return (
    /* to scroll stories horizontally */
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.stories}>
{
  storyInfo.map((data,index)=>{
    return(
      /* able to touch so that we can view it as large image */
      <TouchableOpacity key={index}  onPress={()=>navigation.push("Status",{
        name:data.name,
        image:data.image
      })}>
        <View style={styles.view}>
          {//if id is 1 then plus icon should be shown
          data.id===1?(
            <View style={styles.views}>
              <Entypo name="circle-with-plus" style={styles.story}/>
              </View>
          ):null
    }
  {/* view for displaying image and username */}
    <View style={styles.imageContainer}>
      <Image source={data.image} style={styles.image}/>
    </View>
    <Text style={{
                    textAlign: 'center',
                    fontSize: 10,
                    opacity: data.id == 0 ? 1 : 0.5,
                }}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    )
  })
}
    </ScrollView>
  )
}
//styling
const styles = StyleSheet.create({
 
  view:{
  flexDirection:"column",
  paddingHorizontal:8,
  position:"relative"
  },
  views:{
  position:"absolute",
  bottom:15,
  right:10,
  zIndex:1,
  },
  imageContainer:{
    width:68,
    height:68,
    backgroundColor:"white"
  },
  image:{
  resizeMode:"cover",
  width:"92%",
  height:"92%",
  borderRadius:100,
  backgroundColor:"white",
  borderWidth:1.8,
  borderRadius:100,
  justifyContent:"center",
  alignItems:"center"

  },
  stories:{
    paddingVertical:20,
  },
  story:{
    fontSize:20,
    color:"#405de6",
    backgroundColor:"white",
    borderRadius:100
  }
})
export default Stories