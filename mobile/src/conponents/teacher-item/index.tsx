import React, { useState,useEffect } from 'react';
import {View,Image,Text, Linking,TouchableOpacity} from 'react-native';
import {
	ViewProfileInfo,
	Bio,
	Price,
	PriceValue,
	FavoriteButton,
	ContactButton,
	Footer,
	PreFooter,ViewHeaderSchedule,ViewScheduleItem,
	TextHeaderSchedule,
} from "./styles";
import { RectButton } from 'react-native-gesture-handler';
import nextIcon from "../../assets/images/icons/next.png";
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {
	Title,
	ItemSubTitle,
	Archivo16SecondaryText,
} from "../../assets/styles/texts";
import { TextLightWithICon } from '../../assets/styles/buttons';
import { Avatar } from '../../assets/styles/images';
import { ContainerItem,ViewHorizontalCenterPadding
    ,ViewHorizontalCenter, ItemFooter } from '../../assets/styles/views';
import { ClassSchedule } from '../../models/class_schedule';
import {useFavorites} from '../../contexts/favorites';
import {useAuth} from '../../contexts/auth';
export interface Teacher {
	id: number;
	avatar: string;
	bio: string;
	cost: number;
	name: string;
	subject: string;
	whatsapp: string;
	schedules: ClassSchedule[];
}
  export interface TeacherItemProps{
    teacher: Teacher;
  }
const days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
const TeacherItem:React.FC<TeacherItemProps>= ({teacher}) => {
    const [isFavorited,setIsFavorited] =  useState(true);
    const { addFavorite, remove, favoritesId } = useFavorites();
	const {user} =  useAuth();

	useEffect(() => {
		setIsFavorited(favoritesId.includes(teacher.id))}, [favoritesId]);

    function handleLinkToWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
        api.post('connections',{
            user_id:teacher.id
        });
    }
    async function handleFavorite(){
        if (isFavorited) {
			await remove(user.id, teacher.id);
			setIsFavorited(false);
		} else {
			await addFavorite(user.id, teacher.id);
			setIsFavorited(true);
		}
    }

    return (
		<ContainerItem>
			<ViewHorizontalCenterPadding>
				<Avatar source={{ uri: teacher.avatar }} />
				<ViewProfileInfo>
					<Title>{teacher.name}</Title>
					<ItemSubTitle>{teacher.subject}</ItemSubTitle>
				</ViewProfileInfo>
			</ViewHorizontalCenterPadding>
			<Bio>{teacher.bio}</Bio>
			<PreFooter>
				<ViewHeaderSchedule>
					<TextHeaderSchedule>Dia</TextHeaderSchedule>
					<TextHeaderSchedule>{' '}</TextHeaderSchedule>
					<TextHeaderSchedule>Horário</TextHeaderSchedule>
				</ViewHeaderSchedule>
				{teacher.schedules &&
					teacher.schedules.map(({ id, week_day, from, to },index) => (
						<ViewScheduleItem key={index}>
							<Archivo16SecondaryText>{days[parseInt(week_day)]}</Archivo16SecondaryText>
							<Image source={nextIcon} resizeMode="contain" />
							<Archivo16SecondaryText>
								{from.substring(0, 2)}h-{to.substring(0, 2)}h
							</Archivo16SecondaryText>
						</ViewScheduleItem>
					))}
			</PreFooter>
			<Footer>
				<Price>
					Preço/hora{"    "}
					<PriceValue>R$ {teacher.cost}</PriceValue>
				</Price>
				<ViewHorizontalCenter>
					<FavoriteButton
						onPress={handleFavorite}
						backgroundColor={isFavorited ? "#e33d3d" : "#8557e5"}
					>
						{isFavorited ? (
							<Image source={unfavorite} />
						) : (
							<Image source={heartIcon} />
						)}
					</FavoriteButton>
					<ContactButton onPress={handleLinkToWhatsApp}>
						<Image source={whatsAppIcon} />
						<TextLightWithICon>Entre em contato</TextLightWithICon>
					</ContactButton>
				</ViewHorizontalCenter>
			</Footer>
		</ContainerItem>
	);
}
export default TeacherItem;