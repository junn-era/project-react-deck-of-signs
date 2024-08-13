import Image from 'next/image';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card_sign}>
      <h3>{props.sign}</h3>
      <Image src={props.image} alt={props.sign} />
      <span>{props.InitDate} - {props.EndDate}</span>
    </div>
  )
}