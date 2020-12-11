import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Details(props){
    const { charaId, close } = props
    const [ details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then((res) => { 
            setDetails(res.data.results);
            // console.log(res.data.results)
        })
        .catch(err => { console.log(err) })
    }, [charaId])

    return (
        <div className="container">
            <h2>{details.name}</h2>
            {
                details &&
                <>
                <img src={details.url}/>
                <p>{details.name} is currently {details.status}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}