

export default function Button({ type }) {

    function handleClickEdit(e) {
        e.stopPropagation();
        alert('stai modificando il contatto')
    }


    function handleClickDelete(e) {
        e.stopPropagation();
        alert('stai eliminando il contatto')
    }

    function handleClickAddNew() {
        alert('stai aggiungendo il contatto')
    }
    function handleClickSave() {
        alert('salva le modifiche del contatto')
    }

    return (
        <>
            {type === 'edit' && (
                <span onClick={handleClickEdit} className="material-symbols-outlined">
                    edit
                </span>
            )}

            {type === 'delete' && (
                <span onClick={handleClickDelete} className="material-symbols-outlined">
                    delete
                </span>
            )}
            {type === 'add' && (
                <span style={{
                    backgroundColor:'#1c8aaf', 
                    color:'white', 
                    borderRadius:'50%', 
                    marginBottom:'30px',
                    fontSize:'50px'}} onClick={handleClickAddNew} className="material-symbols-outlined">
                    add
                </span>
            )}

            
        </>
    )
}