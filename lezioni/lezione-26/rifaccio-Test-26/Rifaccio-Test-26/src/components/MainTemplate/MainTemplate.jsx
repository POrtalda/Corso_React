import Menu from '../Menu/Menu';
import './MainTemplate.css';

export default function MainTemplate({children}) {

    return(
        <>
            <Menu/>
            {children} 
        </>
    );
}