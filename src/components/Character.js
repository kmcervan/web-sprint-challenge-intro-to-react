// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character(props) {
    
    const {info, action} = props
    return(
      <StyledCharacter>  
        <div className="info-container">
            <img src={info.image}/>
            <div className="info">
                <h3>{info.name}</h3>
                <p>is currently {info.status}</p>
            </div>
            {/* <button onClick={() => action(info.id)}>See details</button> */}
        </div>
    </StyledCharacter>    
    );
}



const StyledCharacter = styled.div`

.info-container{
    display:flex;
    align-items:center;
    background-color:rgba(61,55,60,.5);
    border:2px #83D2E4 solid;
    &:hover{
        background-color:#3D373C;
    }
}
img{
    margin-left:10%;
    margin-bottom:2%;
    margin-top:2%;
    width:20%;
    display:flex;
    justify-content:flex-start;
    border:1px black solid;
}
h3{
    margin-bottom:1px;
    text-transform:uppercase;
    font-family:"montserrat";
    font-size:2rem;
    -webkit-text-stroke-width:.2px;
    -webkit-text-stroke-color:black;
}
.info{
    margin-left:10%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    color:#8BCF21;

}
p{
    margin-left:10px;
    margin-top:.5px;
    font-family:"lora";
    font-style:italic;
    font-size:1.5rem;
}
`;