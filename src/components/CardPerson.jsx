import accept from "../img/v.png";
import del from "../img/n.png";
import "../index.css";
import {
  BottonsLike,
  ButtonMatch,
  TitleButton,
  AgePerson,
  Header,
  PhotoPerson,
  CardPersonArea,
} from "../styles";
import match from "../img/mat.png";
import info from "../img/mi.png";
import { useState } from "react";
import DivInfo from "./DivInfo";
import axios from "axios";

function CardPerson(props) {
  const [fieldInfo, setfieldInfo] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);

  const profiles = props.profiles;

  //requisição para dar match em um id
  const pushMatch = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`;
    const body = {
      id: profiles.id,
      choice: true,
    };

    axios
      .post(url, body)
      .then((resp) => {
        if (resp.data.isMatch === true) {
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
            props.requestPerson();
          }, 3000);
        } else {
          setAlert2(true);
          setTimeout(() => {
            setAlert2(false);
            props.requestPerson();
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const infoField = () => {
    setfieldInfo(!fieldInfo);
    setTimeout(()=>{
      setfieldInfo(false)
    }, 5000)
  };

  const alertNoMatch = () => {
    return (
      <div className="alert alert-danger" role="alert">
        {profiles.name} Não deu match com você 💔 Continue tentando, sua hora vai chegar!
      </div>
    );
  };

  const alertMatch = () => {
    return (
      <div className="alert alert-info" role="alert">
        Maravilha! Você Deu Match Com {profiles.name} 💏
      </div>
    );
  };

  return (
    <CardPersonArea>
      {profiles.length === 0 ? (
        <h1>Carregando ..</h1>
      ) : (
        <>
          <Header>
            <i>
              <span>Astro</span>
              <b>Match</b>
            </i>
            <img src={info} onClick={infoField} />
          </Header>

          {fieldInfo && <DivInfo />}
          {alert && alertMatch()}
          {alert2 && alertNoMatch()}
          <hr />
          <TitleButton>
            <h2>{profiles.name}</h2>
            <ButtonMatch src={match} onClick={() => props.changeScreen()} />
          </TitleButton>
          <PhotoPerson src={profiles.photo} />
          <br />
          <AgePerson>{profiles.age} Anos</AgePerson>

          <div className="card" id="cardBio">
            <div className="card-header" id="cardBio3">
              Biografia
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer" id="cardBio1">
                  {profiles.bio}
                </footer>
              </blockquote>
            </div>
          </div>

          <BottonsLike>
            <img src={accept} onClick={() => pushMatch()} />
            <img src={del} onClick={() => props.requestPerson()} />
          </BottonsLike>
         <hr></hr>
         <span>  💞  De todas as palavras do dicionário, escolha usar estas três hoje: quer namorar comigo? 💑 </span>
         <hr></hr>
            </>
      )}
    </CardPersonArea>
  );
}

export default CardPerson;
