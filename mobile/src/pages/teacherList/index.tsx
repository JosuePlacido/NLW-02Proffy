import React,{useState, useEffect} from 'react';
import { View,ScrollView,Text,TextInput } from 'react-native';
import {SearchForm,LabelInPrimary,ScrollViewDefault} from './styles';
import {ContainerDefault,ViewHorizontalCenter,ViewSubGroup} from '../../assets/styles/views';
import {ButtonPrimary,TextLight} from '../../assets/styles/buttons';
import {Label, TextInputDefault} from '../../conponents/inputs/styles';
import PageHeader from '../../conponents/page-header';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
export default function TeacherList(){
    const [filtersVisible,setFiltersVisible] =  useState(false);
    const [subject,setSubject] =  useState('');
    const [week_day,setWeekDay] =  useState('');
    const [time,setTime] =  useState('');
    const [teachers,setTeachers] = useState([
        {
            id: 2,
            avatar: 'http://github.com/JosuePlacido.png',
            bio: 'bio',
            cost: 100,
            name: 'Josue Placido',
            subject: 'Artes',
			whatsapp: '45991091914',
			schedules:[
				{
					id:1,
					from:'00:00',
					to:'23:00',
					week_day:'1',
				},
				{
					id:2,
					from:'00:00',
					to:'23:00',
					week_day:'0',
				}
			]
        }
    ]);
    const [favorites,setFavorites] = useState<number[]>([]);

    //useEffect(LoadFavorites,[]);

    function LoadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIDs = favoritedTeachers.map((t:Teacher) => t.id);
                setFavorites(favoritedTeachersIDs);
            }
        });}

    function handleFiltersVisible(){
        setFiltersVisible(!filtersVisible);
    }

    async function handleFiltersSubmit(){
        LoadFavorites();
        const response = await api.get('classes',{
            params: {
                subject,week_day,time
            }
        });
        setFiltersVisible(false);
        setTeachers(response.data);
    }
    return (
        <ContainerDefault>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton>
                    <Feather name="filter" size={20} color="#fff" onPress={handleFiltersVisible}/>
                </BorderlessButton>
            )}>
                {filtersVisible && (
                    <SearchForm>
                        <LabelInPrimary>Matéria</LabelInPrimary>
                        <TextInputDefault placeholder="Qual a matéria?"  placeholderTextColor="#c1bccc"
                                value={subject}
                                onChangeText={t =>setSubject(t)}/>
                        <ViewHorizontalCenter>
                            <ViewSubGroup>
                                <LabelInPrimary>Dia da semana</LabelInPrimary>
                                <TextInputDefault placeholder="Qual o dia?" placeholderTextColor="#c1bccc"
                                value={week_day}
                                onChangeText={t =>setWeekDay(t)} />
                            </ViewSubGroup>
                            <ViewSubGroup>
                                <LabelInPrimary>Horario</LabelInPrimary>
                                <TextInputDefault placeholder="Qual o horário?"  placeholderTextColor="#c1bccc"
                                value={time}
                                onChangeText={t =>setTime(t)}/>
                            </ViewSubGroup>
                        </ViewHorizontalCenter>
                        <ButtonPrimary onPress={handleFiltersSubmit}>
                            <TextLight>
                                Filtrar
                            </TextLight>
                        </ButtonPrimary>
                    </SearchForm>
                )}
            </PageHeader>
            <ScrollViewDefault>
                {teachers.map( (t:Teacher) => {
                return <TeacherItem key={t.id} teacher={t}
                favorited={favorites.includes(t.id)}/>
            })}
            </ScrollViewDefault>
        </ContainerDefault>
    );
}