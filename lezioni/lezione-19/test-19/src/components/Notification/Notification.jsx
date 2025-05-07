import { useReducer, useState } from "react"


export default function Notification() {
    // const [notifications, setNotifications] = useState([]);
    // const [countNotread, setCountNotRead] = useState(0);
    const initialState = { notifications: [], countNotRead: 0 }
    const [state, dispatch] = useReducer(notificationsReducer, initialState)

    // function handleclickReadAll() {
    //     setCountNotRead(0);
    //     setNotifications(notifications.map(n => ({
    //         ...n, read: true
    //     }
    //     )))
    // }


    // function handleClickAdd() {

    //     setNotifications([...notifications, {
    //         id: crypto.randomUUID(),
    //         title: `random notification # ${Math.random()}`,
    //         read: false
    // }])
    // setCountNotRead(countNotread => countNotread +1)
    // }

    // function handleclickRemove(){
    //     setCountNotRead(0)
    //     setNotifications([])
    // }

    function notificationsReducer(state, action) {
        switch (action.type) {
            case 'ADD_NEW': {
                return {
                    ...state, countNotread: state.countNotread + 1,
                    notifications: [...state.notifications, {
                        id: crypto.randomUUID(),
                        title: `random notification # ${Math.random()}`,
                        read: false
                    }]
                }
            }

            case 'READ_ALL': {

            }

            case 'REMOVE_ALL': {

            }

            default: {
                throw new console.error('action type non gestita:' + action.type);

            }
        }
    }
    return (
        <>
            <h3>Notifiche:</h3>
            <p>non lette: {state.countNotRead}</p>

            <ul>
                {state.notifications.map(n => (
                    <li key={n.id}>{n.title}***({n.read ? 'letta' : 'non letta'})</li>
                ))}
            </ul>
            {/* <button onClick={handleclickReadAll}>segna tutte come lette</button> */}
            <button onClick={() => dispatch({type: 'ADD_NEW'})}>aggiungi notifica:</button>
            {/* <button onClick={handleclickRemove}>rimuovi notifiche</button> */}
        </>
    )
}
