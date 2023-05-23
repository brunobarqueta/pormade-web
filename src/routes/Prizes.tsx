import nova_iorque from "../assets/nova-iorque.png";
import milao from "../assets/milao.png";
import milao2 from "../assets/milao2.png";

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardsPrize from "../components/Prizes/CardsPrize";
import PointsPrizes from "../components/Prizes/PointsPrizes";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { PrizesContext } from "../contexts/prizesContext";

const Prizes = () => {
	const {user} = useContext(UserContext);
	const {prizes} = useContext(PrizesContext);

	const calculatePorcentage = (points: number) => {
		const porcentage = (user.points / points) * 100; // Calcula a porcentagem
		return parseFloat(porcentage.toFixed(0));
	};
	return (
		<>
			<NavBar />
			<PointsPrizes points={user.points} />
			<div className="flex items-center justify-center mt-48 mb-20 font-inter">
				<div className="grid grid-cols-3 gap-12">
					{prizes.map((el) => {
						return (
							<Link to={`/prize/${el.id}`} key={el.id}>
								<CardsPrize title={el.title} picture={el.picture} percentage={calculatePorcentage(el.points)} points={el.points} />
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Prizes;
