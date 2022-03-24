import styled from "styled-components";

export const CardMatch = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 95vh;
  box-shadow: inset 0 0 1em black,0 0 1em black ;
  margin: 2% auto;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  color: black;
  padding: 10px 5px;
  background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(159,147,120,1) 100%);

  hr {
    width: 100%;
    height: 2px;
  }

  h5{
    margin: 20px 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const BottonsLike = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5% 0;

  img {
    width: 20%;
    height: 20%;
    box-shadow: none;
  }

  img:hover {
    box-shadow: 1px 1px 10px pink;
    border-radius: 50%;
  }

  strong {
  margin: 10% 0;
  
  }
`;
export const MatchsList = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 5px 5px #9E9E9E;
  align-items: center;
  font-weight: bolder;
  padding: 5px 8px;
  margin: 5px;
  width: 90%;

  img {
    width: 15%;
    height: 5vh;
    border-radius: 10%;
    box-shadow: none;
  }

  &:hover {
    background: #87cefa;
  }
`;

export const ButtonMatch = styled.img`
  width: 10%;
  height: 10%;
  box-shadow: none;

  &:hover {
    cursor: pointer;
    width: 9.5%;
  }
`;

export const TitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  margin: 3% 0;
`;

export const AgePerson = styled.b`
  font-size: 1.5em;
  margin-bottom: 2%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  font-size: 2em;

  b {
    color: #00838F;
    text-shadow: 2px 1px 3px black;
  }

  span {
    color: #757575;
    font-weight: bold;
    text-shadow: 2px 1px 3px black;
    
  }

  img {
    width: 10%;
    height: 10%;
    box-shadow: none;

    &:hover {
      width: 9%;
      cursor: pointer;
    }
  }
`;

export const PhotoPerson = styled.img`
  border-radius: 5%;
  width: 90% ;
  height: 30vh;
  box-shadow: 1px 1px 5px black;
  margin-bottom: 10px;
`;

export const CardPersonArea = styled.div`
 width: 100%;
`

