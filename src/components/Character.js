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
    background-color:rgba(0,0,0,.5);
    border:2px white solid;
    &:hover{
        background-color:black;
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
}
.info{
    margin-left:10%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    color:yellow;

}
p{
    margin-left:5%;
    margin-top:.5px;
}
`;