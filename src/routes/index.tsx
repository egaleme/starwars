import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "../components/Header";
import Navbar from "../components/NavBar";

import Films from "../pages/Films";
import People from "../pages/People";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import StarShips from "../pages/StarShips";
import Vehicles from "../pages/Vehicles";

import Film from "../pages/Films/Details";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #151515;
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

const Index = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<Film/>}/>
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<StarShips />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route
          path="*"
          element={
            <NotFound>
              <NotFoundContents>
                <p style={{ color: "white" }}>There's nothing here!</p>
              </NotFoundContents>
            </NotFound>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default Index;

const NotFound = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const NotFoundContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
