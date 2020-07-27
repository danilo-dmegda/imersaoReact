import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink/index'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="techflix logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;