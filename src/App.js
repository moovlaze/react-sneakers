import Card from "./components/Card.js";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";

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
					<div className="sneakers__card">
						<Card />
					</div>
					<div className="sneakers__card">
						<Card />
					</div>
					<div className="sneakers__card">
						<Card />
					</div>
					<div className="sneakers__card">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
