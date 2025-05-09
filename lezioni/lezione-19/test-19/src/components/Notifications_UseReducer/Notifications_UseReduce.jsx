import { useReducer } from "react"

export default function Notifications_UseReduce() {

    const initialState = { notifications: [], countNotRead: 0 }
    const [state, dispatch] = useReducer(notificationsReducer, initialState)

    function notificationsReducer(state, action) {
        switch (action.type) {
            case 'ADD_NEW': {
                return {
                    ...state, countNotRead: state.countNotRead + 1,
                    notifications: [...state.notifications, {
                        id: crypto.randomUUID(),
                        title: `random notification # ${Math.random()}`,
                        read: false
                    }]
                }
            }

            case 'READ_ALL': {
                return {
                    ...state,
                    countNotRead: 0,
                    notifications: state.notifications.map(n => ({
                        ...n,
                        read: true
                    }))
                }
            }

            case 'REMOVE_ALL': {
                return initialState

            }

            default: {
                throw new console.error('action type non gestita:' + action.type);

            }
        }
    }
    return (
        <>
            <h3>Notifiche con UseReduce:</h3>
            <p>non lette: {state.countNotRead}</p>

            <ul>
                {state.notifications.map(n => (
                    <li key={n.id}>{n.title}***({n.read ? 'letta' : 'non letta'})</li>
                ))}
            </ul>

            <button onClick={() => dispatch({ type: 'READ_ALL' })}>segna tutte come lette</button>
            <button onClick={() => dispatch({ type: 'ADD_NEW' })}>aggiungi notifica:</button>
            <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>rimuovi notifiche</button>
        </>
    )
}
