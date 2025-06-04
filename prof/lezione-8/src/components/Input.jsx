import { useState } from "react";


export default function Input() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsername(e) {
        // console.log(e.target.value);
        setUsername(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
   

    return (
        <>
            <label>username: </label>
            <input type="text" value={username} onChange={handleChangeUsername} />
            <br />       
            <label>password: </label>
            <input type="password"
                value={password}
                onChange={handleChangePassword}
            />
            <br />
            <button className="btn btn-figo" onClick={()=> alert(`Benvenuto ${username}`)}>
                login
            </button>
        </>
    )
}
