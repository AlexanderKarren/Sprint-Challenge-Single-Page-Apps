import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
  display:flex;
  flex-direction:column;
  align-items:center;
  width:80%;
  margin: 20px 0;
  padding:20px;
  background-color:#FFEFD5;
`

const LocationHeading = styled.h2`
  font-size:150%;
  font-weight:bold;
`

const Information = styled.div`
  padding:20px;
`

const LocationCard = ({location}) => {
  return (
    <Container>
      <LocationHeading>{location.name}</LocationHeading>
      <Information>
        <p><span>Type:&nbsp;</span>{location.type}</p>
        <p><span>Dimension:&nbsp;</span>{location.dimension}</p>
      </Information>
    </Container>
  )
}

export default LocationCard;