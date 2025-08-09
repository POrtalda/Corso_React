import { NavLink } from 'react-router';
import './Menu.css';

export default function Menu() {

    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>PRODUCTS</NavLink>
                </li>
            </ul>
        </>
    );
}