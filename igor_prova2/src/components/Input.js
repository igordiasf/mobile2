import React from "react";
import {TextInput} from "react-native";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import estilo from "./Estilo";

const Input = (props) => {


    return (
        <View>

            <TextInput
                style={estilo.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />

        </View>
    );
};


export default Input;