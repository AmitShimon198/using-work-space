import { Button } from '@reuse-react-components/experimenting.ui.button';
import classes from './displaySum.module.css';
type DisplaySumProps = { title: string; results: number[]; onConfirm: React.MouseEventHandler; };
const DisplaySum = ({ title, results, onConfirm }: DisplaySumProps) => {
    return (
        <div className={classes.container}>
            <h1>{title}</h1>
            <h3>Result : {results.toString()}</h3>
            <div className={classes.button}>
                <Button onClick={onConfirm}><span>Confirm</span></Button>
            </div>
        </div>
    )
}
export default DisplaySum;