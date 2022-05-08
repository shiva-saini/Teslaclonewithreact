import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      description = "Order Online For Touchless Delivery"
      LeftBtnTxt = "CUSTOM ORDER"
      RightBtnTxt = "EXISTING INVENTORY"
      backgroundImg = "model-s.jpg"

       />
      <Section 
       title="Model 3"
       description= "Order Online For Touchless Delivery"
       LeftBtnTxt= "CUSTOM ORDER"
       RightBtnTxt = "EXISTING INVENTORY"
       backgroundImg = "model-3.jpg"
      />
      <Section 
      title="Model X"
      description= "Order Online for Touchless Delivery"
      LeftBtnTxt= "CUSTOM ORDER"
      RightBtnTxt = "EXISTING INVENTORY"
      backgroundImg = "model-x.jpg"
      />
      <Section
      title="Model Y"
      description= "Order Online For Touchless Delivery"
      LeftBtnTxt= "CUSTOM ORDER"
      RightBtnTxt = "EXISTING INVENTORY"
      backgroundImg = "model-y.jpg"
      />
      <Section
      title="New Interior"
      description= "Order Online For Touchless Delivery"
      LeftBtnTxt= "CUSTOM ORDER"
      RightBtnTxt = "EXISTING INVENTORY"
      backgroundImg = "new-interior.jpg"
      />
      <Section
      title="Solar Panel"
      description= "Lowest Cost Solar Panels in America"
      LeftBtnTxt= "ORDER NOW"
      RightBtnTxt = "LEARN MORE"
      backgroundImg = "solar-panel.jpg"
      />
      <Section
      title="Solar Roof"
      description= "Produce Clean Energy From Your Roof"
      LeftBtnTxt= "ORDER NOW"
      RightBtnTxt = "LEARN MORE"
      backgroundImg = "solar-roof.jpg"
      />
      <Section
      title="Accessories"
      description= "Order Online For Touchless Delivery"
      LeftBtnTxt= "SHOP NOW"
      backgroundImg = "accessories.jpg"
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
          height:100vh;
`
