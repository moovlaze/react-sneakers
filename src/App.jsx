import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer.js";

function App() {
	const [items, setItems] = useState([]);
	const [basketItems, setBasketItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		fetch("https://649ffda3ed3c41bdd7a6e447.mockapi.io/items")
			.then((res) => res.json())
			.then((json) => setItems(json));
	}, []);

	const onAddToBasket = (item) => {
		if (basketItems.indexOf(item) > -1) {
			basketItems.splice(basketItems.indexOf(item), 1);
			setBasketItems([...basketItems]);
		} else {
			setBasketItems([...basketItems, item]);
		}
	};

	return (
		<div className="wrapper clear">
			{isOpen ? (
				<Drawer
					items={basketItems}
					onClickClose={() => {
						setIsOpen(false);
					}}
				/>
			) : null}
			<Header
				onClickBasket={() => {
					setIsOpen(true);
				}}
			/>
			<div className="content p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h2>Все кроссовки</h2>
					<div className="search-block d-flex">
						<img src="./img/search.svg" alt="search" />
						<input placeholder="Поиск..." type="text" />
					</div>
				</div>

				<div className="sneakers">
					{items.map((item) => {
						return (
							<div className="sneakers__card" key={item.id}>
								<Card
									name={item.name}
									imageUrl={item.imageUrl}
									price={item.price}
									onPlus={() => onAddToBasket(item)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
