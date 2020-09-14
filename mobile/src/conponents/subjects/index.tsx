import React from 'react';
import { Picker,View, Text,TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ViewHorizontalCenter, ViewSubGroup } from "../../assets/styles/views";
import { Class } from '../../models/class';
import InputSection from '../input-section';
import InputDefault from '../inputs';
import PickerDefault from '../picker';
import styles, {
	TextButtonNovo,
	TextButtonRemove,
	ButtonRemove,
} from "./styles";

export interface SubjectItemProps {
	subject: Class;
	costEvent(id: number, field: string, value: string | number): void;
	remove(subject: number, indexSchedule: number): void;
	add(subject: number): void;
	update(
		subject: number,
		indexSchedule: number,
		field: string,
		value: any
	): void;
}
const Subject: React.FC<SubjectItemProps> = ({
	subject,
	costEvent,
	remove,
	add,
	update,
}) => (
	<>
		<InputSection title="Sobre a aula">
			<PickerDefault
				label="Matéria"
				placeholder="Matéria"
				selectedValue={subject}
			>
				<Picker.Item label="Artes" value="Artes"></Picker.Item>
				<Picker.Item
					label="Matemática"
					value="Matematica"
				></Picker.Item>
				<Picker.Item label="Inglês" value="Ingles"></Picker.Item>
				<Picker.Item label="Geografia" value="Geografia"></Picker.Item>
			</PickerDefault>
			<InputDefault
				label="Custo da sua hora por aula"
				placeholder="Valor"
				keyboardType="numeric"
				value={''+subject.cost}
				onChangeText={(t) => costEvent(subject.id,'cost',t)}
			/>
		</InputSection>
		<InputSection
			title="Horários disponíveis"
			right={
				<BorderlessButton onPress={() => add(subject.id)}>
					<TextButtonNovo>+ Novo</TextButtonNovo>
				</BorderlessButton>
			}
		>
			{subject.schedules.map((si, index) => (
				<View style={styles.scheduleView} key={index}>
					<PickerDefault
						label="Dia da semana"
						selectedValue={si.week_day}
						onValueChange={(e: string) =>
							update(subject.id, index, "week_day", e)
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
					<ViewHorizontalCenter>
						<ViewSubGroup>
							<InputDefault
								value={si.from}
								onChangeText={(e: string) =>
									update(subject.id, index, "from", e)
								}
								label="De"
								placeholder="início"
							/>
						</ViewSubGroup>
						<ViewSubGroup>
							<InputDefault
								value={si.to}
								onChangeText={(e: string) =>
									update(subject.id, index, "to", e)
								}
								label="Até"
								placeholder="término"
							/>
						</ViewSubGroup>
					</ViewHorizontalCenter>
					<ButtonRemove
						style={styles.buttonRemove}
						onPress={() => remove(subject.id, index)}
					>
						<TextButtonRemove>Remover</TextButtonRemove>
					</ButtonRemove>
				</View>
			))}
		</InputSection>
	</>
);
export default Subject;
