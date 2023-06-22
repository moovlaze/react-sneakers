import Card from "./components/Card/Card.js";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";

const arr = [
	{
		id: 0,
		imageUrl: "./img/sneakers/01.jpg",
		name: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 12999,
	},
	{
		id: 1,
		imageUrl: "./img/sneakers/02.jpg",
		name: "Мужские Кроссовки Nike Air Max 270",
		price: 15600,
	},
	{
		id: 2,
		imageUrl: "./img/sneakers/03.jpg",
		name: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 8499,
	},
	{
		id: 3,
		imageUrl: "./img/sneakers/04.jpg",
		name: "Кроссовки Puma X Aka Boku Future Rider",
		price: 8999,
	},
	{
		id: 4,
		imageUrl: "./img/sneakers/05.jpg",
		name: "Мужские Кроссовки Under Armour Curry 8",
		price: 15199,
	},
	{
		id: 5,
		imageUrl: "./img/sneakers/06.jpg",
		name: "Мужские Кроссовки Nike Kyrie 7",
		price: 11299,
	},
];

function App() {
	return (
		<div className="wrapper clear">
			<Drawer />
			<Header />
			<div className="content p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h2>Все кроссовки</h2>
					<div className="search-block d-flex">
						<img src="./img/search.svg" alt="search" />
						<input placeholder="Поиск..." type="text" />
					</div>
				</div>

				<div className="sneakers">
					{arr.map((item) => {
						return (
							<div className="sneakers__card" key={item.id}>
								<Card
									name={item.name}
									imageUrl={item.imageUrl}
									price={item.price}
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
