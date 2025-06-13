import Menu from '../Menu/Menu';
import './Main.css';

export default function Main({children}) {

    return(
        <>
           <Menu/>
           {children}
        </>
    );
}