import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles'
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
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}>
            {favorites.map( (t:Teacher) => {
                return <TeacherItem key={t.id} teacher={t}
                favorited={true}/>
            })}
            </ScrollView>
        </View>
    );
}