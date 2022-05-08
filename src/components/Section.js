import React from 'react'
import styled from 'styled-components'

function Section({title,description,LeftBtnTxt,RightBtnTxt,backgroundImg}) {
  return (
    <Wrap bgImg = {backgroundImg}>
      <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
      </ItemText>
      <Buttons>
      <ButtonGrounp>
              <LeftButton>
                     {LeftBtnTxt}
              </LeftButton>
              { RightBtnTxt && 
              <RightButton>
                {RightBtnTxt}
              </RightButton>
              }
              
      </ButtonGrounp>
      <DownArrow src="images/down-arrow.svg" />
      </Buttons>
      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
height:100vh;
width:100vw;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-3.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=> `url("/images/${props.bgImg}")`};
`
const ItemText = styled.div`
    padding-top:15vh; 
    text-align:center;
   
     
`

const ButtonGrounp = styled.div`
display:flex;
@media(max-width:768px){
  flex-direction:column;
  margin-top:10px;
}
`
const LeftButton = styled.div`
height:40px;
width:256px;
text-align:center;
background-color:black;
color:white;
border-radius:100px;
curser:pointer;
display:flex;
justify-content:center;
aligh-items:center;
opacity:0.65;
text-transform:uppercase;
font-size:15px;
padding:10px;
margin:5px

`
const RightButton = styled(LeftButton)`

background-color:white;
opacity:0.65;
color:black;

`
const Buttons = styled.div`
`
const DownArrow = styled.img`
height:40px;
animation:animateDown infinite 1.5s;
`