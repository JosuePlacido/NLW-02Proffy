import React from 'react';
import { Class } from '../../models/class';
import {
	FieldsetAula,
	Fieldset,
	ScheduleItem,
	ButtonRemoveScheduleItem,
} from "../../pages/Profile/styles";
import Input, { TextArea, Select } from "../../components/input";
import * as styles from "../../assets/styles/styles";

export interface SubjectItemProps {
	subject: Class;
	costEvent(id: number, field: string, value: string | number): void;
	remove(subject: number,indexSchedule:number): void;
	add(subject: number): void;
	update(subject: number,indexSchedule: number,field:string,value:any): void;
}
const Subject: React.FC<SubjectItemProps> = ({
	subject,
	costEvent,
	remove,
	add,
	update,
}) => {
	return (
		<>
			<FieldsetAula key={subject.id}>
				<styles.LegendInput> Sobre a aula</styles.LegendInput>
				<span>
					<Select
						label="Matéria"
						name="subject"
						disabled
						value={subject.subject}
						onChange={(e) => {
							costEvent(
								subject.id,
								e.target.name,
								e.target.value
							);
						}}
						options={[
							{
								value: "Artes",
								text: "Artes",
							},
							{
								value: "Matematica",
								text: "Matematica",
							},
							{
								value: "Inglês",
								text: "Inglês",
							},
						]}
					/>
					<Input
						label="Custo da sua hora por aula"
						name="cost"
						value={subject.cost}
						onChange={(e) => {
							costEvent(subject.id, "cost", e.target.value);
						}}
					/>
				</span>
			</FieldsetAula>
			<Fieldset>
				<styles.LegendInput>
					Horários disponíveis
					<styles.ButtonText
						type="button"
						onClick={(e) => add(subject.id)}
					>
						+ Novo horário
					</styles.ButtonText>
				</styles.LegendInput>
				{subject.schedules.map((schedule, index) => (
					<ScheduleItem key={index}>
						<Select
							label="Dia da semana"
							name="week-day"
							value={schedule.week_day}
							onChange={
								(e) =>update(subject.id,index,'week_day',e.target.value)
							}
							options={[
								{ value: "0", text: "Domingo" },
								{
									value: "1",
									text: "Segunda-feira",
								},
								{
									value: "2",
									text: "Terça-feira",
								},
								{
									value: "3",
									text: "Quarta-feira",
								},
								{
									value: "4",
									text: "Quinta-feira",
								},
								{
									value: "5",
									text: "Sexta-feira",
								},
								{ value: "6", text: "Sábado" },
							]}
						/>
						<Input
							name="from"
							label="Das"
							type="time"
							value={schedule.from}
							onChange={
								(e) => update(subject.id,index,'from',e.target.value)
							}
						/>
						<Input
							name="to"
							label="Até"
							type="time"
							value={schedule.to}
							onChange={
								(e) => update(subject.id,index,'to',e.target.value)
							}
						/>
						<span>
							<ButtonRemoveScheduleItem
								type="button"
								onClick={() => remove(subject.id, index)}
							>
								Excluir Horário
							</ButtonRemoveScheduleItem>
						</span>
					</ScheduleItem>
				))}
			</Fieldset>
		</>
	);
};

export default Subject;