import styles from './CarDetails.module.css'

const CarDetails = ({id, brand, model, price, color, km, age}) => {
  return (
    <div className={styles.container}>
        <ul className={styles.ul}>
            <li className={styles.li}>{id}</li>
            <li className={styles.li}><span>Marca: </span>{brand}</li>
            <li className={styles.li}><span>Modelo: </span> {model}</li>
            <li className={styles.li}><span>Preço: R$</span> {price}</li>
            <li className={styles.li}><span>Cor: </span> {color}</li>
            <li className={styles.li}><span>Km: </span> {km} Kilometros Rodados</li>
            <li className={styles.li}><span>Ano: </span> {age}</li>
        </ul>
    </div>
  )
}

export default CarDetails