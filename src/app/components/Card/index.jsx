import Image from 'next/image';
import styles from './Card.module.css';

import { PiPlant } from "react-icons/pi";
import { MdAir } from "react-icons/md";
import { FaFire, FaWater } from "react-icons/fa";



export default function Card(props) {
  return (
    <div className={
      props.element === 'water'
        ? styles.card_sign_water
        : props.element === 'fire'
          ? styles.card_sign_fire
          : props.element === 'earth'
            ? styles.card_sign_earth
            : props.element === 'air' && styles.card_sign_air
    }>
      <div className={styles.title_icon}>
        <h3>{props.sign}</h3>
        {props.element === 'water' ? (
          <FaWater className={styles.icon} />
        ) : props.element === 'fire' ? (
          <FaFire className={styles.icon} />
        ) : props.element === 'earth' ? (
          <PiPlant className={styles.icon} />
        ) : props.element === 'air' && (
          <MdAir className={styles.icon} />
        )}
      </div>
      <Image src={props.image} alt={props.sign} />
      <span>{props.InitDate} - {props.EndDate}</span>
    </div >
  );
}