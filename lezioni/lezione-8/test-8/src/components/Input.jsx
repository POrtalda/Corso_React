import { useState } from "react"


export default function Input() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleChangeUsername(e) {
        // console.log(e.target.value)
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <>
            <label >Username: </label>
            <input type="text" value={username} onChange={handleChangeUsername} />
            <br></br>
            <label >Password:</label>
            <input type="password" value={password} onChange={handleChangePassword} />
        </>
    )
}
