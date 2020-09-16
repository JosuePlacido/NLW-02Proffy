import React,{useState, useEffect} from 'react';
import {
	View,
	ScrollView,
	Text,
	TextInput,
	FlatList,
	Image,
	ListRenderItem,
	Picker,
	ActivityIndicator,
} from "react-native";
import {
	SearchForm,
	LabelInPrimary,
	ScrollViewDefault,
	ViewRight,
	ViewFilter,
} from "./styles";
import {
	ContainerDefault,
	ViewHorizontalCenter,
	ViewPadding,
	ViewSubGroup,
	ViewHorizontalCenterPadding,
} from "../../assets/styles/views";
import {ButtonPrimary,TextLight} from '../../assets/styles/buttons';
import { DescriptionHeaderSmall } from "../../assets/styles/texts";
import {Label, TextInputDefault} from '../../conponents/inputs/styles';
import PageHeader from '../../conponents/page-header';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import emoji from '../../assets/images/icons/Encontrado.png'
import PickerDefault from '../../conponents/picker';
import { useFavorites } from "../../contexts/favorites";
import { useAuth } from "../../contexts/auth";
export default function TeacherList(){
    const [filtersVisible,setFiltersVisible] = useState(false);
    const [subject,setSubject] = useState('Artes');
    const [week_day,setWeekDay] = useState('0');
    const [time,setTime] = useState('');
    const [loading,setLoading] = useState(false);
    const [fully,setFully] = useState(false);
    const [page,setPage] =  useState(0);
    const [teachers,setTeachers] = useState<Teacher[]>([]);
    const [favorites,setFavorites] = useState<number[]>([]);
    const { LoadFavorites } = useFavorites();
	const { user } = useAuth();
	useEffect(() => {
		user && LoadFavorites(user.id);
	},[]);

    function handleFiltersVisible(){
        setFiltersVisible(!filtersVisible);
    }
	async function LoadMoreProffys(){
		if (loading || fully) return;
		setLoading(true);
		setPage(page+1);
        const response = await api.get("classes", {
			params: {
				subject,
				week_day,
				time,
				page,
			},
		});
		setTeachers([...teachers,...response.data]);
		if (response.data.lenght == 0 || response.data.length < 10){
			setFully(true);
		} ;
		setLoading(false);
	}
    async function handleFiltersSubmit() {
		setLoading(true);
		//LoadFavorites();
		setPage(1);
		const response = await api.get("classes", {
			params: {
				subject,
				week_day,
				time,
				page,
			},
		});
		setFiltersVisible(false);
		setTeachers(response.data);
		if (response.data.length > 10) {
			setFully(false);
		}else{
			setFully(true);
		}
		setLoading(false);
	}
    return (
		<ContainerDefault>
			<PageHeader
				title="Estudar"
				description="Proffys disponíveis"
				headerRight={
					<ViewRight>
						<Image source={emoji} resizeMode="contain" />
						<DescriptionHeaderSmall>
							{teachers.length} proffys
						</DescriptionHeaderSmall>
					</ViewRight>
				}
			>
				<ViewFilter>
					<BorderlessButton
						style={{ flexDirection: "row" }}
						onPress={handleFiltersVisible}
					>
						<Feather name="filter" size={20} color="#04D361" />
						<DescriptionHeaderSmall>
							Filtrar por dia, matéria e hora
						</DescriptionHeaderSmall>
					</BorderlessButton>
				</ViewFilter>
				{filtersVisible && (
					<SearchForm>
						<LabelInPrimary>Matéria</LabelInPrimary>
						<PickerDefault
							placeholder="Matéria"
							selectedValue={subject}
							onValueChange={(e: string) => {
								setSubject(e);
							}}
						>
							<Picker.Item
								label="Artes"
								value="Artes"
							></Picker.Item>
							<Picker.Item
								label="Matemática"
								value="Matematica"
							></Picker.Item>
							<Picker.Item
								label="Inglês"
								value="Ingles"
							></Picker.Item>
							<Picker.Item
								label="Geografia"
								value="Geografia"
							></Picker.Item>
						</PickerDefault>
						<ViewHorizontalCenter>
							<ViewSubGroup>
								<LabelInPrimary>Dia da semana</LabelInPrimary>
								<PickerDefault
									selectedValue={week_day}
									onValueChange={(e: string) => setWeekDay(e)}
								>
									<Picker.Item value="0" label="Domingo" />
									<Picker.Item
										value="1"
										label="Segunda-feira"
									/>
									<Picker.Item
										value="2"
										label="Terça-feira"
									/>
									<Picker.Item
										value="3"
										label="Quarta-feira"
									/>
									<Picker.Item
										value="4"
										label="Quinta-feira"
									/>
									<Picker.Item
										value="5"
										label="Sexta-feira"
									/>
									<Picker.Item value="6" label="Sábado" />
								</PickerDefault>
							</ViewSubGroup>
							<ViewSubGroup>
								<LabelInPrimary>Horario</LabelInPrimary>
								<TextInputDefault
									placeholder="HH:mm"
									placeholderTextColor="#c1bccc"
									value={time}
									onChangeText={(t) => setTime(t)}
								/>
							</ViewSubGroup>
						</ViewHorizontalCenter>
						<ButtonPrimary onPress={handleFiltersSubmit}>
							<TextLight>Filtrar</TextLight>
						</ButtonPrimary>
					</SearchForm>
				)}
			</PageHeader>
			<ScrollViewDefault
				data={teachers as Teacher[]}
				keyExtractor={(item: Teacher) => `${item.id}`}
				renderItem={({ item }: { item: Teacher }) => (
					<TeacherItem
						teacher={item}
					/>
				)}
				onEndReached={LoadMoreProffys}
				onEndReachedThreshold={0.3}
				ListFooterComponent={() => {
					if (!loading) return null;
					return (
						<View>
							<ActivityIndicator />
						</View>
					);
				}}
			/>
		</ContainerDefault>
	);
}