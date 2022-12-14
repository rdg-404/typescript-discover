import './home.css';
import { Card, CardProps } from "../../components/Card";
import { useState, useEffect } from 'react';
import React from 'react';


type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {

  const [studentName, setStudentName] = useState(' '); //seta uma novo estudante e atualiza ele
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User )

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

  useEffect(() => {
    // fetch("https://api.github.com/users/rdg-404") //pega info da api
    //   .then( (response) => response.json()) //transforma em json
    //   .then( (data) => {
    //     // console.log(data);
    //     //atribui ao userState as informação que precisa mostrar
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url
    //     })
    //   })

    async function fetchData(){
      const response = await fetch("https://api.github.com/users/rdg-404");
      const data = await response.json() as ProfileResponse;
      console.log("DADOS ===> ", data)


      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    } 

    fetchData();
    }, [])

 

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      
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


