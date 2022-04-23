import React from "react";
import styled from "styled-components";

import { GetFilms } from "./hooks/useFilms";
import Character from "./components/Characters";
import Loading from "../../components/Loading";

export default function Index() {
  const { data: characters, isLoading } = GetFilms();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <CharactersContainer>
        {characters?.data.results.map((l: object, index: number) => (
          <Character
            title="films"
            character={l}
            key={index.toLocaleString()}
            id={index + 1}
          />
        ))}
      </CharactersContainer>
    </Container>
  );
}

const Container = styled.div``;

const CharactersContainer = styled.div`
  display: flex;
  margin-top: 200px;
  padding: 30px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  background-color: #151515;
`;
