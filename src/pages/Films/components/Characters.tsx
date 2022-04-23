import styled from "styled-components";
import { Link } from "react-router-dom";

import sample from "../../../model/sample";

export interface CharProps {
  character: any;
  title: string;
  id: number;
}

const Character: React.FC<CharProps> = ({ character, title, id }) => {

  return (
    <CharacterContainer>
      <Link to={`/${title}/${id}`}>
        <img src={sample.find(l => l.id === id)?.pic}/>
        <h1>{character.title}</h1>
        <h3>director: {character.director}</h3>
        <h3>producer: {character.producer}</h3>
      </Link>
      <Decal/>
    </CharacterContainer>
  );
};

export default Character;

const CharacterContainer = styled.div`
  border-radius: 6px;
  width: 266px;
  background-color: #282727;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.05);
  }

img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 266px;
    height: 300px;
    border-bottom: 2px solid #9e4f60;
  }

 h1 {
    background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top@2x-1d6544f5cc3a.png");
    padding: 8px;
    display: inline-block;
    color: #ddd;
    font-size: 17px;
    text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;

    :hover {
      color: #9e4f60;
    }
  }

  h3 {
    display: inline-block;
    color: #ddd;
    font-size: 14px;
    padding: 8px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;
  }
`;




const Decal = styled.div`
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/decal@2x-937ac7c57dff.png");
  height: 47px;
  width: 47px;
  opacity: 0.06;
  position: absolute;
  bottom: -32px;
  right: 10px;
  background-size: 300% 200%;
  transform: scaleY(-1);
  background-position: -100% 0;
`;
