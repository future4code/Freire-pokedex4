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

`

export const H2 = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: xx-large;
  text-transform: uppercase;
 margin-right: 60px;
`;

export const Types = styled.div`
  display: inline-block;
  margin: 5px;
  width: 65px;
  height: 28px;
  border-radius: 10px;
  text-align: center;
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
  @media (max-width: 1080px) {
    width: 700px;
  }
`;

export const GlassImageOne = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  margin: 0px 50px;
  margin-bottom: 15px;
  padding: 10px;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.15);

  border-radius: 20px;
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
  height: 450px;
  border-radius: 20px;
  margin: 15px 70px 0 0;
  color: purple;
  text-transform: uppercase;

  background-color: rgba(255, 255, 255, 0.15);
  border-top: 1.4px solid rgba(255, 255, 255, 0.18);
  border-left: 1.4px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  
`;

export const BarraDeProgesso = styled.div`
margin:10px;
display: flex;
width: ${props => props.width}px;
height: 5px;
border-radius: 1vw;
background-color: antiquewhite;

`
