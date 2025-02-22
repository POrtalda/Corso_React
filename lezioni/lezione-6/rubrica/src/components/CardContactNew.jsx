import './CardContact.css'

export default function CardContactNew({ contact }) {

    const handleSaveClick = () => {
        alert('salvato');
    };
    return (
        <>
            <div className='card-contact'>
                <h2>
                    <input
                        type='text'
                        value='' />
                </h2>

                <p style={{ marginBottom: '18px' }}><input type='text' value='' /> </p>

                <div style={{ display: 'flex' }}>
                    <span className="material-symbols-outlined">
                        phone_enabled
                    </span>
                    <p style={{ marginLeft: '10px' }}> <input type='text' value='' /></p>
                </div>

                <div style={{ display: 'flex' }}>
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <p style={{ marginLeft: '10px' }}>
                        <input type='text' value='' /> </p>
                </div>
                <img
                    style={{
                        width: '100px',
                        borderRadius: '50%',
                        marginTop: '20px',
                    }}
                    src='data:image/png;base64,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'
                    alt='Add photo'
                />

                <button onClick={handleSaveClick} style={{ marginTop: '20px' }}>
                    Salva
                </button>
            </div>
        </>
    )
}