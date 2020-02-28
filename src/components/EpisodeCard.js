import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
  display:flex;
  justify-content:center;
  width:30%;
  margin: 20px 0;
  background-color:#98FB98;
`

const Information = styled.div`
  padding:20px;
`

const CardHeading = styled.h2`
    font-size:130%;
    font-weight:bold;
`

const EpisodeCard = ({episode}) => {
    return (
        <Container>
            <Information>
                <CardHeading>{episode.episode} - {episode.name}</CardHeading>
                <p>Aired {episode.air_date}</p>
            </Information>
        </Container>
    )
}

export default EpisodeCard;