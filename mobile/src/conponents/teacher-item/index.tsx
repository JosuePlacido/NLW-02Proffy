import React, { useState } from 'react';
import {View,Image,Text, Linking} from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
  }
  export interface TeacherItemProps{
    teacher: Teacher;
    favorited:boolean;
  }
const TeacherItem:React.FC<TeacherItemProps>= ({teacher,favorited}) => {
    
    const [isFavorited,setIsFavorited] =  useState(favorited);
    function handleLinkToWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
        api.post('connections',{
            user_id:teacher.id
        });
    }
    async function handleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = []; 
        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }
        if(isFavorited){
            const favoriteIndex= favoritesArray.findIndex((t:Teacher) => {
                return t.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex,1);
            setIsFavorited(false);
        }else{
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                   source={{ uri:teacher.avatar}}
                   />
                   <View style={styles.profileInfo}>
                        <Text style={styles.name}>{teacher.name}</Text>
                        <Text style={styles.subject}>{teacher.subject}</Text>
                   </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preçi/hora{'    '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton onPress={handleFavorite} style={[styles.favoriteButton,isFavorited?styles.favorited:{}]}>
                        {isFavorited?<Image source={unfavorite}/>:<Image source={heartIcon}/> }
                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
                        <Image source={whatsAppIcon}/>
                        <Text style={styles.contactButtonText}>Entre em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
export default TeacherItem;