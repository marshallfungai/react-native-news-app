
import FeedScreen from "./FeedScreen";
import Settings from "./Settings";
import Favorites from "./Favorites";
import SideMenu from "../navigation/SideMenu";
import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';  
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Slider } from "react-native";


// const navOptionsHandler = ({
//   header: null
// });

// const FeedStack = createStackNavigator({
//   Feed: {
//     screen: FeedScreen,=
//     navigationOptions: navOptionsHandler,
//   },
//   FeedDetail: {
//     screen: FeedDetail,
//     navigationOptions: navOptionsHandler,
//   }
// });



const MyDrawerNavigator = createDrawerNavigator({
  Feed: {
    screen: FeedScreen,
  },
  Favorites: {
    screen: Favorites,
  },
  Settings: {
    screen: Settings,
  }
},{
  contentComponent: SideMenu,
  drawerType: Slider
});

export default MainScreenRouter = createAppContainer(MyDrawerNavigator);