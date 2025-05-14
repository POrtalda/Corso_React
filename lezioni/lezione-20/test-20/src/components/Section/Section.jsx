import { useContext } from "react";
import Menu from "../Menu/Menu";
import Message from "../Message/Message";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";


export default function Section() {
  const user = useContext(UserContext)
  const isDark = useContext(ThemeContext)

  return (
    <>
    <div className= {isDark ? 'dark' : 'light'}>
        <h3>{user}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vitae.</p>
        <Menu />
    </div>
    </>
  )
}
