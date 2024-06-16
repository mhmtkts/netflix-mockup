/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

const Button = styled.button`
  color: gray;
  padding: 0.5rem 1.5rem;
  border-radius: 2%;
  border: 1px solid gray;
`;
export default function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <>
      <Helmet>
        <title>WitFlix</title>
      </Helmet>
      <h1>Kim İzliyor?</h1>
      <Profiles setActiveProfile={setActiveProfile} />
      <div>
        <Button>Profilleri Yönet</Button>
      </div>
    </>
  );
}
