import './home.css';
import { Card } from "../../components/Card";


export function Home() {

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder='Digite seu nome...' />
      <button type='button'>Adicionar</button>
      <Card name="Rodrigo" time="14:35"/>
      <Card name="Ana" time="14:45"/>
      <Card name="John" time="13:45"/>
    </div>
  )
}


