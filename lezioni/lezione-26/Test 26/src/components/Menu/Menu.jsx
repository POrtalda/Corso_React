import { NavLink } from 'react-router';
import './Menu.css';

export default function Menu() {

    return(
        <>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        home
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/about'}>
                        about
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/products'}>
                        products
                    </NavLink>
                </li>
            </ul>
        </>
    );
}