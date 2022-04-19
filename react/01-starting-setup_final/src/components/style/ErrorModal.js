import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

//using react-dom
import ReactDOM from 'react-dom';

//backdrop
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

//modal overlay
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.lol}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>OKAY!</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    // <div> will be user a new wrapper called React.Fragment, I will use this with portals (react portals)

    /* <div className={classes.backdrop} onClick={props.onConfirm} /> */
    /* <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.lol}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OKAY!</Button>
        </footer>
      </Card> */

    // </div>
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          lol={props.lol}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
