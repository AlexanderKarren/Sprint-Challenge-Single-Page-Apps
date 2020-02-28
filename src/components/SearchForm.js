import React, { useState } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const SearchContainer = styled.form`
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius:10px;
  padding:10px;
  width:60%;
`

const SearchBar = styled.input`
  outline:none;
  border:0;
  background-color:inherit;
  font-size:120%;
  width:95%
`

const SearchForm = ({ updateQuery, bgColor }) => {
  const handleChange = event => {
    updateQuery(event.target.value);
  }
  return (
    <section className="search-form">
      <SearchContainer style={{backgroundColor:bgColor}}>
        <ReactSVG src="search.svg" />
        <SearchBar type="text" onChange={handleChange}/>
      </SearchContainer>
    </section>
  );
}

export default SearchForm;