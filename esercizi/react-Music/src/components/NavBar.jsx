import './NavBar.css'
import { HiMusicalNote } from "react-icons/hi2";

export default function NavBar() {
  return (
    <>
      <nav className='nav'>
        <div className="nav-bar">
          <h1>SpotiReact</h1>

          <HiMusicalNote  />
        </div>

        <div className='icons'>
          <br />
          <button> dark / light</button>
        </div>
      </nav>



    </>
  )
}
