import * as React from 'react';
import Home from "./Home"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ajuda from "./Ajuda";

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Tela inicial" component={Home}/>
            <Stack.Screen name="Ajuda" component={Ajuda}/>
        </Stack.Navigator>


    );
}

export default HomeStack;