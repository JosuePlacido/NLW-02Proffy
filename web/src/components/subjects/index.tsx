import React from 'react';
import { Class } from '../../models/class';
import {
	FieldsetAula,
	Fieldset,
	ScheduleItem,
	ButtonRemoveScheduleItem,
} from "../../pages/Profile/styles";
import Input, { TextArea, SelectInput } from "../../components/input";
import { DaysOptions, DaysNames } from "../../models/days";
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
					<SelectInput
						label="Matéria"
						name="subject"
						disabled
						initialValue={{
							label: subject.subject,
							value: subject.subject,
						}}
						options={[
							{
								value: "Artes",
								label: "Artes",
							},
							{
								value: "Matematica",
								label: "Matematica",
							},
							{
								value: "Inglês",
								label: "Inglês",
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
						<SelectInput
							label="Dia da semana"
							name="week-day"
							initialValue={{
								label: DaysNames[parseInt(schedule.week_day)],
								value: schedule.week_day,
							}}
							onChange={(e) =>
								update(
									subject.id,
									index,
									"week_day",
									e.target.value
								)
							}
							options={DaysOptions}
						/>
						<Input
							name="from"
							label="Das"
							type="time"
							value={schedule.from}
							onChange={(e) =>
								update(
									subject.id,
									index,
									"from",
									e.target.value
								)
							}
						/>
						<Input
							name="to"
							label="Até"
							type="time"
							value={schedule.to}
							onChange={(e) =>
								update(subject.id, index, "to", e.target.value)
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