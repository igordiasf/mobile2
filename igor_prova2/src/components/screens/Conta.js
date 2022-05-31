import * as React from 'react';
import {useState} from 'react';
import {Animated, Switch, Text, TouchableOpacity, View} from 'react-native';
import Estilo from "../Estilo";
import Input from "../Input";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {tamanhos} from "../tamanhos";


const Conta = () => {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(null);
    const [genero, setGenero] = useState("Masculino");
    const [switchAtivado, setSwitchAtivado] = useState(false);
    const [limite, setLimite] = useState(0);

    const AtivarSwitch = () => setSwitchAtivado(previousState => !previousState);

    const Cadastrar = () => {

        let estudante;
        if (!switchAtivado) {
            estudante = "Não"
        } else {
            estudante = "Sim"
        }

        if (nome === "" || idade === null || limite === 0) {

            alert("Preencha os dados")

        } else {
            alert("Nome: " + nome + '\n' +
                "Idade: " + idade + '\n' +
                "Genero: " + genero + '\n' +
                "Estudante: " + estudante + '\n' +
                "Limite: " + limite.toFixed(2) + '\n'
            )
        }

    }

    const Resetar = () => {

        setNome("");
        setIdade(null);
        setLimite(0);
        setGenero("Masculino");
        setSwitchAtivado(false);

    }

    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 5,
        bounciness: 20,
    }).start();


    return (
        <View>
            

            <Text style={Estilo.label}>Nome:</Text>
            <Input
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"

            />
            <Text style={Estilo.label}>Idade:</Text>
            <Input
                onChangeText={setIdade}
                value={idade}
                placeholder="Idade"

            />
            <Text style={Estilo.label}>Genero:</Text>
            <Picker
                style={Estilo.input}
                Genero={genero}
                onValueChange={(itemValue) => setGenero(itemValue)
                }>
                <Picker.Item label="Masculino" value="Masculino"/>
                <Picker.Item label="Feminino" value="Feminino"/>
            </Picker>

            <Text style={Estilo.label}>Limite: {limite.toFixed(2)}</Text>
            <Slider
                style={Estilo.slider}
                minimumValue={0}
                maximumValue={1000}
                value={limite}
                onValueChange={setLimite}
            />

            <Text style={Estilo.label}>Estudante:</Text>
            <Switch
                style={Estilo.switch}
                trackColor={{false: Estilo.switch.false, true: Estilo.switch.true}}
                thumbColor={switchAtivado ? Estilo.switch.ativado : Estilo.switch.desativado}
                onValueChange={AtivarSwitch}
                value={switchAtivado}
            />

            <TouchableOpacity
                style={Estilo.touch}
                onPress={Cadastrar}
            >
                <Text style={[Estilo.label]}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[Estilo.touch,]}
                onPress={Resetar}
            >
                <Text style={[Estilo.label]}>Resetar</Text>
            </TouchableOpacity>
        </View>

    );

}

export default Conta;