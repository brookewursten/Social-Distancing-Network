import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from "./Forgot.module.sass";
import { axiosInstance } from "../../../util/axiosConfig";

export const ForgotModal = () => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const forgotHandler = async () => {
    let response;
    response = await axiosInstance.post("/user/forgot", email);
  }

  const [email, setEmail] = useState('');


  return (
    <div>
        <div className={classes.ForgotPasswordButton} onClick={toggle}>Forgot Password</div>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}><div className={classes.Label}>Forgot Password</div></ModalHeader>
        <ModalBody>
        <div className={classes.ForgotFieldsContainer}>
        <div className={classes.Field}>
                <div className={classes.Label}>Email</div>
                <input className={classes.Input} 
                onChange={e => setEmail(e.target.value)}/>
        </div>
        </div>
        </ModalBody>
        <ModalFooter>
        <div className={classes.ForgotButton} onClick={forgotHandler} >Submit</div>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ForgotModal;