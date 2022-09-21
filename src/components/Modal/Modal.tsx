import React, { useContext } from 'react';
import Context from '../../context/context';
import Login from '../Login/Login';
import './Modal.css';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div
      className={`modal ${openModal && 'd-block'}`}
      tabIndex={-1}
      onClick={() => setOpenModal(false)}
    >
      <div
        className='modal-dialog'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal title</h5>
            <button
              type='button'
              className='btn'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Modal;
