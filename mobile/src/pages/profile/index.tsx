import React,{useState, useEffect} from 'react';
import { View,ScrollView,Text,Image,TextInput, Picker, ToastAndroid, Platform } from 'react-native';
import {ButtonPrimary} from '../../assets/styles/buttons';
import { BackgroundBanner, Avatar } from "../../assets/styles/images";
import styles from './styles';
import {PageHeaderProfile} from "../../conponents/page-header";
import { TextDescription, Title } from "../../conponents/page-header/styles";
import TeacherItem, { Teacher } from '../../conponents/teacher-item';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import InputDefault, { TextArea } from '../../conponents/inputs';
import background from "../../assets/images/background.png";
import {
	ContainerDefault,
	ViewVerticalCenterPadding
} from "../../assets/styles/views";
import InputSection from '../../conponents/input-section';
import warnIcon from '../../assets/images/warning.png'
import { useNavigation } from '@react-navigation/native';
import PickerDefault from '../../conponents/picker';
import Toast from 'react-native-simple-toast';
import { useAuth } from "../../contexts/auth";
import Subject from '../../conponents/subjects';
import { Class } from '../../models/class';
export default function Profile(){
    const { user } = useAuth();
    const [avatar,setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState("");
    const [bio,setBio] = useState('');
    const navigation = useNavigation();
	const [subjects, setSubjects] = useState<Class[]>([]);
	function RemoveSchedule(subject: number, indexSchedule: number) {
		const updateSubject = subjects.map((si) => {
			if (si.id === subject) {
				return {
					...si,
					["schedules"]: si.schedules.filter(
						(item, indexFilter) => indexFilter !== indexSchedule
					),
				};
			}
			return si;
		});
		setSubjects(updateSubject);
	}
	function AddSchedule(subject: number) {
		const updateSubject = subjects.map((si, i) => {
			if (si.id === subject) {
				return {
					...si,
					["schedules"]: [
						...si.schedules,
						{
							from: "",
							to: "",
							week_day: "0",
							classId: subject,
						} as ClassSchedule,
					],
				};
			}
			return si;
		});
		setSubjects(updateSubject);
	}
	function UpdateSchedule(
		subject: number,
		scheduleIndex: number,
		field: string,
		value: string
	) {
		const updateSubject = subjects.map((si, i) => {
			if (si.id === subject) {
				return {
					...si,
					["schedules"]: si.schedules.map(
						(schedule, indexScheduleMap) =>
							indexScheduleMap === scheduleIndex
								? { ...schedule, [field]: value }
								: schedule
					),
				};
			}
			return si;
		});
		setSubjects(updateSubject);
	}
	function setSubjectItems(id: number, field: string, value: string) {
		const updateSubject = subjects.map((si, i) => {
			if (si.id === id) {
				return { ...si, [field]: value };
			}
			return si;
		});
		setSubjects(updateSubject);
	}
	useEffect(() => {
		if (user) {
			setAvatar(user.avatar);
			setWhatsapp(user.whatsapp);
			setBio(user.bio);
			api.get(`class-schedule?id=${user.id}`).then((response) => {
				const subjectsResult = response.data;
				setSubjects(subjectsResult);
			});
		}
	}, [user]);
    async function handleSubmit(){
		api.put("user", {
			id: user.id,
			avatar,
			bio,
			whatsapp,
			subjects,
		})
		.then(() => {
			navigation.navigate("Confirm", {
				title: "Perfil atualizado!",
				redirect: "Landing",
				description:
					"Boa, agora seu perfil foi atualizado com sucesso.",
			});
		})
		.catch(() => alert("Erro no cadastro."));
        /*
        api.post('classes',{
            name,avatar,bio,whatsapp,subject,cost:Number(cost)
            ,schedule:scheduleItems
        }).then(() => {
            navigation.navigate('Confirm',{
                title:'Cadastro salvo!',
                description:'Tudo certo, seu cadstro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.'
            });
        })
        .catch(() => Toast.show('Falha ao cadastrar.'));*/
        console.log({
            name,avatar,bio,whatsapp,subject,cost:Number(cost)
            ,schedule:scheduleItems
        });
    }
    return (
		<ContainerDefault>
			<PageHeaderProfile title="Que incrível que você quer dar aulas.">
				<BackgroundBanner source={background} resizeMode="cover">
					<Avatar source={{ uri: user && user.avatar }} />
					<Title>
						{user && user.name} {user && user.surname}
					</Title>
				</BackgroundBanner>
			</PageHeaderProfile>
			<ScrollView
				style={styles.formClass}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				<InputSection title="Seus Dados">
					<InputDefault
						label="Avatar"
						placeholder="Url da imagem"
						value={avatar}
						onChangeText={(t) => setAvatar(t)}
					/>
					<InputDefault
						label="Whatsapp"
						placeholder="Whatsapp"
						keyboardType="numeric"
						value={whatsapp}
						onChangeText={(t) => setWhatsApp(t)}
					/>
					<TextArea
						label="Biogafia"
						placeholder="Biografia"
						value={bio}
						onChangeText={(t) => setBio(t)}
					/>
				</InputSection>
				{subjects &&
					subjects.map((subject, index) => (
						<Subject
							subject={subject}
							costEvent={setSubjectItems}
							remove={RemoveSchedule}
							add={AddSchedule}
							update={UpdateSchedule}
							key={subject.id}
						/>
					))}
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