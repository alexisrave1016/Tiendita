import '../styles/modal.css'
const Modal = ({children, isOpen,closeModal,cantidad}) => {
    const handleModalClick=e=> e.stopPropagation();
    console.log('soy cantidad modal',cantidad)
    return (
       <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
           <div className="modal-container" onClick={handleModalClick}>
                <button className="modal-close" onClick={closeModal}>
                    X
                </button>
                
                {children}
           </div>
       </article>
    )
}

export default Modal
