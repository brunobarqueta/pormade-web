import { useContext } from "react";
import Points from "../Points";
import { UserContext } from "../../contexts/userContext";

const PointsHome = () => {
    const {user} = useContext(UserContext);

    return (
        <div className={`flex-grow flex flex-col items-center justify-center font-inter`}>
            {/* ${scrollingDown && window.innerWidth > 768 ? "fade-out" : "fade-in"} */}
            <div className="absolute top-28 md:top-28 text-white text-xs font-light">Você tem </div>
            <Points quantity={user.points} className="h-20 text-4xl lg:text-5xl px-2 py-4 top-44 md:top-48" width="sm:w-1/3"/>
            <div className="absolute top-56 md:top-64 text-xs">Parabéns! Você já atingiu a pontuação e está ativo.</div>
        </div>
    )
}

export default PointsHome;