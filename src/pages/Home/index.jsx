import './home.css';
import { Card } from "../../components/Card";
import { useState } from 'react';
import React from 'react';


export function Home() {

  const [studentName, setStudentName] = useState(''); //seta uma novo estudante e atualiza ele
  const [students, setStudents] = useState([]);

  function handleAddStudent(){ 
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent]); //add um novo estudante mantendo os anteriores
  }
 

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder='Digite seu nome...' 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>Adicionar</button>
      {
        students.map(student =>  
        <Card
          key={student.time}
          name={student.name}
          time={student.time}
        />) //percorre a lista para pegar os estudantes add
      }
      
   
    </div>
  )
}


