import React from 'react';
import { Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native';
import GivaClassesBgImg from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation,StackRouterOptions, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons, Feather } from '@expo/vector-icons';

type Params = { name: string,description:string };

type ScreenProps = { language: string };

export default function Confirm<
Params,
ScreenProps
>(props:any){
    const navigation = useNavigation();
    function handleNavigateBack(){
        navigation.navigate('StudyTabs');
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" style={styles.content} source={GivaClassesBgImg}>                
                <Ionicons name="ios-checkmark" style={styles.icon} size={70} />
                <Text style={styles.title}>{props.route.params.title}</Text>
                <Text style={styles.description}>{props.route.params.description}</Text>
            </ImageBackground>
            <RectButton style={styles.button} onPress={handleNavigateBack}>
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}