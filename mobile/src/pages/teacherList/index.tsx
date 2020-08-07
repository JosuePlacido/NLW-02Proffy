import React,{useState, useEffect} from 'react';
import { View,ScrollView,Text,TextInput } from 'react-native';
import styles from './styles'
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
    const [teachers,setTeachers] = useState([]);
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
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton>
                    <Feather name="filter" size={20} color="#fff" onPress={handleFiltersVisible}/>
                </BorderlessButton>
            )}>
                {filtersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input} placeholder="Qual a matéria?"  placeholderTextColor="#c1bccc"
                                value={subject}
                                onChangeText={t =>setSubject(t)}/>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc"
                                value={week_day}
                                onChangeText={t =>setWeekDay(t)} />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horario</Text>
                                <TextInput style={styles.input} placeholder="Qual o horário?"  placeholderTextColor="#c1bccc"
                                value={time}
                                onChangeText={t =>setTime(t)}/>
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>

                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}>
                {teachers.map( (t:Teacher) => {
                return <TeacherItem key={t.id} teacher={t}
                favorited={favorites.includes(t.id)}/>
            })}
            </ScrollView>
        </View>
    );
}