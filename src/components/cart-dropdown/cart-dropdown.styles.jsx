import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 291px;
  height: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 8%;
  z-index: 5;

  @media (max-width: 768px) {
    top: 120px;
    right: 20px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  width: 70%;
  font-family: "Roboto", sans-serif;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CartCloseButton = styled.p`
  cursor: pointer;
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 12px;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
