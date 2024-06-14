/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"


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
border-radius: 10%;
`
const Name = styled.h2`
  text-align: center;
  color: gray;
`;

export default function Profile(props) {
  const {profile,setActiveProfile} = props


  const {name,avatar}= profile

  const history = useHistory();

  const activeProfileHandler = () => {
    //set active profile
    setActiveProfile(profile);
    //history push'la
    history.push("/Home");
  };

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar}/>
      <Name>{name}</Name>
    </Card>
  )
}
