import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import {SearchForm,LabelInPrimary,ScrollViewDefault} from './styles';
import {ContainerDefault,ViewHorizontalCenter,ViewSubGroup} from '../../assets/styles/views';
import PageHeader from '../../conponents/page-header';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { useFocusEffect } from '@react-navigation/native';
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
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollViewDefault>
            {favorites.map( (t:Teacher) => {
                return <TeacherItem key={t.id} teacher={t}
                favorited={true}/>
            })}
            </ScrollViewDefault>
        </ContainerDefault>
    );
}