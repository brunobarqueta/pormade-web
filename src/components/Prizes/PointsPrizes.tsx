import Points from "../Points";

const PointsPrizes: React.FC = () => {

    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <div className="absolute top-32 font-inter font-light break-words w-96 text-center text-3xl text-zinc-400">
                Você está próximo a <div className="text-green-600 font-bold">adquirir um prêmio</div>
            </div>
            <Points quantity={18000} className="w-1/5 h-10 text-3xl top-64" />
            <div className="absolute top-80 break-words w-64 text-center font-inter text-sm text-zinc-600">Continue assim e logo você já poderá retirar sua premiação.</div>
        </div>
    )
}

export default PointsPrizes;