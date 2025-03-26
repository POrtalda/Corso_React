import { Children } from 'react'
import './Item.css'

export default function Item({ 
    description, 
    isSelected, 
    onChangeInputDescription,
    children }) {
    return (
        <>
            <div className= {isSelected ? 'item selected' : 'item'}>
                {/* <p>{description}</p> */}
                <input type="text" 
                value={description} 
                onChange={(e) => onChangeInputDescription(e.target.value)}
                />
                <div className='btns'>
                    {children}
                </div>

            </div>
        </>
    )
}
