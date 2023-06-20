import Table from "../components/Extracts/Table";
import NavBar from "../components/NavBar";


const Extracts = () => {
    var data = [
        {id: 1, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "green" },
        {id: 2, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "yellow" },
        {id: 3, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "red" },
        {id: 4, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "green" },
        {id: 5, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "yellow" },
        {id: 6, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "red" },
        {id: 7, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "green" },
        {id: 8, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "yellow" },
        {id: 9, registration: "Youzoom Soluções Web", date: "há 18 minutos", attendant: "João da Silva", value: 10, status: "red" },
    ]
    return (
        <>
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center mb-5">
            <div className="flex absolute top-32 font-inter font-light text-center text-4xl text-zinc-400">
                Veja seus <span className="text-green-600 font-bold ml-2">extratos</span>
            </div>
        </div>
        <Table data={data} />
        </>
    )
}

export default Extracts;