import NavBar from "../components/NavBar";

const Stores = () => {
    return (
        <>
            <NavBar />
            <div className="flex-grow flex flex-col items-center justify-center mb-5">
                <div className="flex absolute top-36 font-inter font-light text-center text-4xl text-zinc-400">
                    Conheça nossas <div className="text-green-600 font-bold ml-2">lojas</div>
                </div>
            </div>
        </>
    )
}

export default Stores;