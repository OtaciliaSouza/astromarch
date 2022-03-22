import "./index.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardMatch } from "./styles";
import MatchArea from "./components/MatchArea";
import CardPerson from "./components/CardPerson";

function App() {
  //states
  const [profiles, setProfiles] = useState({});
  const [screen, setScreen] = useState(false);

  useEffect(()=>{
    requestPerson();
  },[])


  //variavel global
  const aluno = "otacilia-souza-gebru";

  //requisição que pega os perfis
  const requestPerson = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`;

    Axios.get(url)
      .then((resp) => {
        setProfiles(resp.data.profile);
      })
      .catch((err) => {
        alert("Ocorreu algo inesperado!");
        console.log(err);
      });
  };



  //função para selecionar a tela
  const changeScreen = () => {
    setScreen(!screen);
  };



  return (
    <div className="App">
      <CardMatch>
        {screen ? (
          <MatchArea
            changeScreen={changeScreen}
            aluno={aluno}
          />
        ) : 
          <CardPerson 
          profiles={profiles}
          changeScreen={changeScreen}
          requestPerson={requestPerson}
          aluno={aluno}
          />
        }
      </CardMatch>
    </div>
  );
}

export default App;
