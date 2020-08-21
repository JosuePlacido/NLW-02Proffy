import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/page-header';
import Input,{ Select } from '../../components/input';
import TeacherItem,{ Teacher } from '../../components/teacherItem';
import api from '../../services/api';
function TeacherList(){
    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime] = useState('');
    const [teachers,setTeachers] = useState([]);

    async function SearchTeachers(e:FormEvent){
        e.preventDefault();
        const response = await api.get('classes',{
            params: {
                subject,week_day,time
            }
        });
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={SearchTeachers}>
                    <Select label="Matéria" name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    options={[
                        {value:'Artes',text:'Artes'},
                        {value:'Matematica',text:'Matematica'},
                        {value:'Inglês',text:'Inglês'}
                    ]}
                    />  
                    <Select label="Dia da semana" name="week-day"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
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
                    <Input type="time" label="Horário" name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}/>
                        <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                    {teachers.map( (t:Teacher) => {
                        return <TeacherItem key={t.id} teacher={t}/>
                    })}
            </main>
        </div>
    );
}

export default TeacherList;