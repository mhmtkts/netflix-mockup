/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  max-width: 300px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 3%;
`;
const Name = styled.h3`
  text-align: center;
`;

export default function Profile(props) {
  const { profile, setActiveProfile } = props;

  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandler = () => {
    //set active profile
    setActiveProfile(profile);
    //history push'la
    history.push("/home");
  };

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}
