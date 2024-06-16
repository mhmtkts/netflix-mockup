import { Helmet } from "react-helmet";
import HeaderSignUp from "../components/Header/HeaderSignUp";

export default function SignIn() {
  return (
    <>
      <Helmet>
        <title>WitFlix</title>
      </Helmet>
      <HeaderSignUp></HeaderSignUp>
    </>
  );
}
