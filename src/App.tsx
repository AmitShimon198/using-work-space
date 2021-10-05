import { useState } from 'react';
import './App.css';
import { Modal } from '@reuse-react-components/experimenting.ui.modal';
import { Button } from '@reuse-react-components/experimenting.ui.button';
import { calculateTwoNumbersSum } from './utils/calculateTowNumbersSum';
import DisplaySum from './components/displaySum';

const portalElement = document.getElementById('overlays');
const results = calculateTwoNumbersSum({ numbers: [1, 4, 6, 9, 7, 8, 22], sum: 15 })

function App() {
  const [openExternally, setOpenExternally] = useState(false);
  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }

  const onConfirm = (event: any) => {
    toggleExternally()
  }

  return (
    <div className="App">
      <Button onClick={toggleExternally}>Open Modal</Button>
      <Modal
        modalTitle={'modal using bit'}
        portalElement={portalElement}
        onClose={toggleExternally}
        isOpen={openExternally} >
        <DisplaySum onConfirm={onConfirm} title={'Display Sum'} results={results} />
      </Modal>
    </div>
  );
}

export default App;
