import React,{useState, FormEvent,useRef} from 'react';
import {useHistory} from 'react-router-dom';
import warnIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from "../../assets/images/icons/rocket.svg";
import { PageHeaderForm } from "../../components/page-header";
import Input,{TextArea,SelectInput} from '../../components/input';
import './styles.css';
import { DisplayUser, DescriptionIcon } from "./styles";
import api from '../../services/api';
import { useAuth } from "../../contexts/auth";
function TeacherForm(){
	const { user } = useAuth();
	const history = useHistory();
	const refSubject = useRef<HTMLInputElement>();
    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');
    const [scheduleItems,setScheduleItems] = useState([{ week_day:'0', from:'',to:'' }]);
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
    function handleCreateClass(e:FormEvent){
        e.preventDefault();
		const subject = refSubject.current?refSubject.current.value:'';
		return;
		api.post('classes',{
			userId:user.id,
			subject,
			cost:Number(cost)
            ,schedule:scheduleItems
        }).then(() => {
			history.push({
				pathname: "/confirm",
				state: {
					title: "Cadastro salvo!",
					description:
						"Tudo certo, seu cadastro está na nossa lista de professores.Agora é só ficar de olho no seu WhatsApp",
				},
			});
        })
        .catch(() => alert('Erro no cadastro.'));
    }

    return (
		<div id="page-teacher-form" className="container">
			<PageHeaderForm
				page="Dar aulas"
				title="Que incrível que você quer dar aulas."
				description={<p></p>}
			>
				<p>
					"O primeiro passo é preencher esse formulário de inscrição"
				</p>
				<DescriptionIcon>
					<img src={rocketIcon} alt="foguete" />
					<small>
						Prepare-se!
						<br />
						vai ser o máximo.
					</small>
				</DescriptionIcon>
			</PageHeaderForm>
			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend> Seus dados</legend>
						<DisplayUser>
							<img src={user.avatar} alt="Professor" />
							<div>
								<strong>
									{user.name} {user.surname}
								</strong>
								<span>{user.whatsapp}</span>
							</div>
						</DisplayUser>
					</fieldset>
					<fieldset>
						<legend> Sobre a aula</legend>
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
						<Input
							label="Custo da sua hora por aula"
							name="cost"
							value={cost}
							onChange={(e) => {
								setCost(e.target.value);
							}}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários disponíveis
							<button type="button" onClick={AddNewScheduleItem}>
								+ Novo horário
							</button>
						</legend>
						{scheduleItems.map((si, index) => (
							<div key={index} className="schedule-item">
								<SelectInput
									label="Dia da semana"
									name="week-day"
									value={si.week_day}
									changeState={(e) =>
										setScheduleItemValue(
											index,
											"week_day",
											e.value
										)
									}
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
									name="from"
									label="Das"
									type="time"
									value={si.from}
									onChange={(e) =>
										setScheduleItemValue(
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
									value={si.to}
									onChange={(e) =>
										setScheduleItemValue(
											index,
											"to",
											e.target.value
										)
									}
								/>
							</div>
						))}
					</fieldset>

					<footer>
						<p>
							<img src={warnIcon} alt="Aviso importante" />
							Importante <br />
							Preencha todos os dados.
						</p>
						<button type="submit">Salvar cadastrados</button>
					</footer>
				</form>
			</main>
		</div>
	);
}

export default TeacherForm;