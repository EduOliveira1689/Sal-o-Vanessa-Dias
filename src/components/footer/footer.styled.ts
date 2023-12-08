import styled from "styled-components";

export const Container = styled.div`
position: relative;

`;


export const DivDivision = styled.div<{ height?: string }>`
display: flex;
width: 100%;
height: ${({ height }) => height ? height : 0};
background-color: #fcbcb2;

`;

export const ContainerData = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 11.25rem;
background-color: #31353d;

`;

export const TextDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
height: 1.25rem;
margin-top: 1.875rem;
color: aliceblue;

h2 {
  text-transform: uppercase;
  font-size: 1.375rem;
  font-weight: 400;
  font-family: 'Cinzel', serif;
}
`;

export const Email = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3.125rem;
width: 37.5rem;
height: 2.1875rem;
background-color: #31353d;
`;


export const InputEmail = styled.input`
box-sizing: border-box;
width: 106.25rem;
height: 2.1875rem;
border: none;
border-radius: 5px;
margin-bottom: 1.25rem #fcbcb2;
`;


export const ButtonEmail = styled.button`
width: auto;
height: 2.25rem;
margin-left: 0.25rem;
border-radius: 10px;
background-color: #fcbcb2;
cursor: pointer;
`;

export const Adress = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 6.25rem;
background-color: #fcbcb2;


ul {
  list-style: none;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 400;
  font-style: bold;
  font-family: 'Cinzel', serif;
}

`;



