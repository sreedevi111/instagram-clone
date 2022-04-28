import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Posts = () => {
    //posts by different users
  const postInfo = [
    {
      postTitle: "sree",
      postPersonImage: require("../../storage/images/image1.jpg"),
      postImage: require("../../storage/images/image2.jpg"),
      likes: 356,
      isLiked: false,
    },
    {
      postTitle: "binu",
      postPersonImage: require("../../storage/images/image3.jpg"),
      postImage: require("../../storage/images/image3.jpg"),
      likes: 123,
      isLiked: false,
    },
    {
      postTitle: "aleena",
      postPersonImage: require("../../storage/images/myimage.png"),
      postImage: require("../../storage/images/image2.jpg"),
      likes: 290,
      isLiked: false,
    },
  ];
  return (
    <View>
        {postInfo.map((data,index) => {
            //toggling like
          const [like,setLike] = useState(data.isLiked)
         return(
             /* bottom border after each post */
            <View 
            key={index} 
            style={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,

                }}>
                    {/* post username and user image */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={data.postPersonImage} 
                        style={{width: 40, height: 40, borderRadius: 100}} />
                    <View style={{paddingLeft: 5}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {data.postTitle}
                        </Text>
                    </View>
                    
                    </View>
                    <Feather name="more-vertical" style={{fontSize: 20}} />
                </View>
                {/* post image */}
                <View style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={data.postImage} style={{width:'100%', height:400}}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 15,

                }}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        {/* changes when like button activates */}
                        <TouchableOpacity onPress={() => setLike(!like)}>
                        <AntDesign 
                        name={like ? 'heart' : 'hearto'} 
                        style={{
                            paddingRight: 10,
                            fontSize: 20,
                            color: like ? 'red' : 'black',
                        }} 
                        
                        />
                        </TouchableOpacity>
                   {/* comment icon */}
                        <TouchableOpacity>
                            <Ionicons 
                            name='ios-chatbubble-outline' 
                            style={{fontSize: 20, paddingRight: 10}}
                            />
                        </TouchableOpacity>
                        {/* share icon */}
                        <TouchableOpacity>
                            <Feather 
                            name='navigation' 
                            style={{fontSize: 20}}
                            />
                        </TouchableOpacity>
                        {/* save post icon */}
                    </View>
                    <Feather name="bookmark" style={{fontSize: 20}}/>
                </View>
                {/* to view the persons who liked the image and number of likes */}
                <View style={{paddingHorizontal: 15}}>
                    <Text>
                        Liked by {like ? "you and" : ''}
                        {like ? data.likes + 1 : data.likes} others
                    </Text>
                    {/* caption */}
                    <Text 
                    style={{
                    fontWeight: '700',
                    fontSize: 14,
                    paddingVertical: 2,
                    fontFamily: 'notoserif',
                    }}>
                      "Have a Good day"
                    </Text>
                    <Text style={{opacity: 0.4, 
                    paddingVertical: 2,
                    }}>
                        View all comments
                    </Text>
                    {/* commnet section */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{
                          flexDirection: 'row', 
                          alignItems: 'center'
                          }}>
                          <Image source={data.postPersonImage} 
                          style={{
                              width: 25,
                              height: 25,
                              borderRadius: 100,
                              backgroundColor: 'orange',
                              marginRight: 10,
                          }}/>
                          <TextInput placeholder='Add a comment' 
                          style={{opacity: 0.5}} 
                          />
                          </View>  
                            <View 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                {/* emojis for comments */}
                                <Entypo name='emoji-happy' 
                                style={{
                                    fontSize: 15,
                                    color: 'lightblue',
                                    marginRight: 10,
                                }}
                                />
                                <Entypo name='emoji-neutral' 
                                style={{
                                    fontSize: 15,
                                    color: 'lightgreen',
                                    marginRight: 10,
                                }}
                                />
                                <Entypo name='emoji-sad' 
                                style={{
                                    fontSize: 15,
                                    color: 'brown',
                                }}
                                />
                            </View>
                    </View>
                </View>

            </View>
     ) 
      
      })}
    </View>
  )
}

export default Posts