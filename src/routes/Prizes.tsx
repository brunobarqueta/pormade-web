import nova_iorque from "../assets/nova-iorque.png";
import milao from "../assets/milao.png";
import milao2 from "../assets/milao2.png";

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardsPrize from "../components/Prizes/CardsPrize";
import PointsPrizes from "../components/Prizes/PointsPrizes";

const Prizes = () => {
	return (
		<div>
			<NavBar />
			<PointsPrizes />
			<div className="flex items-center justify-center mt-48 mb-20">
				<div className="grid grid-cols-3 gap-12">
					<Link to={`/prizes/${1}`}>
						<CardsPrize title={"Viagem para Nova Iorque"} picture={nova_iorque} percentage={50} points={300000} />
					</Link>
					<Link to={`/prizes/${2}`}>
						<CardsPrize title={"Viagem para Milão"} picture={milao} percentage={35} points={480000} />
					</Link>
					<Link to={`/prizes/${3}`}>
						<CardsPrize title={"Viagem para Milão"} picture={milao2} percentage={12} points={520000} />
					</Link>
					<Link to={`/prizes/${4}`}>
						<CardsPrize title={"Viagem para Nova Iorque"} picture={nova_iorque} percentage={82} points={120000} />
					</Link>
					<Link to={`/prizes/${5}`}>
						<CardsPrize title={"Viagem para Milão"} picture={milao} percentage={23} points={96000} />
					</Link>
					<Link to={`/prizes/${6}`}>
						<CardsPrize title={"Viagem para Milão"} picture={milao2} percentage={2} points={340000} />
					</Link>
				</div>
			</div>
			points={50000}
		</div>
	);
};

export default Prizes;
