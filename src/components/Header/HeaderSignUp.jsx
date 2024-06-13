
import styled from "styled-components"
import backgroundImage from "../../assets/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-414w-2x.jpg";

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; 
`;

const HeaderArea = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  gap: 2rem;
  z-index: 2;
  top:0.7rem;
  left: 0;
  position: fixed
`;


const Logo = styled.p`
  font-size: 2.5rem;
  color: #E50914;;
  font-weight: bold;
  margin-left: 10rem;
  cursor: pointer;
`;

const SignIn = styled.button`
  width: 6%;
  background: red;
  color: white;
  padding: 0.4rem 1rem;
  left: 20rem;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-right: 12rem; 
`;

const H1 = styled.h1`
text-align: center;
justify-content: center;
`;

const H2 = styled.h2`
text-align: center;
justify-content: center;
`
const H3 = styled.h3`
text-align: center;
justify-content: center;
`
const Input = styled.input`
  display: block;
  width: 50%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  ::placeholder { 
    color: white !important; 
    opacity: 0.7; 
  }
    
  &.inline-input {
    display: inline-block;
    margin-right: 1rem;
    width: 20rem;
    
  }
`;

const GetStarted = styled.button`
  background: red;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.2rem;
  cursor: pointer;
  
`;


export default function HeaderSignUp() {
  return (
    <>
    <BackgroundImage />
    <Overlay/>
    <HeaderArea>
    <Logo>WitFlix</Logo>
    <SignIn>Sing In</SignIn>
   </HeaderArea>
   <H1>Unlimited movies, TV shows, and more</H1>
   <H2>Watch anywhere. Cancel anytime.</H2>
   <H3>Ready to watch? Enter your email to create or restart your membership.</H3>
   <Input className="inline-input"  placeholder="Enter your email"/>
    <GetStarted>Get Started</GetStarted>
  </>
);
}
