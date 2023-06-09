import NavBar from "../components/NavBar";
import milao_big from "../assets/milao-big.png";
import vector_big from "../assets/vector-big.png";
import ProgressBar from "../components/ProgressBar";

import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { PrizesContext } from "../contexts/prizesContext";
import { useParams } from "react-router-dom";
import Carousel from "../components/Prizes/Carousel";

const Prize = () => {
	const { id } = useParams();
	const { user } = useContext(UserContext);

	const { prizes } = useContext(PrizesContext);
	let prize;

	if (id != undefined) {
		prize = prizes.find((p) => p.id !== undefined && p.id === parseInt(id));
	}

	const calculatePorcentage = (points: number) => {
		const porcentage = (user.points / points) * 100; // Calcula a porcentagem
		return parseFloat(porcentage.toFixed(0));
	};

	return (
		<>
			<NavBar />
			{prize != undefined ? (
				<div className="flex justify-center h-screen font-inter">
					<div>
						<div className="relative">
							<img src={vector_big} className="absolute bottom-0 object-contain rounded-3xl" alt="vector" />
							<img src={milao_big} className="rounded-3xl" alt="nova_iorque" />
						</div>
						<div className="relative bottom-12 w-full flex justify-center">
							<div className="flex items-center">
								<span className="h-2 w-2 bg-white rounded-full mx-2"></span>
								<span className="h-2 w-2 bg-green-300 rounded-full mx-2"></span>
								<span className="h-2 w-2 bg-green-300 rounded-full mx-2"></span>
							</div>
						</div>
					</div>
					<div className="px-16 py-8">
						<h1 className="text-5xl text-green-600 break-words w-72 font-bold mb-3">{prize.title}</h1>
						<p className="text-md text-gray-600 mb-6">Prazo: 20/12</p>
						<div className="mb-2">
							<ProgressBar progress={calculatePorcentage(prize.points)} height={"h-7"} width={"w-72"} points={user.points} text={"text-sm	"}/>
						</div>
						<p className="text-sm text-gray-400 break-words mb-6">Necessários {prize.points.toLocaleString("pt-BR")} pontos</p>
						<p className="text-md w-80 mb-6 text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper sodales sodales. Duis eget est sem. Duis metus turpis, venenatis a consectetur a, elementum quis ipsum.
						</p>
						<button className="bg-gray-200 text-white text-sm px-4 py-2 rounded-full mb-12 w-32">Adquirir</button>
						<p className="text-md text-gray-600 mb-6">Outras premiações</p>
						<Carousel current={prize.id}/>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Prize;
