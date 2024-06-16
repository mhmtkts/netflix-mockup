import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  gap: 1rem;
  margin-bottom: 80px;
  top: 0;
`;

const NetflixImg = styled.div`
  a img {
    width: 100%;
    height: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: white;
`;

const KidsLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NotificationIcon = styled(FontAwesomeIcon)`
  color: white;
`;

const UserImg = styled.img`
  border-radius: 100%;
`;

const CaretDownIcon = styled(FontAwesomeIcon)`
  color: white;
`;

const Logo = styled.p`
  font-size: 2.5rem;
  color: #e50914;
  font-weight: bold;
  cursor: pointer;
`;

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <NetflixImg>
        <Link to="/">
          <Logo>WitFlix</Logo>
        </Link>
      </NetflixImg>
      <Nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home">TV Shows</NavLink>
        <NavLink to="/home">Movies</NavLink>
        <NavLink to="/home">New & Popular</NavLink>
        <NavLink to="/home">My List</NavLink>
      </Nav>
      <Profile>
        <SearchButton>
          <SearchIcon icon={faMagnifyingGlass} />
        </SearchButton>
        <KidsLink to="/home">Kids</KidsLink>
        <NotificationIcon icon={faBell} />
        <UserImg src="https://picsum.photos/50?1" alt="User" />
        <CaretDownIcon icon={faCaretDown} />
      </Profile>
    </HeaderContainer>
  );
};

export default HeaderHome;
