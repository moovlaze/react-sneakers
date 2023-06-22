import styles from "./Card.module.scss";

function Card(props) {
	return (
		<div className={styles.card}>
			<img className={styles.favorite} src="./img/cube-unliked.svg" alt="" />
			<img src={props.imageUrl} width={133} height={112} alt="sneaker" />
			<h3>{props.name}</h3>
			<div className={styles.cardBottom}>
				<div>
					<span className="d-block">Цена:</span>
					<strong>{props.price} руб.</strong>
				</div>
				<button className="button p-10">
					<img src="img/plus.svg" width={11} height={11} alt="" />
				</button>
			</div>
		</div>
	);
}

export default Card;
