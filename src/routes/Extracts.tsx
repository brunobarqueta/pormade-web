import Table from "../components/Extracts/Table";
import NavBar from "../components/NavBar";


const Extracts = () => {
    var data = [
        {id: 1, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "green" },
        {id: 2, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "yellow" },
        {id: 3, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "red" },
        {id: 4, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "green" },
        {id: 5, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "yellow" },
        {id: 6, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "red" },
        {id: 7, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "green" },
        {id: 8, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "yellow" },
        {id: 9, number: "1/2023", date: "há 18 minutos", registration: "Youzoom Soluções Web", value: 10, paymentMethod: "Boleto", status: "red" },
    ]
    return (
        <>
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center mb-5">
            <div className="flex absolute top-32 font-inter font-light text-center text-4xl text-zinc-400">
                Veja seus <div className="text-green-600 font-bold ml-2">extratos</div>
            </div>
        </div>
        <Table data={data} />
        </>
    )
}

export default Extracts;