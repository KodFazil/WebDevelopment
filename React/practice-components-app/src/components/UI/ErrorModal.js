import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onErrorHandler}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.errorTitle}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onErrorHandler}>Close</Button>
                </footer>
            </Card>
        </div>
    );

}

export default ErrorModal;
