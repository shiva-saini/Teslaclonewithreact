import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux'





function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
     <a>
       <img src="/images/logo.svg" alt="" srcset="" />
     </a>
     <Menu>
       {cars && cars.map((car,index)=>{
         return (
          <a href="#" key={index}>{car}</a>
         ) 
       })}
       
       {/* <a href="#">Model 3</a>
       <a href="#">Model x</a>
       <a href="#">Model y</a>
       <a href="#">solar roof</a>
       <a href="#">solar panel</a> */}
     </Menu>
     <RightMenu>
     <a href="#">Shop </a>
       <a href="#">account</a>
       <a href="#">menu</a>
       <CustomMenu onClick = {() => setBurgerStatus(true)}/>
     </RightMenu>
     <BurgerNav show = { burgerStatus }>
       <CloseWrapper>
          <CustomClose onClick = {() => setBurgerStatus(false)}/>
       </CloseWrapper>
       {cars && cars.map((car,index)=>{
          return (
            <li><a href="#" key = {index}>{car}</a></li>
          )
       })}
       <li><a href="#">Existing Inventory</a></li>
       <li><a href="#">Used Inventory</a></li>
       <li><a href="#">Trade-in</a></li>
       <li><a href="#">Test Drive</a></li>
       <li><a href="#">Insurence</a></li>
       <li><a href="#">CyberTruck</a></li>
       
     </BurgerNav>
     
    
    </Container>
  )
}

export default Header
const Container = styled.div`
        height:60px;
        padding: 0 20px;
        display:flex;
      align-items:center;
      justify-content:space-between;
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:1;
`
const Menu = styled.div`
       display:flex;
       flex:1;
       align-items:center;
       justify-content:center;

       a{
         padding: 0 10px;
         font-weight:600;
         text-transform:uppercase;
         flex-wrap:nowrap;
       }

       @media(max-width:768px){
         display:none;
       }

`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  padding: 0 10px;
  font-weight:600;
  text-transform:uppercase;
  flex-wrap:nowrap;
}
`

const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`

const BurgerNav = styled.div`
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        background:white;
        width:300px;
        display:flex;
        flex-direction:column;
        padding:20px;
        text-align:start;
        transform: ${props => props.show ? `translateX(0%)`:`translateX(100%)`};
        transition: transform 0.2s ease-in;
         li{
           list-style:none;
           padding:15px;
           border-bottom: 1px solid rgb(0,0,0,.2);
           a{
             font-weight:600px;
           }
         }
`

const CloseWrapper = styled.div`

display:flex;
justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`




