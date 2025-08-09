import { NavLink } from 'react-router';
import './Menu.css';
import DarkLight from '../DarkLight/DarkLight';

export default function Menu({title}) {

    return(
        <>
            <ul>
                <li>
                    <NavLink to='/'>
                        home page
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/favorite'>
                        preferiti
                    </NavLink>
                </li>
            </ul>
            <DarkLight />
            <h1>{title}</h1>
        </>
    );
}