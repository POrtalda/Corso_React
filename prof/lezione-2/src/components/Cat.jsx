import './Cat.css';

export default function Cat() {
    const cat = {
        name: 'Maffin',
        age: 6,
        image: 'https://media.istockphoto.com/id/1298894806/it/foto/piccolo-gattino-carino-su-sfondo-bianco.jpg?s=612x612&w=0&k=20&c=UyDK67BJUw8kQV2spsKJCVWgTQjdooj6St0r6EnvcoU=',
        parStyle: {
            color: 'red',
            backgroundColor: 'orange',
            padding: '1em', border: '3px solid blue',
            borderRadius: '10px',
        }
    }

    // const name = 'Muffin';
    // const age = 6;
    // const image = 'https://media.istockphoto.com/id/1298894806/it/foto/piccolo-gattino-carino-su-sfondo-bianco.jpg?s=612x612&w=0&k=20&c=UyDK67BJUw8kQV2spsKJCVWgTQjdooj6St0r6EnvcoU=';
    // const parStyle = {
    //     color: 'red',
    //     backgroundColor: 'orange',
    //     padding: '1em', border: '3px solid blue',
    //     borderRadius: '10px',
    // }

    function getNameAndAge() {
        return `${cat.name} e ho ${cat.age} anni`;
    }

    return (
        <>
            {/* <p className="cat-message">meow, sono {getNameAndAge()}</p> */}

            <p style={cat.parStyle}>meow, sono {cat.name}</p>
            <img width="200" src={cat.image} alt={cat.name} />
            <p></p>
            <hr />
        </>
    );
}