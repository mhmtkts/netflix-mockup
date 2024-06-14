/* eslint-disable react/prop-types */
import { useState } from "react";
import { profilesData } from "../../profilesData";
import styled from "styled-components";
import Profile from "./Profile";

const ProfilesContainer = styled.div`
  display: inline-flex;
  gap: 2rem;
  justify-content: center;
  
`;

function Profiles(props) {
  const [profiles] = useState(profilesData);
  const { setActiveProfile } = props;
  return (
    <ProfilesContainer>
      {profiles.map((profile) => {
        return (
          <Profile
            key={profile.id}
            profile={profile}
            setActiveProfile={setActiveProfile}
          />
        );
      })}
    </ProfilesContainer>
  );
}

export default Profiles;
