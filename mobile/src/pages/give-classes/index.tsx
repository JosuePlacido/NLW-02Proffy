import React,{useState, useEffect} from 'react';
import { View,ScrollView,Text,Image,TextInput, Picker, ToastAndroid, Platform } from 'react-native';
import styles, { ViewUser} from "./styles";
import {ButtonPrimary} from '../../assets/styles/buttons';
import PageHeader from '../../conponents/page-header';
import {TextDescription} from '../../conponents/page-header/styles';
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import InputDefault, { TextArea } from '../../conponents/inputs';
import { ContainerDefault, ViewPadding } from "../../assets/styles/views";
import InputSection from '../../conponents/input-section';
import warnIcon from '../../assets/images/warning.png'
import { useNavigation } from '@react-navigation/native';
import PickerDefault from '../../conponents/picker';
import Toast from 'react-native-simple-toast';
import { useAuth } from '../../contexts/auth';
import { Avatar } from '../../assets/styles/images';
import { ViewProfileInfo } from '../../conponents/teacher-item/styles';
import { ItemSubTitle, Title } from '../../assets/styles/texts';
import { formatPhoneNumber } from '../../utils/phone';
export default function TeacherList(){
    const { user } = useAuth();
    const [subject,setSubject] =  useState('');
    const [cost,setCost] = useState('');
    const [scheduleItems,setScheduleItems] = useState([{ week_day:'3', from:'',to:'' }]);

	function AddNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,{
                week_day:'0',
                from:'',
                to:''
            }
        ]);
	}
    function setScheduleItemValue(index:number,field:string,value:string){
        const updateScheduleItems = scheduleItems.map((si,i) =>{
            if(i === index){
                return { ...si,[field]:value}
            }
            return si;
        });
        setScheduleItems(updateScheduleItems);
    }
    const navigation = useNavigation();
    //useEffect(LoadFavorites,[]);
    async function handleSubmit(){
        api.post('classes',{
			userId:user.id,
			subject,
			cost:Number(cost),
			schedule:scheduleItems
        }).then(() => {
            navigation.navigate("Confirm", {
				title: "Cadastro salvo!",
				redirect: "StudyTabs",
				description:
					"Tudo certo, seu cadstro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.",
			});
        })
        .catch(() => Toast.show('Falha ao cadastrar.'));
    }
    return (
		<ContainerDefault>
			<PageHeader
				title="Dar aulas"
				description="Que incrível que você quer dar aulas."
				headerRight={
					<BorderlessButton>
						<Feather name="filter" size={20} color="#ffffff00" />
					</BorderlessButton>
				}
			>
				<ViewPadding>
					<TextDescription>
						O primeiro passo, é preencher esse formulário de
						inscrição
					</TextDescription>
				</ViewPadding>
			</PageHeader>
			<ScrollView
				style={styles.formClass}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				<InputSection title="Seus Dados">
					<ViewUser>
						<Avatar source={{ uri: user && user.avatar }} />
						<ViewProfileInfo>
							<Title>
								{user && user.name} {user && user.surname}
							</Title>
							<ItemSubTitle>
								{user && formatPhoneNumber("" + user.whatsapp)}
							</ItemSubTitle>
						</ViewProfileInfo>
					</ViewUser>
				</InputSection>
				<InputSection title="Sobre a aula">
					<PickerDefault
						label="Matéria"
						placeholder="Matéria"
						selectedValue={subject}
						onValueChange={(t) => setSubject(t)}
					>
						<Picker.Item label="Artes" value="Artes"></Picker.Item>
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
					<InputDefault
						label="Custo da sua hora por aula"
						placeholder="Valor"
						keyboardType="numeric"
						value={cost}
						onChangeText={(t) => setCost(t)}
					/>
				</InputSection>
				<InputSection
					title="Horários disponíveis"
					right={
						<BorderlessButton onPress={AddNewScheduleItem}>
							<Text style={styles.buttonNovo}>+ Novo</Text>
						</BorderlessButton>
					}
				>
					{scheduleItems.map((si, index) => (
						<View key={index}>
							<PickerDefault
								label="Dia da semana"
								selectedValue={si.week_day}
								onValueChange={(e: string) =>
									setScheduleItemValue(index, "week_day", e)
								}
							>
								<Picker.Item value="0" label="Domingo" />
								<Picker.Item value="1" label="Segunda-feira" />
								<Picker.Item value="2" label="Terça-feira" />
								<Picker.Item value="3" label="Quarta-feira" />
								<Picker.Item value="4" label="Quinta-feira" />
								<Picker.Item value="5" label="Sexta-feira" />
								<Picker.Item value="6" label="Sábado" />
							</PickerDefault>
							<View style={styles.inputGroupInline}>
								<View style={styles.subGroup}>
									<InputDefault
										value={si.from}
										onChangeText={(e: string) =>
											setScheduleItemValue(
												index,
												"from",
												e
											)
										}
										label="De"
										placeholder="início"
									/>
								</View>
								<View style={styles.subGroup}>
									<InputDefault
										value={si.to}
										onChangeText={(e: string) =>
											setScheduleItemValue(index, "to", e)
										}
										label="Até"
										placeholder="término"
									/>
								</View>
							</View>
						</View>
					))}
				</InputSection>
				<View style={styles.footer}>
					<ButtonPrimary onPress={handleSubmit}>
						<Text style={styles.submitButtonText}>
							Salvar cadastro
						</Text>
					</ButtonPrimary>
					<View style={styles.footerWarn}>
						<Image
							source={warnIcon}
							style={styles.image}
							resizeMode="contain"
						/>
						<Text style={styles.textFooter}>
							<Text style={styles.textFooterWarn}>
								Importante!{"\n"}
							</Text>
							Preencha todos os dados.
						</Text>
					</View>
				</View>
			</ScrollView>
		</ContainerDefault>
	);
}