import styled from "styled-components";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
       
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
       
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  padding: 20px;
  padding-bottom: 0;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  > a > img {
    object-fit: contain;
    margin-top: -20px;
    margin-bottom: -0px;
    height: 150px;
    filter: brightness(0) invert(1);
  }
`;

