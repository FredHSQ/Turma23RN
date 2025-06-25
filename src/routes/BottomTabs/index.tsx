import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import CartIcon from '../../assets/CartIcon.png';
import ShopIcon from '../../assets/ShopIcon.png';
import SkillIcon from '../../assets/SkillIcon.png';
import { Cart } from '../../screens/Cart';
import { Shop } from '../../screens/Shop';
import { SkillScreen } from '../../screens/SkillScreen';


const Tab = createBottomTabNavigator<BottomTabsParamList>();

export type BottomTabsParamList = {
    Skill: undefined;
    Shop: undefined;
    Cart: undefined;
}

export function BottomTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
            tabBarInactiveTintColor: '#aaa',
            tabBarActiveTintColor: '#fff'
        }}
    >
        <Tab.Screen 
            name="Skill" 
            component={SkillScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        style={{ width: 30, tintColor: color }}
                        source={SkillIcon}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="Shop" 
            component={Shop} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        style={{ width: 30, tintColor: color }}
                        source={ShopIcon}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="Cart" 
            component={Cart} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        style={{ width: 30, tintColor: color }}
                        source={CartIcon}
                    />
                )
            }}
        />
    </Tab.Navigator>
  );
}