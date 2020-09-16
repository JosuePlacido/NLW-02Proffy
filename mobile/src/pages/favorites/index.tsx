import React, { useState, useEffect } from "react";
import { View, ScrollView, AsyncStorage, Image, Text } from "react-native";
import {SearchForm,LabelInPrimary,ScrollViewDefault,ViewRight} from './styles';
import {ContainerDefault,ViewHorizontalCenter,ViewSubGroup} from '../../assets/styles/views';
import PageHeader from '../../conponents/page-header';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { useFocusEffect } from '@react-navigation/native';
import { DescriptionHeaderSmall } from "../../assets/styles/texts";
import emoji from "../../assets/images/icons/Favorito.png";
import {FavoriteProvider,useFavorites} from '../../contexts/favorites';
import {useAuth} from '../../contexts/auth';
import { Favorite } from "../../models/favorites";
export default function Favorites(){
	const {favorites,LoadFavorites} = useFavorites();
	const { user } = useAuth();
	useEffect(() => {
		user && LoadFavorites(user.id);
	},[]);
	return (
		<ContainerDefault>
			<PageHeader
				title="Estudar"
				description="Meus Proffys favoritos"
				headerRight={
					<ViewRight>
						<Image source={emoji} resizeMode="contain" />
						<DescriptionHeaderSmall>
							{favorites.length} proffys
						</DescriptionHeaderSmall>
					</ViewRight>
				}
			>
				<View>
					<Text></Text>
				</View>
			</PageHeader>
			<ScrollViewDefault>
				{favorites &&
					favorites.map(({ item }: Favorite,index:number) => {
						return (
							<TeacherItem
								key={index}
								teacher={item}
							/>
						);
					})}
			</ScrollViewDefault>
		</ContainerDefault>
	);
}