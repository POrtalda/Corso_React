import { useEffect, useState } from 'react';
import './Colors.css';

const url = 'https://portalda.github.io/fake-api-test-react/api/colors.json'


export default function Colors() {

    const [dataColors, setDataColors] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDataColors(data);
            })
            
    }, [])

    return( 
        <>
            <hr />
            {dataColors !== null ? (
                <ul>
                {dataColors.colors.map((color,index ) => (
                    <li key={index}>
                        {color}
                    </li>
                ))}
            </ul>
            ) : (
                <h1>no color data</h1>
            )}
            
        </>
    );
}