import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeed from "./screens/HomeFeed";
import BlogSpace from "./screens/BlogSpace";
import NotReady from "./screens/NotReady";
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const BottomTab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <BottomTab.Screen name="home" children={StackNav} options={{tabBarIcon: ({focused}) => (
          <AntDesign name="home" size={24} style={{color: focused ? "blue" : "black"}} />
        )}} />
        <BottomTab.Screen name="feedlist" component={NotReady} options={{tabBarIcon: ({focused}) =>(
          <AntDesign name="folderopen" size={24} style={{color: focused ? "blue" : "black"}} />
        )}} />
        <BottomTab.Screen name="favorites" component={NotReady} options={{tabBarIcon: ({focused}) =>(
          <MaterialIcons name="favorite-border" size={24} style={{color: focused ? "blue" : "black"}} />
        )}} />
        <BottomTab.Screen name="profile" component={NotReady} options={{tabBarIcon: ({focused}) =>(
          <AntDesign name="user" size={24} style={{color: focused ? "blue" : "black"}} />
        )}} />
        <BottomTab.Screen name="settings" component={NotReady} options={{tabBarIcon: ({focused}) =>(
          <Feather name="settings" size={24} style={{color: focused ? "blue" : "black"}} />
        )}} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
const StackNav = () => {
  return(
  <NativeStack.Navigator screenOptions={{headerShown: false}}>
    <NativeStack.Screen name="homefeed" component={HomeFeed} />
    <NativeStack.Screen name="blogspace" component={BlogSpace} />
  </NativeStack.Navigator>
  );
}
