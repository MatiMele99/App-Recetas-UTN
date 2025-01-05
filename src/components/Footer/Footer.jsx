import React from 'react'
import '../Styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-container py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link footer-item px-2">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link footer-item px-2">Crear receta</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link footer-item px-2">Mis recetas</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link footer-item px-2">Contacto</a>
                    </li>
                </ul>
                <p className="text-center">© 2024 RecipeSave Inc</p>
            </footer>
        </>
    )
}

export default Footer
