import { useEffect, useState } from "react";

export default function Data() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })

    }, []);

    return(
        <>
            <p>io sono il componente Data</p>

            {
                posts.length > 0 ? (
                    posts.map(p => (
                        <p style={{fontSize: '8px'}} key={p.id}>{p.title}</p>
                    ))
                ) : (
                    <h1 style={{color: 'red'}}>loading...</h1>
                )
            
            
            }
        </>
    );
}