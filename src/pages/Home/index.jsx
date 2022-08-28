import './home.css';
import { Card } from "../../components/Card";
import { useState } from 'react';
import React from 'react';


export function Home() {

  const [studentName, setStudentName] = useState();

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder='Digite seu nome...' 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button'>Adicionar</button>
      <Card name="Rodrigo" time="14:35"/>
      <Card name="Ana" time="14:45"/>
      <Card name="John" time="13:45"/>
    </div>
  )
}


