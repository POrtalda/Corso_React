import { NavLink } from 'react-router';
import './Menu.css';

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
            <h1>{title}</h1>
        </>
    );
}