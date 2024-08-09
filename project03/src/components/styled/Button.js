import styled from "styled-components";

export const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
min-width : 220px;
border-radius: 5px;
border: none;
font-size : 16px;
border : 1px solid black;
transition : 0.4s ease-in; 

&:hover{
  background-color : white;
  border : 1px solid black;
  color : black;
  transition : 0.3s ease-in; 
}

`;
export const OutLineButton = styled(Button)`
background-color : white;
border-radius : 1px solid black ;
color : black ;
  &:hover{
  background-color : black;
  border : 1px solid transparent;
  color : white;
 
}
`;