import React, { useState, FormEvent, useRef } from 'react';
import './styles.css';
import { PageHeaderForm } from "../../components/page-header";
import Input,{ SelectInput } from '../../components/input';
import TeacherItem,{ Teacher } from '../../components/teacherItem';
import api from '../../services/api';
import emoji from '../../assets/images/icons/smile.svg';
import { DisplayResult, ButtonSearchForm } from "./styles";
function TeacherList(){
    const [time,setTime] = useState('');
	const [teachers,setTeachers] = useState([]);
	const refWeekDay = useRef<HTMLInputElement>(null);
	const refSubject = useRef<HTMLInputElement>(null);

    async function SearchTeachers(e:FormEvent){
		e.preventDefault();
		const subject = refSubject.current?refSubject.current!.value:'';
		const week_day = refWeekDay.current?refWeekDay.current.value:'';
        const response = await api.get('classes',{
            params: {
                subject,week_day,time
            }
        });
        setTeachers(response.data);
    }

    return (
		<div id="page-teacher-list" className="container">
			<PageHeaderForm
				page="Estudar"
				title="Estes são os proffys disponíveis"
				description={
					<>
						<img src={emoji} alt="carinha de sorriso" /> Nós temos{" "}
						{teachers.length}
						<br /> professores.
					</>
				}
			>
				<form id="search-teachers" onSubmit={SearchTeachers}>
					<SelectInput
						label="Matéria"
						name="subject"
						refInput={refSubject}
						options={[
							{ value: "Artes", label: "Artes" },
							{ value: "Matematica", label: "Matematica" },
							{ value: "Inglês", label: "Inglês" },
						]}
					/>
					<SelectInput
						label="Dia da semana"
						name="week-day"
						refInput={refWeekDay}
						options={[
							{ value: "0", label: "Domingo" },
							{ value: "1", label: "Segunda-feira" },
							{ value: "2", label: "Terça-feira" },
							{ value: "3", label: "Quarta-feira" },
							{ value: "4", label: "Quinta-feira" },
							{ value: "5", label: "Sexta-feira" },
							{ value: "6", label: "Sábado" },
						]}
					/>
					<Input
						type="time"
						label="Horário"
						name="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
					<ButtonSearchForm type="submit">Buscar</ButtonSearchForm>
				</form>
			</PageHeaderForm>

			<main>
				{teachers.map((t: Teacher) => {
					return <TeacherItem key={t.id} teacher={t} />;
				})}
				<DisplayResult>
					{teachers.length > 0
						? "Estes são todos os resultados"
						: "Nenhum professor encontrado com sua pesquisa"}
				</DisplayResult>
			</main>
		</div>
	);
}

export default TeacherList;