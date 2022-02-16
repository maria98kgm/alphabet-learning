import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Aave, SidebarBottom } from 'iconsax-react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Letters from './Letters.js';
import Speech from './Speech.js';
import Home from './Home.js';


const Sidebar = () => {
    return (
    <>
        <Router>
            <React.Fragment>
                <SideNav>
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem eventKey="">
                            <NavIcon>
                                <i><Aave size="32" color="#FF8A65"/></i>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="alphabet">
                            <NavIcon>
                                <i><Aave size="32" color="#FF8A65"/></i>
                            </NavIcon>
                            <NavText>
                                Alphabet
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="speech">
                            <NavIcon>
                                <i><Aave size="32" color="#FF8A65"/></i>
                            </NavIcon>
                            <NavText>
                                Speech
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/alphabet" element={<Letters />} />
                    <Route path="/speech" element={<Speech />} />
                </Routes>
            </React.Fragment>
        </Router>
    </>
    )
}

export default Sidebar;