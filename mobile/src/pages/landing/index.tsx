import React,{useState,useEffect} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesICon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import {useNavigation, NavigationContainer, useFocusEffect} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
function Landing(){
    const [totalConnections,setTotalConnection] = useState(0);
    useFocusEffect(() =>{
        api.get('connections').then(response => {
            const {total} = response.data;
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
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg}/>
            <Text style={styles.title}>
                Seja bem vindo,{'\n'}
                <Text style={styles.titleBold} >o que deseja fazer?</Text>                
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button,styles.buttonPrimary]}
                onPress={handleNavigateToStudyPage}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button,styles.buttonSecondary]}
                onPress={handleNavigateToGiveClassesPage}>
                    <Image source={giveClassesICon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
        )
}

export default Landing;