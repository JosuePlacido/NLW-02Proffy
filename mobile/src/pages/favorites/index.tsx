import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage, Image, Text } from "react-native";
import {SearchForm,LabelInPrimary,ScrollViewDefault,ViewRight} from './styles';
import {ContainerDefault,ViewHorizontalCenter,ViewSubGroup} from '../../assets/styles/views';
import PageHeader from '../../conponents/page-header';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { useFocusEffect } from '@react-navigation/native';
import { DescriptionHeaderSmall } from "../../assets/styles/texts";
import emoji from "../../assets/images/icons/Favorito.png";
export default function Favorites(){
    const [favorites,setFavorites] = useState([]);

    useFocusEffect(LoadFavorites);

    function LoadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });}
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
				<View><Text>{' '}</Text></View>
			</PageHeader>
			<ScrollViewDefault>
				{favorites.map((t: Teacher) => {
					return (
						<TeacherItem key={t.id} teacher={t} favorited={true} />
					);
				})}
			</ScrollViewDefault>
		</ContainerDefault>
	);
}