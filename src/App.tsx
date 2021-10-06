import { useState } from 'react';
import './App.css';
import { Modal } from '@reuse-react-components/experimenting.ui.modal';
import { Button } from '@reuse-react-components/experimenting.ui.button';
import DisplaySum from './components/displaySum';
import { findMatchPairToSum } from './utils/calculateTowNumbersSum';

const portalElement = document.getElementById('overlays');

function App() {
  const [openExternally, setOpenExternally] = useState(false);
  const [calculationResults, setCalculationResults] = useState<number[]>();
  const [message, setMessage] = useState<string>();

  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }
  const findMatchPair = () => {
    const results = findMatchPairToSum({ numbers: [1, 4, 6, 9, 7, 8, 22], sum: 26 })
    if (results?.length) {
      setCalculationResults(results);
    } else {
      setMessage('No result was found...')
    }
  }

  const onConfirm = (event: any) => {
    toggleExternally();
    setMessage(undefined)
  }

  return (
    <div className="App">
      <Button onClick={toggleExternally}>Open Modal</Button>
      <Modal
        modalTitle={'modal using bit'}
        portalElement={portalElement}
        onClose={toggleExternally}
        isOpen={openExternally} >
        <DisplaySum
          findMatchPair={findMatchPair}
          onConfirm={onConfirm}
          title={'Display Sum'}
          results={calculationResults}
          message={message} />
      </Modal>
    </div>
  );
}

export default App;
