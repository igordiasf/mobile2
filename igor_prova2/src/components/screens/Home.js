import * as React from 'react';
import {useState} from 'react';
import {Animated, View} from 'react-native';
import Botao from "../Botao";
import Estilo from "../Estilo";
import {tamanhos} from "../tamanhos";


const Home = ({navigation}) => {

    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 100,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAltura,
        duration: 1000,
    }).start();

    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 1,
        bounciness: 20,
    }).start();

    return (

        <View>
            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Banco do povo! </Animated.Text>
            <Animated.Image source={require("../../../assets/images.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura}}
            />

            <Botao
                color="red"
                title="Ajuda"
                action={() => navigation.navigate("Ajuda")}

            />
        </View>
    );
}

export default Home;

