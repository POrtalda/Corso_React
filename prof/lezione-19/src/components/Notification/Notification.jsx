import { useReducer, useState } from "react";

export default function Notification() {
    // const [notifications, setNotifications] = useState([]);
    // const [countNotRead, setCountNotRead] = useState(0);

    const initialState = { notifications: [], countNotRead: 0 };
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    function notificationReducer(state, action) {
        switch (action.type) {
            case 'ADD_NEW': {
                return {
                    ...state,
                    countNotRead: state.countNotRead + 1,
                    notifications: [...state.notifications,
                    {
                        id: crypto.randomUUID(),
                        title: `random notification #${Math.random()}`,
                        read: false,
                    }]
                }
            }
            case 'READ_ALL': {
                // TO DO
            }
            case 'REMOVE_ALL': {
                // TO DO
            }
            default: {
                throw new Error('action type non gestita: ' + action.type);
            }
        }
    }

    // function handleClickReadAll() {
    //     setCountNotRead(0);
    //     setNotifications(notifications.map(n => ({...n, read: true})));
    // }

    // function handleClickAdd() {
    //     setNotifications([...notifications, {
    //         id: crypto.randomUUID(), 
    //         title: `random notification #${Math.random()}`,
    //         read: false,
    //     }]);
    //     setCountNotRead(countNotRead => countNotRead + 1);
    // }

    // function handleClickRemove() {
    //     setNotifications([]);
    //     setCountNotRead(0);
    // }

    return (
        <>
            <h3>notifiche:</h3>
            <p>Non lette: {state.countNotRead}</p>

            <ul>
                {state.notifications.map(n => (
                    <li key={n.id}>{n.title} *** ({n.read ? 'letta' : 'non letta'})</li>
                ))}
            </ul>

            {/* <button onClick={handleClickReadAll}>segna tutte come lette</button> */}
            <br />
            <button onClick={()=> dispatch({type: 'ADD_NEW'})}>aggiungi notifica</button>
            <br />
            {/* <button onClick={handleClickRemove}>rimuovi notifiche</button> */}
        </>
    )
}
