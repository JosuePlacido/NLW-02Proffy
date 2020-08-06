import React from 'react';
import { Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native';
import GivaClassesBgImg from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function GiveClasses(){
    const navigation = useNavigation();
    function handleNavigateBack(){
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" style={styles.content} source={GivaClassesBgImg}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
            </ImageBackground>
            <RectButton style={styles.button} onPress={handleNavigateBack}>
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}