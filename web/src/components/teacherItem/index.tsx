import React from 'react';
import './styles.css';
import whatsIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import { ClassSchedule } from '../../models/class_schedule';
import { ScheduleItems } from "./styles";

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
	whatsapp: string;
	schedules: ClassSchedule[];
  }
export interface TeacherItemProps{
    teacher: Teacher;
}
const days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
const TeacherItem:React.FC<TeacherItemProps>= ({teacher}) => {

    function createNewConnection(){
        api.post('connections',{
            user_id:teacher.id
        });
    }
	console.log(teacher);
    return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt="Professor" />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>
			<p>{teacher.bio}</p>
			<ScheduleItems>
				{teacher.schedules.map(({ id, week_day, from, to }) => (
					<div key={id}>
						<p>
							<small>Dia</small>
							<br />
							{days[parseInt(week_day)]}
						</p>
						<p>
							<small>Horário</small>
							<br />
							{from.substring(0, 2)}h-{to.substring(0, 2)}h
						</p>
					</div>
				))}
			</ScheduleItems>
			<footer>
				<p>
					Preço/hora
					<strong>R$ {teacher.cost}</strong>
				</p>
				<a
					onClick={createNewConnection}
					target="_blank"
					href={`https://wa.me/${teacher.whatsapp}`}
				>
					<img src={whatsIcon} alt="WhattsApp" />
					Entrar em contato
				</a>
			</footer>
		</article>
	);
}

export default TeacherItem;