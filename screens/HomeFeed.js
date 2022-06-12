import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import tasteofcolors from '../assets/images/pexels-anna-shvets-4611959.jpg';
import lighthouse from '../assets/images/pexels-matt-hardy-11954484.jpg';
import bluetulips from '../assets/images/pexels-olga-libert-12115113.jpg';
import natgeowild from '../assets/images/pexels-suzy-hazelwood-11405496.jpg';
import dazzlingamie from '../assets/images/pexels-valera-evane-9818341.jpg';
import blossomday from '../assets/images/pexels-yaroslava-borz-11588694.jpg';
import classiccars from '../assets/images/pexels-yelena-odintsova-12194751.jpg';
import promikegassy from '../assets/images/pexels-cottonbro-6551763.jpg';
import procyrilmacheal from '../assets/images/pexels-cottonbro-6626882.jpg';
import proivyghassey from '../assets/images/pexels-dziana-hasanbekava-7275385.jpg';

const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Feugiat in ante metus dictum at tempor commodo ullamcorper. " +
  "Amet justo donec enim diam vulputate. Nibh ipsum consequat " + 
  "nisl vel pretium lectus quam id leo. Lorem sed risus ultricies " + 
  "tristique nulla aliquet enim tortor. Nec feugiat in fermentum posuere urna. " + 
  "Nibh sit amet commodo nulla facilisi nullam vehicula. Habitasse platea " + 
  "dictumst quisque sagittis purus sit amet. Adipiscing elit pellentesque " + 
  "habitant morbi tristique. Feugiat scelerisque varius morbi enim. " + 
  "Adipiscing bibendum est ultricies integer quis. Pellentesque massa " + 
  "placerat duis ultricies. Mattis vulputate enim nulla aliquet porttitor. " + 
  "Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. " + 
  "Pulvinar elementum integer enim neque volutpat ac. Vestibulum lectus mauris " + 
  "ultrices eros in. Risus commodo viverra maecenas accumsan lacus vel facilisis. " + 
  "Nisl vel pretium lectus quam id leo in. Volutpat diam ut venenatis tellus in " + 
  "metus vulputate eu scelerisque. Montes nascetur ridiculus mus mauris. " + 
  "Mauris nunc congue nisi vitae suscipit tellus mauris a diam. " + 
  "Velit laoreet id donec ultrices tincidunt arcu non sodales. Amet aliquam id " + 
  "diam maecenas ultricies mi eget mauris. Sed elementum tempus egestas sed sed " + 
  "risus pretium. Mattis nunc sed blandit libero volutpat sed cras. Odio ut sem " + 
  "nulla pharetra diam. Turpis massa tincidunt dui ut ornare lectus sit amet est. " + 
  "Ultrices dui sapien eget mi proin sed.";

const feed_data = [
  {feed_img: tasteofcolors, title: "A taste of colors around the world", author: "Ivy Ghassey", author_img: proivyghassey, date: "15/05/2022", message: message},
  {feed_img: lighthouse, title: "Travelling be sea is being encouraged", author: "Cyril Macheal", author_img: procyrilmacheal, date: "17/05/2022", message: message},
  {feed_img: bluetulips, title: "Wonders of nature discussed across religions", author: "Mike Gassy", author_img: promikegassy, date: "10/05/2022", message: message},
  {feed_img: natgeowild, title: "Surving the wild with a bottle of water and a camera", author: "Cyril Macheal", author_img: procyrilmacheal, date: "20/05/2022", message: message},
  {feed_img: dazzlingamie, title: "26 year old Full Stack Developers life style", author: "Ivy Ghassey", author_img: proivyghassey, date: "18/05/2022", message: message},
  {feed_img: blossomday, title: "Flowers make me beautiful said Princess of Wales", author: "Mike Gassy", author_img: promikegassy, date: "03/05/2022", message: message},
  {feed_img: classiccars, title: "Classic cars are not expensive if bought from owners", author: "Cyril Macheal", author_img: procyrilmacheal, date: "28/05/2022", message: message},
]

class HomeFeed extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return(<React.Fragment>
            <SafeAreaView style={styles.container}>
            <View style={styles.headmenu}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-grid" size={40} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.menutext}>Discover</Text>
                    <TouchableOpacity>
                        <Ionicons name="search" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <FlatList data={feed_data} keyExtractor={(item, index) => {return index}} renderItem={({item: {feed_img, title, author, author_img, date, message}}) => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("blogspace", { feed_img, title,author, author_img, date, message })}>
                        <View style={styles.grid}>
                            <View style={styles.patch}></View>
                            <Image style={styles.feedimg} source={feed_img} />
                            <View style={styles.anchor}>
                                <Text style={styles.title}>{title}</Text>
                                <View style={styles.details}>
                                    <Image style={styles.authorimg} source={author_img} />
                                    <Text style={styles.author}>{author}</Text>
                                    <Text style={styles.date}>{date}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />
            </SafeAreaView>
        </React.Fragment>)
    }
}
export default HomeFeed
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    headmenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    menutext: {
        fontSize: 40
    },
    grid: {
        flex: 0.5,
        marginVertical: 10,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
    },
    patch: {
        flex: 0.035,
        width: 60,
        height: 60,
        backgroundColor: 'rgb(249, 224, 227)'
    },
    feedimg: {
        flex: 0.45,
        width: 130,
        height: 170,
        position: 'relative',
        top: 10,
        right: 5
    },
    title: {
        flexWrap: 'wrap',
        fontSize: 26,
        color: 'rgb(72, 79, 90)'
    },
    authorimg: {
        width: 30,
        height: 30,
        borderRadius: 12,
        marginHorizontal: 3
    },
    author: {
        fontWeight: '500',
        color: 'rgb(81, 97, 113)',
        marginHorizontal: 3,
        alignSelf: 'center'
    },
    date: {
        color: 'rgb(152, 162, 171)',
        marginHorizontal: 3,
        alignSelf: 'center'
    },
    details: {
        flexDirection: 'row',
    },
    anchor: {
        flex: 0.5,
        justifyContent: 'space-around'
    }
});