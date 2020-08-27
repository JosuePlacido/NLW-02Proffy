import React from 'react';
import { Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native';
import GivaClassesBgImg from '../../assets/images/give-classes-background.png';
import styles,{ Title,Description } from './styles';
import {ButtonPrimary,TextLight} from '../../assets/styles/buttons';
import {ContainerPrimary} from '../../assets/styles/views';
import {} from '../../assets/styles/texts';
import {Background} from '../../assets/styles/images';
import { useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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
        <ContainerPrimary>
            <Background resizeMode="contain" source={GivaClassesBgImg}>                
                <Ionicons name="ios-checkmark" style={styles.icon} size={70} />
                <Title>{props.route.params.title}</Title>
                <Description>{props.route.params.description}</Description>
            </Background>
            <ButtonPrimary onPress={handleNavigateBack}>
                <TextLight>Tudo bem</TextLight>
            </ButtonPrimary>
        </ContainerPrimary>
    );
}