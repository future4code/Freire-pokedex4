import styled from "styled-components";
import imgpkm from "../assets/img/pokeBolaBg.png";

export const Background = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px 0px 0 20px;
  grid-template-columns: auto;
  background-color: #5d5d5d;
  margin: 0;
  color: white;
  flex-wrap: wrap;
  display: flex;
`;
export const SearchDiv = styled.div`
  display: flex;
  padding: 5px 50px;
  align-items: center;
  justify-content: space-between;
  background-color: purple;
  color: white;

  input {
    align-items: center;

    width: 200px;
    height: 15px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const CardPkm = styled.div`
  margin: 10px 10px;
  padding: 5px;
  border-radius: 20px;

  height: 300px;
  width: 400px;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 17px;
  font-weight: bold;
  background-image: url(${imgpkm});
  background-repeat: no-repeat;
  background-color: purple;

  background-position: top right;
`;

export const Types = styled.div`
  display: inline-block;
  margin: 5px;
  width: 65px;
  height: 28px;
  border-radius: 10px;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "grass":
        return "#729F92";
      case "poison":
        return "#AD61AE";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "flying":
        return "#BF9762";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";

      default:
    }
  }}; ;
`;
export const CaptureDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
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
  &:hover {
    opacity: 70%;
  }
`;
