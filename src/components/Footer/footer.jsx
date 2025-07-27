import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import './footer.styles.css';

const Footer = () => {
      const { darkMode } = useContext(DarkModeContext);
        const containerClass = darkMode ? 'Container-light' : 'Container-dark';

    return (
        <footer className={containerClass}>
            <div className="footer-content">
                <div className="footer-left">
                    <p className="footer-text">© {new Date().getFullYear()} Neil. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <Link to="/someProjects" className="footer-link">Projects</Link>
                    <Link to="/contactMe" className="footer-link">Contact</Link>
                    <a href="https://github.com/neilchadders" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
