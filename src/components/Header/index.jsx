import styles from "./Header.module.scss";

function Header(props) {
	return (
		<header className={styles.Header}>
			<div className="d-flex align-center">
				<img
					className="mr-15"
					src="img/logo.png"
					width={40}
					height={40}
					alt="sneakers logo"
				/>
				<h1>
					<span>REACT SNEAKERS</span>
					<p>Магазин лучших кроссовок</p>
				</h1>
			</div>
			<ul className="d-flex align-center">
				<li
					className="d-flex align-center mr-30 cu-p"
					onClick={props.onClickBasket}
				>
					<img
						className="mr-10"
						src="img/cart.svg"
						width={18}
						height={18}
						alt=""
						aria-hidden="true"
					/>
					<span>1205 руб.</span>
				</li>
				<li>
					<img
						src="img/user.svg"
						width={18}
						height={18}
						alt=""
						aria-hidden="true"
					/>
				</li>
			</ul>
		</header>
	);
}

export default Header;
