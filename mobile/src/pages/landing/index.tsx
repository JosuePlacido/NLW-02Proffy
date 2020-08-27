import React,{useState} from 'react';
import { Text, View, Image } from 'react-native';
import { ContainerPrimary,ViewHorizontalCenter } from '../../assets/styles/views';
import { Banner } from '../../assets/styles/images';
import { TitleLightPoppins,TitleLightPoppinsBold } from '../../assets/styles/texts';
import { TextLightBig } from '../../assets/styles/buttons';
import {ButtonPrimary,ButtonSecondary,FooterDescription} from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesICon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import {useNavigation, NavigationContainer, useFocusEffect} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
import {useAuth} from '../../contexts/auth';
function Landing(){
    const { signOut,user } = useAuth();
    const [totalConnections,setTotalConnection] = useState(0);
    useFocusEffect(() =>{
        console.log(api.defaults.headers);
        api.get('home').then(response => {
            const {total} = response.data;
            console.log(response);
            setTotalConnection(total);
        })
    });
    const navigation = useNavigation();
    function handleNavigateToGiveClassesPage(){
        navigation.navigate('GivaClasses');
    }
    function handleNavigateToStudyPage(){
        navigation.navigate('StudyTabs');
    }
    function handleLogout(){
        signOut();
    }
    return (
        <ContainerPrimary>
            <Banner source={landingImg}/>
            <TitleLightPoppins>
                Seja bem vindo,{'\n'}
                <TitleLightPoppinsBold>o que deseja fazer?</TitleLightPoppinsBold>                
            </TitleLightPoppins>
            <ViewHorizontalCenter>
                <ButtonPrimary
                    onPress={handleNavigateToStudyPage}>
                    <Image source={studyIcon}/>
                    <TextLightBig>Estudar</TextLightBig>
                </ButtonPrimary>
                <ButtonSecondary
                    onPress={handleNavigateToGiveClassesPage}>
                    <Image source={giveClassesICon}/>
                    <TextLightBig>Dar aulas</TextLightBig>
                </ButtonSecondary>
            </ViewHorizontalCenter>
                <RectButton
                    onPress={handleLogout}>
                    <Text>{user?.name}</Text>
                </RectButton>
            <FooterDescription>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </FooterDescription>
        </ContainerPrimary>
        )
}

export default Landing;