// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character(props) {
    
    const {info, action} = props
    return(
      <StyledCharacter>  
        <div className="info-container">
            <div className="img">
                <img src={info.image}/>
            </div>
            <div className="info">
                <h3>{info.name}</h3>
                <p>is currently {info.status}</p>
                {/* <div className="button"> */}
                    <button onClick={() => action(info.id)}>See details</button>
                {/* </div> */}
            </div>
        </div>
    </StyledCharacter>    
    );
}



const StyledCharacter = styled.div`
/* *{
    border:2px black solid;
} */

.info-container{
    margin:auto;
    width:800px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(13,13,13,.8);
    border:2px white solid;
    border-radius:10px;
    &:hover{
        background-color:#0D0D0D;
    }
}
.img{
    width:300px;
    display:flex;
    justify-content:flex-end;
}
.info{
    width:500px;
    margin-left:30px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    color:#08AFC0;

}
img{
    /* margin-left:10%;
    margin-bottom:2%;
    margin-top:2%; */
    width:55%;
    border:1px white solid;
}
h3{
    margin-bottom:1px;
    font-family: 'Luckiest Guy', cursive;
    text-transform:uppercase;
    /* font-family:"montserrat"; */
    font-size:2.5rem;
    -webkit-text-stroke-width:.1px;
    -webkit-text-stroke-color:#F2EA77;
    display:flex;
    justify-content:flex-start;
}
p{
    /* margin-left:15px; */
    margin-top:.5px;
    font-family: 'Roboto', sans-serif;
    font-style:italic;
    font-size:1.2rem;
    display:flex;
    justify-content:flex-start;
}
/* .button{
    width:100%;
    margin-bottom:25px;
    
} */
button{
    width:30%;
    height:30px;
    font-family: 'Roboto', sans-serif;
    color:#F2EA77;
    background-color:#90BF49;
    border:3px #034001 solid;
    margin-bottom:25px;
    border-radius:10px;
}
`;