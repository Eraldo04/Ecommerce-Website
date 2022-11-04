import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const TopContainer = styled.div`
  display: flex;
  background-color: #dcd9da;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Tags = styled.a`
  text-decoration: none;
`

const Footer = () => {
  return (
    <TopContainer>
      <Left>
        <Logo>Choose Wise.</Logo>
        <Desc>
          Sa herë që ti dëshiron të shkosh diku, ti e di se ku 
          ta bësh ndalesën e parë.
          Zgjidh më të mirën për më të mirin.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Linke ndihmës</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Shporta</ListItem>
          <ListItem>Koleksioni Meshkuj</ListItem>
          <ListItem>Koleksioni Femra</ListItem>
          <ListItem>Kontakt</ListItem>
          <ListItem>Akounti Im</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <Tags href="https://www.google.com/maps/search/Rr.Rrapo+Hekali,+Q%C3%ABndra+Kristal,+Tiran%C3%AB/@41.3289752,19.7969378,14z/data=!3m1!4b1" target="_blank" rel="noreferrer">
          <Room style={{marginRight:"10px"}}/> Rr.Rrapo Hekali, Qëndra Kristal, Tiranë
          </Tags>
        </ContactItem>
        <ContactItem>
          <Tags href="tel:(+355) 685640385">
          <Phone style={{marginRight:"10px"}}/> +355 685640385
          </Tags>
        </ContactItem>
        <ContactItem>
          <Tags href="mailto:Eraldo.Kanani@fti.edu.al">
          <MailOutline style={{marginRight:"10px"}} /> Eraldo.kanani@fti.edu.al
          </Tags>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </TopContainer>
  );
};

export default Footer;
