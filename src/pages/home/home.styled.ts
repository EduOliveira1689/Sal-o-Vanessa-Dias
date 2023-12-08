import styled from "styled-components";
import Banner4 from "../../assets/img/banner4.png"
import BackgroungPaper from "../../assets/img/background.jpg"

export const Container = styled.div`
display: flex;
width: 100%;
`;

export const BoxBanner = styled.div`
width: 100%;
height: 870px;
background-color: aliceblue;
`;

export const BannerImage = styled.img`
display: flex;
width: 100%;
height: 800px;
object-fit: cover;
`;

export const BoxBanner2 = styled.div`
display: grid;
position: relative;
align-items: center;
justify-items: center;
width: 100%;
height: 31.25rem;
margin-top: -5rem;
`;

export const BannerImage2 = styled.img`
width: 100%;
height: 31.25rem;
object-fit: cover;
`;

export const TextImage2 = styled.div`
display: flex;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 60%;
height: 15.625rem;
border-radius: 0.3125rem;
background-color: rgba(49, 53, 61, 9);

h1 {
text-transform: uppercase;
color: rgb(252,188,178);
margin-bottom: 3.125rem;
font-family: 'Cinzel', serif;
margin-left: 1.875rem;
margin-right: 1.875rem;
text-align: center;
}

span{
color:aliceblue;
font-family: 'Cinzel', serif;
margin-bottom: 3.125rem;
margin-left: 1.875rem;
margin-right: 1.875rem;
text-align: center;
}
`;

export const ServicesBox = styled.div`
width: 100%;
height: 28.125rem;
display: flex;
align-items: center;
justify-content: center;
background: url(${Banner4});
background-size: cover;
background-repeat: no-repeat;
`;

export const Services1 = styled.div`
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
justify-content: center;
width: 18.75rem;
height: 16.25rem;
border-radius: 0.3125rem;
background-color: #31353d;
display: flex;

h1 {
  font-family: 'Cinzel', serif;
  font-weight: bold;
  color: aliceblue
}

button {
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;
  background-color: #fcbcb2;
  color: #31353d;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

button:hover{
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;
  background-color: aliceblue;
  color: #31353d;
  text-transform: uppercase;
  font-weight: bold;
}
`;

export const Services2 = styled.div`
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
justify-content: center;
width: 18.75rem;
height: 16.25rem;
border-radius: 0.3125rem;
background-color: #fcbcb2;
display: flex;

h1 {
  font-family: 'Cinzel', serif;
  font-weight: bold
}

button {
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;
  background-color: #31353d;
  color: aliceblue;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer; 
}

button:hover{
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;
  background-color: aliceblue;
  color: #31353d;
  text-transform: uppercase;
  font-weight: bold;
}
`;

export const ContainerServices = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
text-align: center;
width: 100%;
height: auto;
display: flex;
background: url(${BackgroungPaper});
background-repeat:unset ;
`;


export const DescriptionServices = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
height: 28.125rem;
animation: slidePage 1ms ease-in-out;
animation-timeline: view();
animation: cover 0% cover 35%;
animation-timing-function: cubic-bezier(0.4, 1, 0.22, 1.1);

@keyframes slidePage {

from{
  opacity: 0;
  translate: -100vw 0;
}

to{
  opacity: 1;
  translate: 0 0;
}
}
`;

export const DescriptionLine = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 90%;
height:  25rem;
margin-left: 3.125rem;
margin-right: 3.125rem;
align-items: center;
`;

export const ImageServices = styled.img`
width: 22.5rem;
height: 28.125rem;
border-radius: 1.5625rem;
`;


