import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from '../info/info'


    const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
     
]


export default function Navbar({darkMode, handleClick}) {
    {/*const location = useLocation() */}
    const [active, setActive] = useState({/*location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length)*/});
<link rel="stylesheet" 
 href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
 integrity="sha384- 
 50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
 crossorigin="anonymous"/>
    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}

                
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
                
            </Box>
        </Box>
    )
}