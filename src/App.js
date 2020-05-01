import React, {useState, useEffect} from 'react';
import Frase from './components/Frase'

import styled from '@emotion/styled';


const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400;
  }
`;

function App() {

  

  //State de frases
  const [ frase, guardarFrase ] = useState({});

  //Forma 1 para consumir APIS con Fetch
  // const consultarAPI = () =>{
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase = api.then( respuesta => {
  //     return respuesta.json()
  //   });
  //   frase.then(resultado => console.log(resultado));
        
  // }

//Forma 2 para consumir APIS con Fetch
  const consultarAPI = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);    
        
  }
  
  //Cargar una frase al iniciar la app
  useEffect(() =>{
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
      <Boton
        onClick={ consultarAPI }
      >Breaking Bad</Boton>
    </Contenedor>
  );
}

export default App;
