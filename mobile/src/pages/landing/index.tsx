import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesICon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import {useNavigation, NavigationContainer} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler';
function Landing(){
    const navigation = useNavigation();
    function handleNavigateToGiveClassesPage(){
        navigation.navigate('GivaClasses');
    }
    function handleNavigateToStudyPage(){
        navigation.navigate('StudyTabs');
    }
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg}/>
            <Text style={styles.title}>
                Seja bem vindo,{'\n'}
                <Text style={styles.titleBold} >o que deseja fazer?</Text>                
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button,styles.buttonPrimary]}
                onPress={handleNavigateToGiveClassesPage}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button,styles.buttonSecondary]}
                onPress={handleNavigateToStudyPage}>
                    <Image source={giveClassesICon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 200 conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
        )
}

export default Landing;