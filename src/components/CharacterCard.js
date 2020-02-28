import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
  display:flex;
  width:45%;
  margin: 20px 0;
  background-color:#F0F8FF;
`

const Information = styled.div`
  padding:20px;
`

const CardHeading = styled.h2`
  font-size:150%;
  font-weight:bold;
`

const CharacterCard = ({ character }) => {
  return (
    <Container>
      <img src={character.image} alt="character" />
      <Information>
        <CardHeading>{character.name}</CardHeading>
        <p><span>Species:&nbsp;</span>{character.species}</p>
        <p><span>Status:&nbsp;</span>{character.status}</p>
        <p><span>Gender:&nbsp;</span>{character.gender}</p>
      </Information>
    </Container>
  )
}

export default CharacterCard;
