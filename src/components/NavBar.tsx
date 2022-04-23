import styled from "styled-components";
import NavbarLink from "./NavBarLink";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLinks>
        {/* <NavbarLink title="HOME" link="/" /> */}
        <NavbarLink title="FILMS" link="/films" />
        <NavbarLink title="PEOPLE"  link="/people"/>
        <NavbarLink title="PLANETS" link="/planets"/>
        <NavbarLink title="SPECIES"  link="/species"/>
        <NavbarLink title="STARSHIPS" link="/starships"/>
        <NavbarLink title="VEHICLES" link="/vehicles"/>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  border-top: 1px solid #343434;
  background-color: black;
  width: 100%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  position: fixed;
  top: 135px;
  right: 0;
  left: 0;
  z-index: 999;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;