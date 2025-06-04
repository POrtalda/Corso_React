import './ToDoEditForm.css';
import { IoBackspace } from "react-icons/io5";

export default function ToDoEditForm({handleClickBack, handleChangeInput, item}) {
  
  return (
    <>
        <div className='edit-form'>
          <label>Descrizione: </label>
          <input type="text" value={item.description}
          onChange={(e)=>handleChangeInput(e.target.value)} />

          <div onClick={handleClickBack}>
            <IoBackspace style={{fontSize: '50px'}} />
          </div>
        </div>
    </>
  )
}
