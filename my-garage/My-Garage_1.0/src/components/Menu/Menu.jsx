import { NavLink } from 'react-router';
import './Menu.css';
import DarkLight from '../DarkLight/DarkLight';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Menu({ title }) {

    const {isDarkMode} = useContext(ThemeContext);
    return(
        <>
            <ul className={isDarkMode ? 'menu menu_dark' : 'menu menulight'}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/expired'>Scaduti</NavLink>
                </li>
                <li>
                    <NavLink to='/expiring'>In Scadenza</NavLink>
                </li>
            </ul>
            <h1>{title}</h1>
            <DarkLight  />
        </>
    );
}