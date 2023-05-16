import NavBar from "../components/NavBar";
import CardsStore from "../components/Stores/CardsStore";
import PointsStores from "../components/Stores/PointsStores";

const Stores = () => {
	return (
		<div>
			<NavBar />
			<PointsStores />
            <CardsStore />
		</div>
	);
};

export default Stores;