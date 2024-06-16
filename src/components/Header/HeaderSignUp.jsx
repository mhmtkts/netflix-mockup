import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

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
  top: 0.7rem;
  left: 0;
  position: fixed;
`;

const Logo = styled.p`
  font-size: 2.5rem;
  color: #e50914;
  font-weight: bold;
  margin-left: 10rem;
  cursor: pointer;
`;

const SignIn = styled(Link)`
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
`;

const H2 = styled.h2`
  text-align: center;
`;

const H3 = styled.h3`
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  ::placeholder {
    color: white !important;
    opacity: 0.7;
  }
  max-width: 300px;
`;

const GetStarted = styled.button`
  background: red;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.2rem;
  cursor: pointer;
  border: none;
`;

const ErrorMessage = styled.p`
  padding: 0.5rem;
  color: red;
  background: transparent;
  font-weight: 700;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 20%;
  margin-left: 14.5rem;
`;

const errorMessages = {
  email: "E-posta adresi gerekli.",
};

const initialFormData = {
  email: "",
};

export default function HeaderSignUp() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    email: false,
  });
  const history = useHistory();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, email: false });
      } else {
        setErrors({ ...errors, email: true });
      }
    }
  }

  function handleGetStarted(event) {
    event.preventDefault();

    if (!formData.email || !validateEmail(formData.email)) {
      setErrors({ ...errors, email: true });
      return;
    }

    history.push("/Login");
  }

  return (
    <>
      <BackgroundImage />
      <Overlay />
      <HeaderArea>
        <Logo>WitFlix</Logo>
        <SignIn to="/Login" data-cy="route-login1">
          Giriş Yap
        </SignIn>
      </HeaderArea>
      <H1>Sınırsız film, dizi ve daha fazlası</H1>
      <H2>Her yerde izleyin. İstediğiniz zaman iptal edin.</H2>
      <H3>
        İzlemeye hazır mısınız? Üyeliğinizi oluşturmak veya yeniden başlatmak
        için e-posta adresinizi girin.
      </H3>
      <FormContainer onSubmit={handleGetStarted}>
        <Input
          placeholder="E-posta adresinizi girin"
          value={formData.email}
          onChange={handleChange}
          name="email"
          data-cy="signup-input-email"
        />
        <GetStarted type="submit" data-cy="route-login">
          Başlayın
        </GetStarted>
      </FormContainer>
      {errors.email && (
        <ErrorMessage data-cy="errors">{errorMessages.email}</ErrorMessage>
      )}
    </>
  );
}
