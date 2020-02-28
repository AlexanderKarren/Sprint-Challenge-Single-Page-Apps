import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import LocationCard from "./LocationCard";
import axios from "axios";
import styled from "styled-components";

const LocationsList = () => {
    const [query, updateQuery] = useState("");
    const [locationsList, updateList] = useState([]);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location")
        .then(response => {
            console.log(response.data.results);
            updateList(response.data.results);
        })
        .catch(error => {
          console.log("ERP MORTY", error);
        })
      }, [])

    return (
        <section class="locations-list">
            <SearchForm updateQuery={updateQuery}/>
            {locationsList.map(location => {
                let passed = false;
                Object.values(location).forEach(value => {
                    if ((typeof value === "string") && (!(value.includes("https")))) {
                        if (value.toLowerCase().includes(query.toLowerCase())) {
                            passed = true;
                        }
                    }
                })
                    if (passed) {
                        return <LocationCard location={location}/>
                    }
                })}
        </section>
    )
}

export default LocationsList;