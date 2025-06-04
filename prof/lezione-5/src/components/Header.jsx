import React from 'react'

function Header() {
    function handleClickBtn(e) {
        e.stopPropagation();
        alert('button cliccato');
    }

    return (
        <>
        <section onClick={()=>alert('section')}>
            <div onClick={(e)=> alert('div padre')} style={{ backgroundColor: 'red' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error consectetur nostrum ut accusantium excepturi eum. Adipisci minima totam quia.</p>
                <button onClick={handleClickBtn}>
                    cliccami
                </button>
            </div>
        </section>
        </>
    )
}

export default Header