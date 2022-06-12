import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

class BlogSpace extends React.Component {
    render() {
        // console.log(this.props.route.params)
        return(<React.Fragment>
            <SafeAreaView style={styles.container}>
                <View style={styles.headmenu}>
                    <View>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate("homefeed")}>
                            <Ionicons name="chevron-back" size={40} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headmenuright}>
                        <TouchableOpacity style={styles.headmenurightbuttons}>
                            <Feather name="headphones" size={40} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headmenurightbuttons}>
                            <MaterialIcons name="favorite-border" size={40} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headmenurightbuttons}>
                            <AntDesign name="sharealt" size={40} color="black" />
                        </TouchableOpacity>
                    </View> 
                </View>
                <ScrollView>
                <View style={styles.blogphoto}>
                    <Image style={styles.blogimage} source={this.props.route.params.feed_img} />
                </View>
                <View style={styles.bloginfo}>
                    <Text style={styles.title}>{this.props.route.params.title}</Text>
                    <View style={styles.author}>
                        <Image style={styles.authorimg} source={this.props.route.params.author_img} />
                        <Text style={[styles.authdet,styles.weight]}>{this.props.route.params.author}</Text>
                        <Text style={styles.authdet}>{this.props.route.params.date}</Text>
                    </View>
                </View>
                <View style={styles.blogmsg}>
                    <Text style={styles.story}>{this.props.route.params.message}</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>);
    }
  }
  export default BlogSpace

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headmenu: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    headmenuright: {
        flexDirection: 'row',
        
    },
    headmenurightbuttons: {
        marginHorizontal: 5
    },
    blogimage: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        borderWidth: 10,
        borderColor: 'rgb(255, 255, 255)'
    },
    blogphoto: {
        marginVertical: 10
    },
    bloginfo: {
        backgroundColor: 'rgb(255, 255, 255)',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 35,
        fontWeight: '400',
        color: 'rgb(50, 69, 88)'
    },
    authorimg: {
        width: 30,
        height: 30,
        borderRadius: 12
    },
    author: {
        justifyContent:'flex-start',
        flexDirection: 'row',
        marginVertical: 10
    },
    authdet: {
        alignSelf: 'center',
        fontSize: 15,
        marginHorizontal: 10,
        color: 'rgb(152, 162, 171)'
    },
    weight: {
        fontWeight: '500'
    },
    blogmsg: {
        backgroundColor: 'rgb(255, 255, 255)',
        marginVertical: 10,
        paddingHorizontal: 10
    },
    story: {
        fontSize: 18
    }
  });