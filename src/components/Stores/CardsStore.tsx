import nova_iorque from "../../assets/nova-iorque.png";
import ProgressBar from "../ProgressBar";

const CardsStore = () => {

	return (
		<div className="bg-gray-50 rounded-lg p-2 w-64">
			<div className="relative">
				<img src={nova_iorque} alt="nova_iorque" className="w-full rounded-lg" />
				<div className="absolute bottom-0 left-0 right-0 pl-6 pb-8">
					<h2 className="text-white text-md font-bold break-words w-32">Viagem para Nova Iorque</h2>
				</div>
			</div>
			<div className="relative mt-4">
				<ProgressBar progress={60}/>
			</div>
			<p className="text-xs text-gray-700 mt-2">Necessário 300.000 pontos</p>
		</div>
	);
};

export default CardsStore;
