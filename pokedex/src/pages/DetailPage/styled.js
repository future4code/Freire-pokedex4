import styled from "styled-components";
import CampBattle from "../../assets/img/campBattle.jpg";

export const ContainerDiv = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: start;
  background-color: #5d5d5d;
  padding: 30px;
`;
export const AlignDiv = styled.div`
  background-color: #4d4d4d;
  border-radius: 20px;

  margin: 10px;
  padding-top: 14px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  @media (max-width: 1200px) {
  }
`;

export const H1 = styled.h1`
  color: rgba(255, 255, 255, 0.4);
  font-family: Fredoka -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const ContainerNameTypes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 50px;
`;

export const H2 = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: xx-large;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  margin: 34px 60px 20px 0px;
`;

export const Types = styled.div`
  width: 66px;
  height: 24px;
  border-radius: 10px;
  margin: 34px 20px 20px 0;

  text-align: center;
  color: antiquewhite;
  font-family: cursive;
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
  }}; ;
`;

export const BackgroundDetail = styled.div`
  flex-wrap: wrap;
  display: flex;
  background-image: url(${CampBattle});
  width: 800px;
  height: 531px;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 10px 10px 10px black;
  border-radius: 1.5rem;
  padding: 8px;
  text-align: center;
  @media (max-width: 950px) {
    width: 750px;
  }
`;

export const GlassImageOne = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin: 0px 50px 10px 50px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-top: 1.7px solid rgba(255, 255, 255, 0.18);
  border-left: 1.7px solid rgba(255, 255, 255, 0.18);
  border-right: 1.4px solid #4d4d4d18;
  border-bottom: 1.4px solid #4d4d4d19;
  img {
    margin-left: 20px;
    align-items: center;
  }

  /* backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); */
`;

export const BaseStats = styled.div`
  color: purple;
  text-transform: uppercase;

  width: 220px;
  height: 475px;
  border-radius: 20px;
  margin: 15px 70px 0 0;
  color: purple;
  text-transform: uppercase;

  background-color: rgba(255, 255, 255, 0.15);
  border-top: 2px solid rgba(255, 255, 255, 0.18);
  border-left: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  p {
    margin: 20px 0 8px 0px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 18px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin: 14px 0 30px 0px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const BarraDeProgesso = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  width: ${(props) => props.width}px;
  height: 8px;
  border-radius: 1vw;
  background-color: green;
`;
