import { useReducer, useState } from "react"


export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [countNotRead, setCountNotRead] = useState(0);
    

    function handleclickReadAll() {
        setCountNotRead(0);
        setNotifications(notifications.map(n => ({
            ...n, read: true
        }
        )))
    }


    function handleClickAdd() {

        setNotifications([...notifications, {
            id: crypto.randomUUID(),
            title: `random notification # ${Math.random()}`,
            read: false
    }])
    setCountNotRead(countNotread => countNotread +1)
    }

    function handleclickRemove(){
        setCountNotRead(0)
        setNotifications([])
    }

    
    return (
        <>
            <h3>Notifiche con UseState:</h3>
            <p>non lette: {countNotRead}</p>

            <ul>
                {notifications.map(n => (
                    <li key={n.id}>{n.title}***({n.read ? 'letta' : 'non letta'})</li>
                ))}
            </ul>
            
            <button onClick={handleclickReadAll}>segna tutte come lette</button>
            <button onClick={handleClickAdd}>aggiungi notifica:</button>
            <button onClick={handleclickRemove}>rimuovi notifiche</button>
        
        </>
    )
}
