import React from "react";
import { Sentry } from "react-activity";
import styled from "styled-components";

export default function Loading() {
  return (
    <AppLoading>
      <AppLoadingContents>
        <Sentry color="#fff" size={60} animating />
      </AppLoadingContents>
    </AppLoading>
  );
}

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;