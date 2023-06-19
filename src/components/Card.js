function Card() {
	return (
		<div className=" card">
			<img className="card__decor" src="./img/cube-unliked.svg" alt="" />
			<img src="./img/sneakers/03.jpg" alt="sneaker" />
			<h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
			<div className="cardBottom d-flex justify-between">
				<div>
					<span className="d-block">Цена:</span>
					<strong>12 999 руб.</strong>
				</div>
				<button className="button p-10">
					<img src="img/plus.svg" width={11} height={11} alt="" />
				</button>
			</div>
		</div>
	);
}

export default Card;
