import React, { useState } from 'react';
import './App.css';
import { Modal } from '@reuse-react-components/experimenting.ui.modal';
import { Button } from '@reuse-react-components/experimenting.ui.button';

const portalElement = document.getElementById('overlays');
function App() {
  const [openExternally, setOpenExternally] = useState(false);

  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }

  const onConfirm = () => {
    toggleExternally()
  }

  return (
    <div className="App">
      <Button onClick={toggleExternally}>Open externally</Button>
      <Modal
        modalTitle={'modal using bit'}
        portalElement={portalElement}
        onClose={toggleExternally} 
        isOpen={openExternally} >
        <h1>Hi</h1>
        <Button onClick={onConfirm}><span>Confirm</span></Button>
      </Modal>
    </div>
  );
}

export default App;
