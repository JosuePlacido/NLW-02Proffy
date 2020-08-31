import React,{useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import warnIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/page-header';
import Input,{TextArea,Select} from '../../components/input';
import './styles.css';
import api from '../../services/api';
import { useAuth } from "../../contexts/auth";
function TeacherForm(){
	const { signed, signIn, user } = useAuth();
    const history = useHistory();
    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const [whatsapp,setWhattsApp] = useState('');
    const [bio,setBio] = useState('');
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
        api.post('classes',{
            name,avatar,bio,whatsapp,subject,cost:Number(cost)
            ,schedule:scheduleItems
        }).then(() => {
            alert('Cadastro feito com sucesso!');
            history.push('/');
        })
        .catch(() => alert(alert('Erro no cadastro.')));
        e.preventDefault();
    }



    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição">

            </PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend> Seus dados</legend>
                        <Input label="Nome Completo" name="name" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }}/>
                        <Input label="Avatar" name="avatar" value={avatar} onChange={(e) => {
                            setAvatar(e.target.value);
                        }}/>
                        <Input label="WhatsApp" name="whatsapp" value={whatsapp} onChange={(e) => {
                            setWhattsApp(e.target.value);
                        }}/>
                        <TextArea label="Biografia" name="bio" value={bio} onChange={(e) => {
                            setBio(e.target.value);
                        }}/>
                    </fieldset>
                    <fieldset>
                        <legend> Sobre a aula</legend>
                        <Select label="Matéria" name="subject"
                            value={subject} onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            options={[
                                {value:'Artes',text:'Artes'},
                                {value:'Matematica',text:'Matematica'},
                                {value:'Inglês',text:'Inglês'}
                            ]}
                        />
                        <Input label="Custo da sua hora por aula" name="cost" value={cost} onChange={(e) => {
                            setCost(e.target.value);
                        }}/>
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                            <button type="button" onClick={AddNewScheduleItem}>+ Novo horário</button>
                        </legend>
                        {
                            scheduleItems.map((si,index) => (
                                <div key={si.week_day} className="schedule-item">
                                    <Select label="Dia da semana" name="week-day"
                                    value={si.week_day}
                                    onChange={ e => setScheduleItemValue(index,'week_day',e.target.value)}
                                    options={[
                                        {value:'0',text:'Domingo'},
                                        {value:'1',text:'Segunda-feira'},
                                        {value:'2',text:'Terça-feira'},
                                        {value:'3',text:'Quarta-feira'},
                                        {value:'4',text:'Quinta-feira'},
                                        {value:'5',text:'Sexta-feira'},
                                        {value:'6',text:'Sábado'}
                                    ]}
                                    />
                                    <Input name="from" label="Das" type="time" value={si.from}
                                    onChange={ e => setScheduleItemValue(index,'from',e.target.value)}/>
                                    <Input name="to" label="Até" type="time" value={si.to}
                                    onChange={ e => setScheduleItemValue(index,'to',e.target.value)}/>
                                </div>
                            ))
                        }
                    </fieldset>

                    <footer>
                    <p>
                        <img src={warnIcon} alt="Aviso importante"/>
                        Importante <br/>
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