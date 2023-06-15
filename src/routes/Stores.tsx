import store_map from "../assets/store-map.png";

import NavBar from "../components/NavBar";
import StoresList from "../components/Stores/StoresList";

const Stores = () => {
	return (
		<>
			<NavBar />
			<div className="justify-center font-inter mx-auto max-w-screen-xl">
				<div className="flex flex-col items-center justify-center mb-12">
					<div className="flex absolute top-36 font-light text-center text-4xl text-zinc-400">
						Conheça nossas <div className="text-green-600 font-bold ml-2">lojas</div>
					</div>
				</div>

				<div className="flex px-16 justify-center">
					<div className="w-1/2">
						<input
							type="email"
							id="email"
							name="email"
							className="appearance-none bg-zinc-100 rounded-full w-10/12 h-12 py-2 px-5 mb-8 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Buscar lojas"
						/>
						<img src={store_map} className="w-10/12" alt="Store Map" />
					</div>
					<div className="w-1/2 divide-y">
						<div className="flex flex-col items-center">
							<StoresList title={"Pormade Blumenau"} score={4.5}/>
							<StoresList title={"Pormade Gaspar"} score={4.5}/>
							<StoresList title={"Pormade Indaial"} score={4.5}/>
							<StoresList title={"Pormade Joinville"} score={4.5}/>
							<StoresList title={"Pormade Curitiba"} score={4.5}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Stores;
