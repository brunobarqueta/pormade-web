import { useState, ChangeEvent } from "react";
import store_map from "../assets/store-map.png";
import { AiOutlineSearch } from "react-icons/ai";

import NavBar from "../components/NavBar";
import StoresList from "../components/Stores/StoresList";

interface Store {
  title: string;
  score: number;
}

const Stores = () => {
  const [searchText, setSearchText] = useState(""); // Estado para armazenar o valor do campo de busca

  const storesList: Store[] = [
    { title: "Pormade Blumenau", score: 4.5 },
    { title: "Pormade Gaspar", score: 4.5 },
    { title: "Pormade Indaial", score: 4.5 },
    { title: "Pormade Joinville", score: 4.5 },
    { title: "Pormade Curitiba", score: 4.5 },
  ];

  // Função para atualizar o valor do campo de busca
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // Filtrar a lista com base no texto digitado no campo de busca
  const filteredStores = storesList.filter((store) =>
    store.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="justify-center font-inter mx-auto max-w-screen-xl md:mt-48">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex absolute top-36 font-light text-center text-4xl text-zinc-400">
            Conheça nossas <span className="text-green-600 font-bold ml-2">lojas</span>
          </div>
        </div>

        <div className="flex px-16 justify-center">
          <div className="w-1/2">
            <div className="relative mb-12">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                className="appearance-none bg-zinc-100 rounded-full w-10/12 h-12 py-2 px-5 pr-10 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Buscar lojas"
              />
              <AiOutlineSearch className="absolute top-4 right-28 text-green-500" />
            </div>
            <img src={store_map} className="w-10/12" alt="Store Map" />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col items-center divide-y">
              {filteredStores.map((store) => (
                <StoresList key={store.title} title={store.title} score={store.score} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stores;
