import Points from "../Points";

const PointsHome: React.FC = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <div className="absolute top-28 text-white font-inter text-xs font-light">Você tem </div>
            <Points quantity={18000} className="w-1/3 h-20 text-5xl px-2 py-2 top-48" />
            <div className="absolute top-64 font-inter text-xs">Parabéns! Você já atingiu a pontuação e está ativo.</div>
        </div>
    )
}

export default PointsHome;