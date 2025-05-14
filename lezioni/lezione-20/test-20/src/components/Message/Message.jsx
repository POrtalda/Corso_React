import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


export default function Message() {
  const userName = useContext(UserContext)
  return (
    <>
        <p>Benvenuto {userName} nel nostro sito</p>
        
    </>
  )
}
