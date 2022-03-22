import styled from "styled-components";

export const CardMatch = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  border: 2px solid gray;
  box-shadow: 1px 1px 10px black;
  margin: 2% auto;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  color: black;
  padding: 10px 5px;
  background: #add8e6;

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
    box-shadow: 1px 1px 10px black;
    border-radius: 50%;
  }

  strong {
    margin: 10% 0;
  }
`;
export const MatchsList = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px black;
  align-items: center;
  font-weight: bold;
  padding: 5px 8px;
  margin: 5px;
  width: 90%;

  img {
    width: 15%;
    height: 5vh;
    border-radius: 50%;
    box-shadow: none;
  }

  &:hover {
    background: #87cefa;
  }
`;

export const ButtonMatch = styled.img`
  width: 10% !important;
  height: 10% !important;
  box-shadow: none !important;

  &:hover {
    cursor: pointer;
    width: 9.5% !important;
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
  margin-bottom: 2% !important;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  font-size: 2em;

  b {
    color: #00bfff;
    text-shadow: 1px 1px 3px black;
  }

  span {
    color: #ff4500;
    font-weight: bold;
    text-shadow: 1px 1px 3px black;
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

