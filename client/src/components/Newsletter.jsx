import React from 'react'
import styled from "styled-components";
// import { mobile } from "../responsive";

const Main = styled.div`
background-image: url("https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?auto=compress&cs=tinysrgb&w=600");
background-size: cover;
background-repeat: no-repeat;
width: 100%;
object-fit: cover;
margin-top: 0;
`;
const Contact = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`;
const ContactForm = styled.div`
padding: 2.19em 5em;
    max-width: 40.5em;
    border-radius: 0.63em;
    display: flex;
    flex-direction: column;
`;
const ContactFormH2 = styled.h2`
text-align: center;
    color: sandybrown;
`;
const ContactInput = styled.input`
border-radius: 15px;
width: 18rem;
    border: 0;
    border-radius: 3%;
    padding: 1rem;
    margin: .5rem 0;
    font-size: 1rem;
`;
const ContactText = styled.textarea`
border-radius: 15px;
width: 18rem;
    border: 0;
    border-radius: 3%;
    padding: 1rem;
    margin: .5rem 0;
    font-size: 1rem;
`;
const ContactBtn = styled.button`
border: 1px solid whitesmoke;
font-size: large;
color: rgb(181, 233, 203);
background: rgb(255, 104, 49);
margin: 10px auto;
padding: 10px;
border-radius: 8%;
transition-delay: 0.1s;
cursor: pointer;
`;


const ContactUs = () => {
  return (
    <Main>
    <Contact>
        <form action="https://formspree.io/f/mqknjeao" method="post">
            <ContactForm>
                <ContactFormH2>Na kontaktoni</ContactFormH2>
                <label>
                    <ContactInput type="text" id="name" required placeholder="Emri jot..." />
                </label>
                <label>
                    <ContactInput type="text" id="email" required placeholder="Email jot..." />
                </label>
                <label>
                    <ContactInput type="text" id="email" required placeholder="Pershkrimi..." />
                </label>
                <label>
                    <ContactText name="
                " id="text" cols="20" rows="10"></ContactText>
                </label>

        <ContactBtn>Dergo</ContactBtn>
            </ContactForm>
        </form>
    </Contact>
    </Main>
  )
}

export default ContactUs