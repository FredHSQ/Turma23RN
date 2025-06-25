import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './BottomTabs';

export const Routes = () => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
}