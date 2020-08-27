import React, { useState } from 'react';
import {View,Image,Text, Linking,TouchableOpacity} from 'react-native';
import {ViewProfileInfo,Bio,Price,PriceValue,FavoriteButton,ContactButton} from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Title,ItemSubTitle } from '../../assets/styles/texts';
import { TextLightWithICon } from '../../assets/styles/buttons';
import { Avatar } from '../../assets/styles/images';
import { ContainerItem,ViewHorizontalCenterPadding,ItemFooter
    ,ViewHorizontalCenter } from '../../assets/styles/views';
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
        <ContainerItem>
            <ViewHorizontalCenterPadding>
                <Avatar source={{ uri:teacher.avatar}}/>
                <ViewProfileInfo>
                    <Title>{teacher.name}</Title>
                    <ItemSubTitle>{teacher.subject}</ItemSubTitle>
                </ViewProfileInfo>
            </ViewHorizontalCenterPadding>
            <Bio>
                {teacher.bio}
            </Bio>
            <ItemFooter>
                <Price>
                    Preço/hora{'    '}
                    <PriceValue>R$ {teacher.cost}</PriceValue>
                </Price>
                <ViewHorizontalCenter>
                    <FavoriteButton onPress={handleFavorite} backgroundColor={isFavorited?'#e33d3d':'#8557e5'}>
                        {isFavorited?<Image source={unfavorite}/>:<Image source={heartIcon}/> }
                    </FavoriteButton>
                    <ContactButton onPress={handleLinkToWhatsApp}>
                        <Image source={whatsAppIcon}/>
                        <TextLightWithICon>Entre em contato</TextLightWithICon>
                    </ContactButton>
                </ViewHorizontalCenter>
            </ItemFooter>
        </ContainerItem>
    );
}
export default TeacherItem;