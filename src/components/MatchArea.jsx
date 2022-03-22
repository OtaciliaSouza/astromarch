import { MatchsList } from "../styles";
import axios from "axios";
import { useState } from "react";

function MatchArea(props) {

  
  const [matchs, setMatchs] = useState([]);

    //requisição que retorna os matchs
    const yourMatches = () => {
      const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`;
  
      axios
        .get(url)
        .then((resp) => {
          setMatchs(resp.data.matches);
        })
        .catch((err) => {
          console.log(err);
        });
    };

      //requisição para limpar os matches
  const clearMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`;

    axios
      .put(url)
      .then((response) => {
        alert("Matchs Deletados !");
        yourMatches();
      })
      .catch((err) => {
        alert("Ops! tente Novamente");
      });
  };

    
  return (
    <>
      {yourMatches()}

      <button
        onClick={() => props.changeScreen()}
        type="button"
        className="btn btn-dark"
      >
        Retornar
      </button>
      {matchs.length === 0 ? (
        <h5>Nenhum teve Match ainda 	&#128513; continue tentando logo seu momento chegará &#127917;</h5>
      ) : (
       matchs.map((item) => {
          return (
            <MatchsList key={item.id}>
              <img src={item.photo} />
              {item.name}
            </MatchsList>
          );
        })
      )}
      <button
        type="button"
        className="btn btn-danger"
        onClick={clearMatches}
      >
        Resetar
      </button>
    </>
  );
}

export default MatchArea;
