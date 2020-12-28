import React, { useState } from 'react';
import Modal from 'react-modal';

const MobileNav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
    },
  };

  return (
    <div className='fixed bottom-0 z-50 w-full px-1 mb-2'>
      <div className='bg-gray-100 shadow-lg py-5 rounded border-gray-300 border'>
        <ul className='flex justify-between align-center w-full px-4'>
          <li>home</li>
          <li>resume</li>
          <li>
            <button onClick={toggleModal}>contact</button>
          </li>
        </ul>
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel='Get in touch'
        style={customStyles}
      >
        <div className='h-96'>
          <h2>Get in touch</h2>
          <div className='h-full'>
            <form>
              <input type='text' placeholder='email' />
              <input type='text' placeholder='message' />
              <button>Send</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MobileNav;
