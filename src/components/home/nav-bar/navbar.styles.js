import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavLinksContainer = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`
export const NavLink = styled(Link)`
    margin: 0 1em ;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    font-size: large;
    cursor: pointer;
`