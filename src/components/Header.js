function Header() {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="headerLeft d-flex align-center">
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
			<ul className="headerRight d-flex align-center">
				<li className="d-flex align-center mr-30">
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
