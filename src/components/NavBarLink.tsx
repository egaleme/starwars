import styled from "styled-components";
import {Link} from 'react-router-dom'
import './nav.css'

export interface NavProps {
	title: string,
  link: string
}

const NavbarLink:React.FC<NavProps> = ({title, link}) => {
  return (
    <NavLink>
      <Link className={'hoverClassColor'} style={{color: '#999',textDecoration: 'none',}} to={link}><h4>{title}</h4></Link>
    </NavLink>
  );
}

export default NavbarLink;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #333;
  height: 100%;
  text-decoration: none;
  padding: 0 25px;
  transition: color 100ms;
  color: #999;
  cursor: pointer;
  :hover {
    color: white;
  }
  :last-of-type {
    border-right: 1px solid #333;
  }
  > h4 {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

