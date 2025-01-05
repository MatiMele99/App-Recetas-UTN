import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavLogo from './../../assets/nav-logo.png'
import PersonIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">

                    {/* LOGO */}
                    <div className="nav-left">
                        <img className="nav-logo" src={NavLogo} alt="RecipeSave logo - Black & orange" />
                    </div>

                    {/* MENÚ HAMBURGUESA */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* ITEMS DE NAVEGACIÓN */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto nav-mid">
                            <a href="#home" className="nav-link header-item">Inicio</a>
                            <a href="#create-recipe" className="nav-link header-item">Crear receta</a>
                            <a href="#my-recipes" className="nav-link header-item">Mis recetas</a>
                            <div className="nav-icon">
                                <PersonIcon fontSize="large" />
                            </div>
                            <div className="nav-icon">
                                <SettingsIcon fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
