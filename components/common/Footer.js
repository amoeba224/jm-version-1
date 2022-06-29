import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";

export default function Footer(){
    return(
        <StyledFooter>
            <p>&copy; Software Support Committee in SKKU 2022. All Rights Reserved.</p>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    background-color: #000000;
    padding: 35px;
    margin-top: 14px;
    height: 100px;
    width: 100%;
    color: gray;
    text-align: center;
    `