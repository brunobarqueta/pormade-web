import { useContext } from "react";
import Points from "../Points";
import { UserContext } from "../../contexts/userContext";

const PointsHome = () => {
    const {user} = useContext(UserContext);

    return (
        <div className="flex-grow flex flex-col items-center justify-center font-inter">
            <div className="absolute top-28 text-white text-xs font-light">Você tem </div>
            <Points quantity={user.points} className="w-1/3 h-20 text-5xl px-2 py-3 top-48" />
            <div className="absolute top-64 text-xs">Parabéns! Você já atingiu a pontuação e está ativo.</div>
        </div>
    )
}

export default PointsHome;