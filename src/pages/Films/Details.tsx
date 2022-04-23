import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { GetFilmById } from "./hooks/useFilms";

import Loading from "../../components/Loading";

import sample from "../../model/sample";

export interface InmageProps {
  character: object;
}

const Details: React.FC = () => {
  let params = useParams();
  let id = Number(params.id);
  const { data, isLoading } = GetFilmById(id);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <CharacterContainer>
      <StarfieldLeft />
      <CardContainer>
        <img src={sample.find((l) => l.id === id)?.pic} />
        <CharacterInfo>
          <h1>{data?.data.title}</h1>
          <h4>OPENING</h4>
          <span>{data?.data.opening_crawl}</span>
          <h4>EPISODE</h4>
          <span>{data?.data.episode_id}</span>
          <h4>PRODUCER</h4>
          <span>{data?.data.producer}</span>
          <h4>DIRECTOR</h4>
          <span>{data?.data.director}</span>
          <h4>RELEASE DATE</h4>
          <span>{data?.data.release_date}</span>
        </CharacterInfo>
      </CardContainer>
      <StarfieldRight />
    </CharacterContainer>
  );
};

export default Details;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;
  > img {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50vw;
    object-fit: contain;
    border-right: 2px solid #9e4f60;
    background-color: #151515;
  }
`;

const CharacterInfo = styled.div`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 30vw;
  padding: 20px;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash@2x-bd5b31294ea9.png");
  background-size: 7px;
  background-repeat: repeat-x;
  background-position: top left;
  background-color: #282727;
  > h1 {
    width: 100%;
    margin: 0 auto;
    color: #ddd;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  > h4 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  > p,
  a {
    color: #9e4f60;
    transition: color 125ms;
    text-transform: capitalize;
    text-decoration: none;
    :hover {
      color: rgb(183, 104, 121);
      cursor: pointer;
    }
  }
  > span {
    color: #aaa;
    text-transform: capitalize;
  }
`;

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`;
