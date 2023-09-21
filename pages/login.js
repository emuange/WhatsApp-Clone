import Head from "next/head";
import Image from "next/image";
import logo from '../public/logo.png';
import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Logo = styled.img``;


function Login() {
  return (
    <Container>
        <Head>
            <title>Login</title>    
        </Head>        

      <LoginContainer>
        
        <Button variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  
  )
}

export default Login

