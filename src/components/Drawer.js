function Drawer({ onClickClose, items = [] }) {
	return (
		<div className="overlay">
			<div className="drawer p-30">
				<span className="drawerTitle mb-30 d-flex justify-between align-center">
					Корзина
					<img
						className="cu-p"
						src="img/cube-remove.svg"
						alt="close"
						onClick={onClickClose}
					/>
				</span>

				<div className="items">
					{items.map((item) => (
						<div key={item.id} className="cartItem d-flex align-center mb-20">
							<img
								className="cartItemImg mr-20"
								width={70}
								height={70}
								src={item.imageUrl}
								alt="sneaker"
							/>
							<div className="mr-10">
								<p className="mb-10">{item.name}</p>
								<strong>{item.price} руб.</strong>
							</div>
							<img
								className="btnRemove"
								src="img/cube-remove.svg"
								alt="remove"
							/>
						</div>
					))}
				</div>

				<div className="cartTotalBlock">
					<ul>
						<li className=" mb-20">
							<span>Итого: </span>
							<div></div>
							<strong>21 498 руб.</strong>
						</li>
						<li className="">
							<span>Налог 5%: </span>
							<div></div>
							<strong>1074 руб.</strong>
						</li>
					</ul>
					<button className="greenButton">
						Оформить заказ
						<img width={14} height={12} src="./img/button-arrow.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
