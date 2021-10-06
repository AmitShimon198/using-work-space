import { Button } from '@reuse-react-components/experimenting.ui.button';
import { NotFoundPage, NotFoundPageProps } from '@teambit/design.ui.pages.not-found';
import { useEffect, useState } from 'react';
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
    let displayContant;
    if (matchPair?.length) {
        displayContant = <DisplayResults displayValue={displayValue} matchPair={matchPair} />
    } else if (message) {
        displayContant = <NotFoundPage className={classes.notFound} />
    } else {
        displayContant = <h1>{title}</h1>
    }
    const onConfirmButtonHandler = (event: any) => {
        setDisableButton(true)
        onConfirm(event);
        setDisableButton(false)
    }
    const onSearchButtonHandler = (event: any) => {
        setDisableButton(true)
        findMatchPair(event);
        setDisableButton(false)

    }
    return (
        <div className={classes.container}>
            {displayContant}
            <div className={classes.buttonContainer}>
                <Button className={classes.button} disabled={disableButton} onClick={onConfirmButtonHandler}><span>Confirm</span></Button>
                <Button className={classes.button} disabled={disableButton} onClick={onSearchButtonHandler}><span>Find A Match</span></Button>
            </div>
        </div>
    )
}
export default DisplaySum;