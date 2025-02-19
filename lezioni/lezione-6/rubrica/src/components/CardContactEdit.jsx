import './CardContact.css'

export default function CardContactEdit({ contact }) {
    return (
        <>
            <div className='card-contact'>
                <h2>
                    <input
                        type='text'
                        value={contact.first_name + ' ' + contact.last_name} />
                </h2>
               
                <p style={{ marginBottom: '18px' }}>{contact.work}</p>

                <div style={{ display: 'flex' }}>
                    <span className="material-symbols-outlined">
                        phone_enabled
                    </span>
                    <p style={{ marginLeft: '10px' }}>{contact.phone}</p>
                </div>

                <div style={{ display: 'flex' }}>
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <p style={{ marginLeft: '10px' }}>{contact.email}</p>
                </div>
                <img style={{
                    width: '100px',
                    borderRadius: '50%',
                    marginTop: '20px'

                }} src={contact.image} alt={contact.first_name} />
            </div>
        </>
    )
}