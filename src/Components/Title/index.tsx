import styled from "styled-components";

interface TitleProps {
  cor?: string;
  fontSize?: string;
  textAlign?: string;
}

export const Title = styled.h2<TitleProps>`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.cor || "#000"};
  font-size: ${(props) => props.fontSize || "18px"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: 0;
`;
