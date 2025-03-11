import './NavBar.css'
import { HiMusicalNote } from "react-icons/hi2";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function NavBar({isDarkModeActive, setIsDarkModeActive}) {
  
  return (
    <>
      <nav className='nav'>
        <div className="nav-bar">
          <h1>SpotiReact</h1>
          <HiMusicalNote style={{fontSize: 'xx-large', color: 'beige'}}/>
        </div>

        <div className='icons'>
         
          <span onClick={()=> setIsDarkModeActive(!isDarkModeActive)} >
          {isDarkModeActive ? (
            <MdOutlineLightMode />
          ) : (
            <MdOutlineDarkMode />
          )}
            </span>
        </div>
      </nav>



    </>
  )
}
