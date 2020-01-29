import RecentMatchesScreen from '../screens/RecentMatchScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Colors, Typography} from '../styles';
const AppNavigator = createStackNavigator(
  {
    RecentMatches: RecentMatchesScreen,
  },
  {
    initialRouteName: 'RecentMatches',
    defaultNavigationOptions: {
      title: 'RECENT MATCHES',
      headerStyle: {
        backgroundColor: Colors.SecondaryColor,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        fontWeight: Typography.Bold,
      },
      headerTintColor: Colors.TextTitleColor,
      headerTitleAlign: 'center',
    },
  },
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
