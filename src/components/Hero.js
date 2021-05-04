import React from 'react'
import styled from 'styled-components'
import Travel from "./videos/bookks.mp4";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
               <video autoPlay loop muted
               style={{
                   position: "absolute",
                   width: "100%",
                   left: "50%",
                   top: "50%",
                   height: "2000%",
                   objectFit: "cover",
                   transform: "translate(-50%, -50%)",
                   zIndex: "-1"
               }}
               >

                   <source src={Travel} type="video/mp4"/>
               </video>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1><h1>BANASTHALI VIDYAPITH</h1></HeroH1>
                    <HeroP><h2>WELCOME TO LIBRARY!!</h2></HeroP>
                   
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div `
background : transparent;
display: flex;
justify-content: center;
align-items: center;
height: 100px;
padding: 0 1rem;
position: relative;
marigin-top: -80px:
color: #fff;

:before {
    content: "";
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
}
`
const HeroBg = styled.div `
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%
overflow: hidden;
`
/* const VideoBg = styled.div `
width:100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
` */
const HeroContent= styled.div `
z-index: 3;
height: calc(100vh - 80px);
max-height : 100px;
padding: 0rem calc((100vw - 1300px)/2);
`
const HeroItems = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
max-height: 100%
padding:0;
color: #fff;
line-height: 1.1;
font-weight:bold;
`
const HeroH1 = styled.div `
color:black;
font-size: clamp(1.2rem, 4vw, 3rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1 rem;
`
const HeroP = styled.div `
color: black;
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;
font-weight : 400;
`