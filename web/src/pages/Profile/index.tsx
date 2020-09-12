import React, { useState, FormEvent, useEffect, useReducer, useContext } from "react";
import { useHistory } from "react-router-dom";
import warnIcon from "../../assets/images/icons/warning.svg";
import headerLogo from "../../assets/images/background.svg";
import PageHeader from "../../components/page-header";
import Input, { TextArea, Select } from "../../components/input";
import Subject from "../../components/subjects";
import "./styles.css";
import {
	Avatar,
	ProfileBackground,
	DisplayProfile,
	Main,
	Footer,
	Container,
	Fieldset,
	FieldsetAula,
	ScheduleItem,
	ButtonRemoveScheduleItem,
} from "./styles";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { Title } from "../../assets/styles/styles";
import { PageBanner, ContainerDefault } from "../../assets/styles/panels";
import * as styles  from "../../assets/styles/styles";
import { Class } from "../../models/class";
import {
	useProfileContext,
	ProfileProvider,
} from "../../contexts/profileContext";
import { Types } from "../../reducers/profile";
import { ClassSchedule } from "../../models/class_schedule";
function Profile() {
	const { signed, signIn, user } = useAuth();
	const history = useHistory();
	const [avatar,setAvatar] = useState(user.avatar);
	const [whatsapp,setWhatsapp] = useState(user.whatsapp);
	const [bio,setBio] = useState(user.bio);
	const [subjects,setSubjects] = useState<Class[]>([]);
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
	function RemoveSchedule(subject: number,indexSchedule:number) {
		const updateSubject = subjects.map((si) => {
			if (si.id === subject) {
				return { ...si, ["schedules"]: si.schedules.filter((item,indexFilter) => indexFilter !== indexSchedule) };
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
					["schedules"]: [...si.schedules,{from:'',to:'',week_day:'0',classId:subject} as ClassSchedule],
				};
			}
			return si;
		});
		setSubjects(updateSubject);
	}
	function UpdateSchedule(subject: number,scheduleIndex:number,field:string,value:string) {
		const updateSubject = subjects.map((si, i) => {
			if (si.id === subject) {
				return {
					...si,
					["schedules"]: si.schedules.map(
						(schedule, indexScheduleMap) =>
							indexScheduleMap === scheduleIndex?{ ...schedule, [field]: value }:schedule
					)
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
	function handleCreateClass(e: FormEvent) {
		api.put("user", {
			id: user.id,
			avatar,
			bio,
			whatsapp,
			subjects,
		})
			.then(() => {
				alert("Cadastro feito com sucesso!");
				history.push({
					pathname: "/confirm",
					state: {
						title: "Perfil atualizado!",
						description:
							"Boa, agora seu perfil foi atualizado com sucesso ",
					},
				});
			})
			.catch(() => alert("Erro no cadastro."));
		e.preventDefault();
	}
	return (
		<Container>
			<PageHeader page="Meu perfil" title="" description="">
				<ProfileBackground src={headerLogo} alt="tes" />
				<DisplayProfile>
					<Avatar src={avatar} alt="tes" />
					<Title>
						{user.name} {user.surname}
					</Title>
				</DisplayProfile>
			</PageHeader>
			<Main>
				<form onSubmit={handleCreateClass}>
					<Fieldset>
						<styles.LegendInput>Seus dados</styles.LegendInput>
						<span>
							<Input
								label="Avatar"
								name="avatar"
								value={avatar}
								onChange={(e) => {
									setAvatar(e.target.value);
								}}
							/>
							<Input
								label="Whatsapp"
								name="whatsapp"
								value={whatsapp}
								mask="(99) 9 9999-9999"
								placeholder="( ) - "
								onChange={(e) => {
									setWhatsapp(e.target.value);
								}}
							/>
						</span>
						<TextArea
							label="Biografia"
							name="bio"
							value={bio}
							onChange={(e) => {
								setBio(e.target.value);
							}}
						/>
					</Fieldset>
					<ProfileProvider>
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
					</ProfileProvider>
					<Footer>
						<p>
							<img src={warnIcon} alt="Aviso importante" />
							<span>
								<b>Importante!</b>
								<br />
								Preencha todos os dados.
							</span>
						</p>
						<styles.ButtonPrimary type="submit">
							Salvar cadastrados
						</styles.ButtonPrimary>
					</Footer>
				</form>
			</Main>
		</Container>
	);
}

export default Profile;
