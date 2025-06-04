import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { ThemeContext } from "../../context/ThemeContext";

export default function Message() {
  const user = useContext(UserContext);
  const isDark = useContext(ThemeContext);

  return (
    <>
        <p className={isDark ? 'dark' : 'light'}>benvenuto {user.firstName} nel nostro sito!</p>
    </>
  )
}
