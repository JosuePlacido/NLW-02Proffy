import React from 'react';
import './styles.css';
import whatsIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
  }
export interface TeacherItemProps{
    teacher: Teacher;
}
const TeacherItem:React.FC<TeacherItemProps>= ({teacher}) => {

    function createNewConnection(){
        api.post('connections',{
            user_id:teacher.id
        });
    }

    return (        
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt="Professor"/>
            <div>
                <strong>{teacher.name}</strong><span>{teacher.subject}</span>
            </div>
        </header>
        <p>{teacher.bio}</p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ {teacher.cost}</strong>
            </p>
            <a onClick={createNewConnection}
            target="_blank"             
            href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsIcon} alt="WhattsApp" /> 
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;