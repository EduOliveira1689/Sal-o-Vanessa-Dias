import styled from "styled-components";

export const SpaceHeader = styled.div`
width: 100%;
height: 2.5rem;
display: flex;
position: fixed;
align-items: center;
justify-content: right;
background-color: #fcbcb2;
z-index: 1;
`;


export const NavigationSocial = styled.div`
width: 6.25rem;
height: 1.5625rem;
align-items: center;
justify-content: end;
display: flex;
margin-right: 3.125rem;

  svg {
   width: 1.5625rem;
   height: 1.25rem;
   opacity: 0.9;
   margin-left: 0.625rem;
   cursor: pointer;
}

  :hover {
  opacity: 1;
  transform: translateY(-0.125rem);
  cursor: pointer;
}
`;

export const Contact = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 9.375rem;
height: 1.875rem;
border-radius: 1.25rem;
background-color: aliceblue;
cursor: pointer;

:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 1.25rem;
  background-color: #31353d;
  color: aliceblue;
}

span{
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9375rem;
}
`;

export const Container = styled.div`
display: flex;
position: fixed;
align-items: center;
margin-top: 2.5rem;
width: 100%;
height: 4.0625rem;
justify-content: space-between;
background-color: #31353d;
z-index: 1;
`;

export const HeaderPage = styled.div`
display: flex;
align-items: center;
`;

export const Logo = styled.img`
width: 6.25rem;
height: 3.25rem;
margin-left: 1.25rem;
`;

export const ButtonNavigate = styled.button`
display: flex;
width: 6.25rem;
height: 1.875rem;
border-radius: 1.875rem;
align-items: center;
justify-content: center;
background-color: #31353d;
border: none;
color: white;
cursor: pointer;
margin-right: 2.5rem;

span{
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9375rem;
}

:hover {
  display: flex;
  width: 6.25rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  align-items: center;
  justify-content: center;
  color: gold;
}
`;