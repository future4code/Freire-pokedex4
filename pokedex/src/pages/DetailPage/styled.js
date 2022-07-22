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
padding-top:14px ;
padding-bottom:50px ;
display: flex;
flex-direction: column;
justify-content: center;


align-items: center;

@media (max-width: 1200px) {
    width: auto;
    
  }
`

export const H1 = styled.h1`
  color: rgba(255, 255, 255, 0.4);
  font-family: Fredoka -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const BackgroundDetail = styled.div`
  flex-wrap: wrap;
  display: flex;
  background-image: url(${CampBattle});
  width: 1000px;
  height: 531px;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 10px 10px 10px black;
  border-radius: 1.5rem;
  padding:8px ;
  text-align: center;
  @media (max-width: 1080px) {
    width: auto;
  }
`;

export const GlassImageOne = styled.div`
  display: flex;
  width: 120px;
  height: 100px;
  margin: 15px 50px ;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top: 1.4px solid rgba(255, 255, 255, 0.18);
  border-left: 1.4px solid rgba(255, 255, 255, 0.18);
  border-right: 1.4px solid #4d4d4d18;
  border-bottom: 1.4px solid #4d4d4d18;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  /* backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px); */
`;

export const BaseStats = styled.div`
  width: 220px;
  height: 300px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top: 1.4px solid rgba(255, 255, 255, 0.18);
  border-left: 1.4px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
