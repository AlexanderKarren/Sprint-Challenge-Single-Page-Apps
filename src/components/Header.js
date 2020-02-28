import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color:black;
  color:white;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 20px;
`

const MainHeading = styled.h1`
  font-family: 'Trade Winds', sans-serif;
  font-size:200%;
`

const Links = styled.div`
  width:20%;
  display:flex;
  justify-content:space-between;
`

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
}

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <MainHeading className="ui center">Rick &amp; Morty Fan Page</MainHeading>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </Links>
    </StyledHeader>
  );
}
