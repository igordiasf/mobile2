import * as React from 'react';
import {Button, View} from "react-native";
import estilo from "./Estilo";


export const Botao = (props) => {
    return (
        <View style={estilo.botao}>
            <Button
                color={props.color}
                title={props.title}
                onPress={props.action}
            />
        </View>
    );
}
export default Botao;