import { Button } from '@reuse-react-components/experimenting.ui.button';
import { NotFoundPage } from '@teambit/design.ui.pages.not-found';
import { useState } from 'react';
import classes from './displaySum.module.css';
type DisplaySumProps = {
    title: string;
    message?: string;
    matchPair?: number[];
    displayValue?: number;
    onConfirm: React.MouseEventHandler;
    findMatchPair: React.MouseEventHandler;
};
type DisplayResultsProps = { displayValue?: number; matchPair?: number[] }

const DisplayResults = ({ displayValue, matchPair }: DisplayResultsProps) => (<div>
    <h3>Search Value: {displayValue}</h3>
    <h3>Results Pair: {matchPair?.toString()}</h3>
</div>)

const DisplaySum = ({ title, matchPair, onConfirm, findMatchPair, message, displayValue }: DisplaySumProps) => {
    const [disableButton, setDisableButton] = useState<boolean>()
    const [numberOfSearch, setNumberOfSearch] = useState<number>(0)

    const renderMainContent = () => {
        let displayContant;
        if (matchPair?.length) {
            displayContant = <DisplayResults displayValue={displayValue} matchPair={matchPair} />;
        } else if (message) {
            displayContant = <NotFoundPage className={classes.notFound} />;
        } else {
            displayContant = <h1>{title}</h1>;
        }
        return displayContant;
    }

    let displayContant = renderMainContent();

    const onConfirmButtonHandler = (event: any) => {
        setDisableButton(true)
        onConfirm(event);
        setDisableButton(false)
    }
    const onSearchButtonHandler = (event: any) => {
        setNumberOfSearch(prev => prev + 1)
        setDisableButton(true)
        findMatchPair(event);
        setDisableButton(false)

    }
    const buttonLabel = !!numberOfSearch ? 'Try again' : 'Find A Match';
    return (
        <div className={classes.container}>
            {!!numberOfSearch && <span>You have try {numberOfSearch} times,</span>}
            {displayContant}
            <div className={classes.buttonContainer}>
                <Button className={classes.button} disabled={disableButton} onClick={onConfirmButtonHandler}><span>Confirm</span></Button>
                <Button className={classes.button} disabled={disableButton} onClick={onSearchButtonHandler}><span>{buttonLabel}</span></Button>
            </div>
        </div>
    )


}
export default DisplaySum;