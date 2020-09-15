import React, { useState, FormEvent } from 'react';
import './styles.css';
import { PageHeaderForm } from "../../components/page-header";
import Input,{ Select } from '../../components/input';
import TeacherItem,{ Teacher } from '../../components/teacherItem';
import api from '../../services/api';
import emoji from '../../assets/images/icons/smile.svg';
import { DisplayResult } from "./styles";
function TeacherList(){
    const [subject,setSubject] = useState('Artes');
    const [week_day,setWeekDay] = useState('0');
    const [time,setTime] = useState('');
    const [teachers,setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);
	const [fully, setFully] = useState(false);
	const [page, setPage] = useState(0);

    async function SearchTeachers(e:FormEvent){
        e.preventDefault();
		setLoading(true);
		setPage(1);
		setFully(false);
        const response = await api.get('classes',{
            params: {
                subject,week_day,time
            }
        });
        setTeachers(response.data);
		setLoading(false);
    }

    return (
		<div id="page-teacher-list" className="container">
			<PageHeaderForm
				page="Estudar"
				title="Estes são os proffys disponíveis"
	description={<><img src={emoji} alt="carinha de sorriso"/> Nós temos {teachers.length}<br/> professores.</>}
			>
				<form id="search-teachers" onSubmit={SearchTeachers}>
					<Select
						label="Matéria"
						name="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						options={[
							{ value: "Artes", text: "Artes" },
							{ value: "Matematica", text: "Matematica" },
							{ value: "Inglês", text: "Inglês" },
						]}
					/>
					<Select
						label="Dia da semana"
						name="week-day"
						value={week_day}
						onChange={(e) => setWeekDay(e.target.value)}
						options={[
							{ value: "0", text: "Domingo" },
							{ value: "1", text: "Segunda-feira" },
							{ value: "2", text: "Terça-feira" },
							{ value: "3", text: "Quarta-feira" },
							{ value: "4", text: "Quinta-feira" },
							{ value: "5", text: "Sexta-feira" },
							{ value: "6", text: "Sábado" },
						]}
					/>
					<Input
						type="time"
						label="Horário"
						name="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
					<button type="submit">Buscar</button>
				</form>
			</PageHeaderForm>

			<main>
				{teachers.map((t: Teacher) => {
					return <TeacherItem key={t.id} teacher={t} />;
				})}
				<DisplayResult>
					{teachers.length>0?'Estes são todos os resultados':'Nenhum professor encontrado com sua pesquisa'}
				</DisplayResult>
			</main>
		</div>
	);
}

export default TeacherList;