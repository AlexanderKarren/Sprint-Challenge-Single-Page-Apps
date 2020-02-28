import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color:#F0FFF0;
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:30px;
`

const Heading = styled.h2`
  font-size:150%;
  font-weight:bold;
`

const Links = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:20px;
`
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Container>
        <Heading>ERP! It-it-it it's the Rick and Morty API, Morty!</Heading>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Links>
          <NavLink className="card-link" to="/characters">Characters</NavLink>
          <NavLink className="card-link" to="/locations">Locations</NavLink>
          <NavLink className="card-link" to="/episodes">Episodes</NavLink>
        </Links>
      </Container>
    </section>
  );
}
