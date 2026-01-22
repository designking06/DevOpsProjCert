import { NavLink } from 'react-router-dom';
import Pages from '../Pages.jsx';

export default function Navbar ({}) {
    const NavLinks = Pages.map(
        ({ path, name }) => {
            return (
                <li key={path} className="nav-item">
                <NavLink           
                key={path}
                to={path}
                end={path === '/'}
                className="nav-link"> 
                    &nbsp;{name}
                </NavLink>
                </li>
            )
        }
    );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">Caleb Crawley</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    {NavLinks}
                </ul>
            </div>
            </div>
        </nav>
    )
}