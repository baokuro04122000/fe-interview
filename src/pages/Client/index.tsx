import {useContext, useState} from 'react'
import { useTranslation } from "react-i18next";
import styles from './index.module.css'
import Button from '../../common/Button/Button'
import SocketContext from '../../contexts/socket.context';
import {
  BLUE_CLICK_EVENT,
  ORANGE_CLICK_EVENT
} from '../../constants/socket.constant'
const Client = () => {
  const { t } = useTranslation("translation");
  const { socket } = useContext(SocketContext).SocketState;
  
  const handleClickOrange = () => {
    socket?.emit(ORANGE_CLICK_EVENT, {socketId: socket.id})
  }

  const handleClickBlue = () => {
    socket?.emit(BLUE_CLICK_EVENT, {socketId: socket.id})
  }

  return (
    <div className={styles['wrapper']}>
      <Button 
        className={styles['btn-custom-orange']}
        onClick={handleClickOrange}
      >
        Orange
      </Button>
      <Button 
        className={styles['btn-custom-blue']}
        onClick= {handleClickBlue}
      >
        Blue
      </Button>
    </div>
  );
};

export default Client;
