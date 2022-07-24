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
  justify-content: space-around;
`;
export const SearchDiv = styled.div`
  display: flex;
  padding: 5px 50px;
  align-items: center;
  justify-content: space-between;
  background-color: purple;
  color: white;
  background-color: #5d5d5d;
  border: none;
  font-size: medium;

  input {
    align-items: center;
    border: none;
    background-color: #D3D3D3;
    width: 150px;
    height: 15px;
    padding: 10px;
    box-shadow: 0px 2px 2px (0,0,0,0.25);
    border-radius: 4px;
    color: white;
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
  background-position: top right;

  background-color: ${(props) => {
    switch (props.backGroundColor) {
      case "grass":
        return "#9bcc50";
      case "poison":
        return "#b97fc9";
      case "fire":
        return "#fd7d24";
      case "water":
        return "#4592c4";
      case "flying":
        return "#3dc7ef ";
      case "bug":
        return "#729f3f";
      case "normal":
        return "#a4acaf";
      case "ground":
        return "#ab9842";
      case "electric":
        return "#eed535";
      case "fairy":
        return "#fdb9e9";
      case "psychic":
        return "#f366b9";
      case "fighting":
        return "#d56723";
      case "rock":
        return "#a38c21";
      case "steel":
        return "#9eb7b8";
      case "ghost":
        return "#7b62a3";
      case "ice":
        return "#51c4e7";
      case "dark":
        return "#707070";
      case "dragon":
        return "#f16e57";

      default:
    }
  }}; 
`;

export const Types = styled.div`
  display: inline-block;
  margin: 5px;
  width: 66px;
  height: 26px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "grass":
        return "#9bcc50";
      case "poison":
        return "#b97fc9";
      case "fire":
        return "#fd7d24";
      case "water":
        return "#4592c4";
      case "flying":
        return "#3dc7ef ";
      case "bug":
        return "#729f3f";
      case "normal":
        return "#a4acaf";
      case "ground":
        return "#ab9842";
      case "electric":
        return "#eed535";
      case "fairy":
        return "#fdb9e9";
      case "psychic":
        return "#f366b9";
      case "fighting":
        return "#d56723";
      case "rock":
        return "#a38c21";
      case "steel":
        return "#9eb7b8";
      case "ghost":
        return "#7b62a3";
      case "ice":
        return "#51c4e7";
      case "dark":
        return "#707070";
      case "dragon":
        return "#f16e57";
      default:
    }
  }}; 
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
