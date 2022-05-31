import {StyleSheet} from 'react-native';

export default StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
    },

    paragraph: {
        margin: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },

    imagem: {
        height: 200,
        width: 100,
        alignSelf: "center",
    },

    botao: {
        width: 150,
        height: 30,
        alignSelf: 'center',
    },

    input: {
        height: 25,
        margin: 1,
        width: 300,
        borderWidth: 3,
        padding: 1,
        alignSelf: 'center',
    },

    text: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    slider: {
        width:250,
        height:25,
        alignSelf:'center'
    },

    switch:{
        true:"#00FF00",
        false: "#F08080",
        ativado:"#7B68EE",
        desativado:"#7B68EE",
        alignSelf:"center"
    },
    label:{

        fontSize: 12,
        marginLeft:'450px'

    },
    touch: {
        alignItems: "center",
        padding: 8,
        width: 250,
        height: 30,
        alignSelf:"center"
    }
});