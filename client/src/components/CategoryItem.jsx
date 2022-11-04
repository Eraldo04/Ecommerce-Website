import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const TopContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    display: inline-block;
    padding: 10px 30px;
    margin: 30px 0;
    border-radius: 40px;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <TopContainer>
      <Link to={`/products/${item.category}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Blej Tani</Button>
      </Info>
      </Link>
    </TopContainer>
  );
};

export default CategoryItem;
