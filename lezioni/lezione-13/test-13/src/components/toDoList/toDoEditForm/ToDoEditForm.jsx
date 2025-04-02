import './ToDoEditForm.css'
import { IoBackspaceSharp } from "react-icons/io5";


export default function ToDoEditForm({handleClickBack,handleChangeInput,item}) {
    return (
        <>
            <div className='edit-form'>
                <label>Descrizione: </label>
                <input type="text" value={item.description} 
                onChange={(e) => handleChangeInput(e.target.value)}/>

                <div onClick={handleClickBack}>
                    <IoBackspaceSharp style={{ fontSize: '50px' }} />
                </div>
            </div>


        </>
    )
}
