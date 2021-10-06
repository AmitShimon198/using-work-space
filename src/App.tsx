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
  const [displaySum, setDisplaySum] = useState<number>();
  const [message, setMessage] = useState<string>();

  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState);
    setCalculationResults([]);
    setMessage(undefined);
    setDisplaySum(undefined);
  }
  const findMatchPair = () => {

    const sum: number = Math.floor(Math.random() * 100)
    console.log('sum', sum);
    const matchRes = findMatchPairToSum({
      numbers: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
      sum
    });
    console.log('timeOut1000');

    if (matchRes?.results?.length) {
      setDisplaySum(matchRes?.sum)
      setCalculationResults(matchRes?.results);
    } else {
      setMessage('No result was found...')
      setCalculationResults(undefined);
      setDisplaySum(undefined)
    }

  }

  const onConfirm = (event: any) => {
    toggleExternally();
  }

  return (
    <div className="App">
      <Button onClick={toggleExternally}>Open Modal</Button>
      <Modal
        modalTitle={'Modal using bit'}
        portalElement={portalElement!}
        onClose={toggleExternally}
        isOpen={openExternally} >
        <DisplaySum
          findMatchPair={findMatchPair}
          onConfirm={onConfirm}
          title={'Display Sum'}
          matchPair={calculationResults}
          displayValue={displaySum}
          message={message} />
      </Modal>
    </div>
  );
}

export default App;
