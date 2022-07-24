import styled from "styled-components";

export const DivTop = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  @media (max-width: 510px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  box-shadow: 2px 1px 7px #808080;
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  color: white;
  background-color: #33a4f5;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  &:hover {
    background-color: #9370DB;
    animation: bounce 0.9s linear;
  }
  @keyframes bounce {
    20% {
        transform: translateY(-6px);
    }
    40% {
        transform: translateY(0px);
    }

    80% {
        transform: translateY(-2px);
    }
    100% {
        transform: translateY(0);
    }
}


`;

export const Button2 = styled.button`
  box-shadow: 2px 1px 7px #808080;
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  color: white;
  background-color: #33a4f5;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  &:hover {
    background-color: #9370DB;
    animation: bounce 0.9s linear;
  }
  @keyframes bounce {
    20% {
        transform: translateY(-6px);
    }
    40% {
        transform: translateY(0px);
    }

    80% {
        transform: translateY(-2px);
    }
    100% {
        transform: translateY(0);
    }
}
@media (max-width: 650px) {
    display: none;
  }


`;

export const ImgLogo = styled.img`
 &:hover {
    animation: bounce 0.9s linear;
  }
  @keyframes bounce {
    20% {
        transform: translateY(-7px);
    }
    40% {
        transform: translateY(0px);
    }

    80% {
        transform: translateY(-2px);
    }
    100% {
        transform: translateY(0);
    }
}
@media (max-width: 650px) {
    width: 290px;

    margin-bottom: 20px;
  }


`
