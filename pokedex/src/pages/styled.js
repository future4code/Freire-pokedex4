import styled from "styled-components";
import imgpkm from "../assets/img/pokeBolaBg.png"

export const Background = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px 30px;
  background-color: #5d5d5d;
  margin: 0;
  color: white;
  flex-wrap: wrap;
  display: flex;
`

export const CardPkm = styled.div`
  margin: 10px 10px;
  padding: 5px;
  border-radius: 20px;
  height: 300px;
  width: 300px;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 17px;
  font-weight: bold;
  background-image: url(${imgpkm});
  background-repeat: no-repeat;
  background-color: purple;
  background-position: top right;
`
export const CaptureDiv = styled.div `
display: flex;
justify-content: space-evenly;
` 
export const ButtonCapture = styled.button`
  
  box-shadow: 2px 1px 2px grey;
  border: none;
  border-radius: 8px;
  width: 90px;
  height: 40px;
  color: darkblue;
  background-color: yellow;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  &:hover{
    opacity: 70%;
  }
`