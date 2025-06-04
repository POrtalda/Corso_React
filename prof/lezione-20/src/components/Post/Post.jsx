import { useReducer, useState } from "react"

export default function Post() {



    // const [post, setPost] = useState({
    //     id: crypto.randomUUID(),
    //     imgUrl: '',
    //     description: '',
    //     like: false,
    //     favorite: false,
    // })

    // function handleClickSend() {
    //     alert('stai inviando il post ad un* amic*..');
    // }

    // function handleClickLike() {
    //     setPost({...post, like: !post.like});
    // }

    // function handleClickFavorite() {
    //     setPost({...post, favorite: !post.favorite});
    // }

    // function handleClickComment() {
    //     alert('stai commentando il post..');
    // }

    const initialState = {
        id: crypto.randomUUID(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVWGfrS3jdWf0wph8_ITnZ8DAAZnRwg91lw&s',
        description: 'una bella giornata in montagna!',
        like: false,
        favorite: false,
    };

    function postReducer(state, action) {
        switch (action.type) {
            case 'LIKE_POST': {
                return { ...state, like: !state.like };
            }
            case 'FAVORITE_POST': {
                return { ...state, favorite: !state.favorite };
            }
            case 'SEND_POST': {
                alert('stai inviando il post ad un* amic*..');
                return state;
            }
            case 'COMMENT_POST': {
                alert('stai commentando il post..');
                return state; // ultima azione dentro il case deve sempre essere il return dello stato aggoirnato
            }
            default: {
                throw new Error(`ERRORE GESTITO: ${action.type} non riconosciuto`);
            }
        }
    }

    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <>
            <div className="post">
                <img src={state.imgUrl}
                    alt="immagine di montagna" />
                <p>{state.description}</p>
                <button onClick={() => dispatch({ type: 'LIKE_POST' })}>
                    {state.like ? 'dislike' : 'like'}
                </button>
                <button onClick={() => dispatch({ type: 'FAVORITE_POST' })}>
                    {state.favorite ? 'rimuovi' : 'preferiti'}
                </button>
                <button onClick={() => dispatch({ type: 'SEND_POST' })}>invia</button>

                <hr />

                <input type="text" />
                <button onClick={() => dispatch({ type: 'COMMENT_POST' })}>commenta</button>
            </div>
        </>
    )
}
