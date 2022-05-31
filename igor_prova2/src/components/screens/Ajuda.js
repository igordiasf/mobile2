import * as React from 'react';
import {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../tamanhos";
import Estilo from "../Estilo";


const Ajuda = ({navigation, route}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 5,
        bounciness: 20,
    }).start();

    return (

        <View>

            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Pagina de Ajuda </Animated.Text>

            <Text style={[Estilo.text, {fontSize: 12}]}>Endereco: Close to nowhere</Text>

            <Text style={[Estilo.text, {fontSize: 12}]}>
                Funcionamento: 08:00 - 18:00 hrs
            </Text>

            <Text style={[Estilo.text, {fontSize: 12}]}>
               Horario comercial
            </Text>

            <Text style={[Estilo.text, {fontSize: 12}]}>
                Numero: (32)32189157.
            </Text>

            <Botao
                colo="red"
                title="Voltar"
                action={() => navigation.goBack()}
            />
        </View>
    );
}

export default Ajuda;

