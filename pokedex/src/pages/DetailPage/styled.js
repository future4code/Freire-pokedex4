import styled from "styled-components";
import CampBattle from "../../assets/img/campBattle.jpg";

export const ContainerDiv = styled.div`
  text-align: center;
`;
export const BackgroundDetail = styled.div`
  background-image: url(${CampBattle});
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`;

export const BaseStats = styled.div`
  display: flex;
`;
