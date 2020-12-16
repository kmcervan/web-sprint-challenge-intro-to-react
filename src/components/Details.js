import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Details(props){
    const { idC, close } = props
    const [ details, setDetails] = useState([])

    useEffect(() => {
        console.log(idC);
        axios.get(`https://rickandmortyapi.com/api/character/${idC}`)
        .then((res) => { 
            setDetails(res.data);
            console.log(res.data.results)
        })
        .catch(err => { console.log(err) })
    }, [idC])

    return (
        <StyledDiv>       
            <div className="container">
                <h2>{details.name}</h2>
           {
                 details &&
                 <>
                 <img src={details.image}/>
                 <p>{details.name} is currently {details.status}</p>
                 </>
             }
                <button onClick={close}>Close</button>
            </div>    
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
*{
    border:2px black solid;
}
.container{
    margin:auto;
    width:400px;
    background-color:rgba(13,13,13,.8);
    border:2px white solid;
    border-radius:10px;
    margin-bottom:20px;
    color:#08AFC0;
    font-size:1.2rem;
}
img{
    border-radius:10px;
}
h2{
    
    font-family: 'Luckiest Guy', cursive;
    /* text-transform:uppercase; */
    font-size:2.5rem;
    -webkit-text-stroke-width:.1px;
    -webkit-text-stroke-color:#F2EA77;
}
button{
    margin-bottom:20px;
}
`;


// <div className="container">
//             <h2>{details.name}</h2>
//             {
//                 details &&
//                 <>
//                 <img src={details.image}/>
//                 <p>{details.name} is currently {details.status}</p>
//                 </>
//             }
//             <button onClick={close}>Close</button>
//         </div>  

{/* <div className="detail-img">
                <img src={details.image}/>
            </div>
            {
            details &&
            <>
            <div className="name">
                <h2>{details.name}</h2>
                <p>{details.species}</p>
                <p>{details.gender}</p>
                <p>{details.origin}</p>
                <p>{details.status}</p>
            </div>
            </> 
        }  */}