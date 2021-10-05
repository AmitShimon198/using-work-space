import { Button } from '@reuse-react-components/experimenting.ui.button';
import classes from './displaySum.module.css';
type DisplaySumProps = {
    title: string;
    message?: string;
    results?: number[];
    onConfirm: React.MouseEventHandler;
    findMatchPair: React.MouseEventHandler;
};
const DisplaySum = ({ title, results, onConfirm, findMatchPair, message }: DisplaySumProps) => {

    const displayContant = results?.length ? <h3>Result : {results?.toString()}</h3> : <h3>{message}</h3>
    return (
        <div className={classes.container}>
            <h1>{title}</h1>
            {displayContant}
            <div className={classes.button}>
                <Button onClick={onConfirm}><span>Confirm</span></Button>
                <Button onClick={findMatchPair}><span>Find A Match</span></Button>
            </div>
        </div>
    )
}
export default DisplaySum;