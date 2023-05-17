import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import milao_big from "../assets/milao-big.png";
import vector_big from "../assets/vector-big.png";
import ProgressBar from "../components/ProgressBar";

const Prize = () => {
	const { id } = useParams();

	return (
		<>
			<NavBar />
			<div className="flex justify-center h-screen">
				<div>
					<img src={vector_big} className="absolute bottom-0 object-contain rounded-3xl" alt="vector" />
					<img src={milao_big} className="rounded-3xl" alt="nova_iorque" />
					<div className="relative bottom-4 w-full flex justify-center">
						<div className="flex items-center">
							<span className="h-2 w-2 bg-white rounded-full mx-2"></span>
							<span className="h-2 w-2 bg-green-300 rounded-full mx-2"></span>
							<span className="h-2 w-2 bg-green-300 rounded-full mx-2"></span>
						</div>
					</div>
				</div>
				<div className="px-16 py-8">
					<h1 className="text-4xl text-green-600 break-words w-72 font-bold mb-3">Viagem para Nova Iorque</h1>
					<p className="text-sm text-gray-600 mb-6">Prazo: 20/12</p>
					<div className="mb-2">
						<ProgressBar progress={30} height={"h-6"} />
					</div>
					<p className="text-xs text-gray-400 break-words mb-6">Necessários 300.000 pontos</p>
					<p className="text-sm w-80 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper sodales sodales. Duis eget est sem. Duis metus turpis, venenatis a consectetur a, elementum quis ipsum.
					</p>
					<button className="bg-gray-200 text-white text-sm px-4 py-2 rounded-full mb-12 w-32">Adquirir</button>
					<p className="text-sm text-gray-600">Outras premiações</p>
				</div>
			</div>
		</>
	);
};

export default Prize;