import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

const Button = styled.button`
  color: gray;
  padding: .5rem 1.5rem;
  border-radius: 2%;
  border: 1px solid gray
`
export default function Welcome() {
  return (
    <>
      <h1>Kim İzliyor?</h1>
      <Profiles></Profiles>
      <div >
      <Button >Profilleri Yönet</Button>
      </div>
      
    </>
  );
}
