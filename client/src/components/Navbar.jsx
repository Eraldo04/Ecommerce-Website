import { Badge } from "@material-ui/core";
import {   ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/userRedux";



const TopContainer = styled.div`
  height: 60px;
  background-color: #e6e0e2;
  ${mobile({ height: "50px" })}
`;

const Walp = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;






const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();


  const handleClickLogout = () => {
    dispatch(logoutSuccess(user))
  }

  return (
    <TopContainer>
      <Walp>
        <Left>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <Logo>Wise Shop</Logo>
          </Link>
        </Left>
        <Center>
        </Center>
        <Right>
          <Link to="/login" style={{ textDecoration: "none" }}>
          <MenuItem onClick={() => handleClickLogout(user)}>Dil</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Walp>
    </TopContainer>
  );
};

export default Navbar;
