import React, { useState, useEffect } from 'react';
import SearchForm from "./SearchForm";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";

const EpisodeList = () => {
    const [query, updateQuery] = useState("");
    const [episodeList, updateList] = useState([]);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode")
        .then(response => {
            console.log(response.data.results);
            updateList(response.data.results);
        })
        .catch(error => {
          console.log("ERP MORTY", error);
        })
      }, [])

    return (
        <section className="episode-list">
            <SearchForm bgColor="#98FB98" updateQuery={updateQuery}/>
            {episodeList.map(episode => {
                let passed = false;
                Object.values(episode).forEach(value => {
                    if ((typeof value === "string") && (!(value.includes("https")))) {
                        if (value.toLowerCase().includes(query.toLowerCase())) {
                            passed = true;
                        }
                    }
                })
                    if (passed) {
                        return <EpisodeCard episode={episode}/>
                    }
                })}
        </section>
    )
}

export default EpisodeList;