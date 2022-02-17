import React from 'react'
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Container, Nav} from 'react-bootstrap'


import icon from '../../src/images/mcd-logo-white.png'


const Navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={icon} alt="logo" />
                    <Nav className="me-auto">
                        <Nav.Link href="#home"> <PhoneInTalkRoundedIcon />Home</Nav.Link>
                        <Nav.Link href="#features"> <DesktopWindowsRoundedIcon />Features</Nav.Link>
                        <Nav.Link href="#pricing"> <HomeRoundedIcon />Pricing</Nav.Link>
                        <Nav.Link href="#pricing"> <GroupsRoundedIcon />Team</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            

            
            
        </div>

            

        
  
    )
}

export default Navbar