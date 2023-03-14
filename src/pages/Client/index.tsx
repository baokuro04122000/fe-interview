import {useState} from 'react'
import { useTranslation } from "react-i18next";
import styles from './index.module.css'
import Button from '../../common/Button/Button'
const Client = () => {
  const { t } = useTranslation("translation");
  const [orange, setOrange] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleClickOrange = () => {
    console.log('here')
  }

  const handleClickBlue = () => {
    console.log('blue')
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
