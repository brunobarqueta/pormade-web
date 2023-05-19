import './App.css'
import trophy from "./assets/trophy.png";
import stores from "./assets/stores.png";
import extracts from "./assets/extracts.png";
import financial_extracts from "./assets/financial-extracts.png";
import faq from "./assets/faq.png";
import account from "./assets/account.png";
import NavBar from './components/NavBar';
import CardsHome from './components/Home/CardsHome';

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="flex items-center justify-center mt-32 mb-12 font-inter">
				<div className="grid grid-cols-3">
					<CardsHome icon={trophy} title={"Prêmios"} />
					<CardsHome icon={stores} title={"Lojas"} />
					<CardsHome icon={extracts} title={"Extratos"} />
					<CardsHome icon={financial_extracts} title={"Extratos Financeiros"} />
					<CardsHome icon={faq} title={"Dúvidas Frequentes"} />
					<CardsHome icon={account} title={"Conta"} />
				</div>
			</div>
		</>
	);
}

