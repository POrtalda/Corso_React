import { Children } from 'react'
import './CardContact.css'

export default function CardContact({ contact, children }) {
    return (
        <>
            <div className="card-contact"
            onClick={()=> alert('stai aprendo il contatto ' + contact.first_name)}
            >

                <div className='btns-container'>
                    {children}
                </div>

                <h2>{contact.first_name} {contact.last_name}</h2>
                <p style={{marginBottom:'18px'}}>{contact.work}</p>

                <div style={{display: 'flex'}}>
                <span className="material-symbols-outlined">
                    phone_enabled
                </span>
                <p style={{marginLeft:'10px'}}>{contact.phone}</p>
                </div>

                <div style={{display: 'flex'}}>
                <span className="material-symbols-outlined">
                    mail
                </span>
                <p style={{marginLeft:'10px'}}>{contact.email}</p>
                </div>
            </div>
        </>
    )
}