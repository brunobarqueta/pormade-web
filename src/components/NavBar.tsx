import PointsHome from "./Home/PointsHome";
import { Link, useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal";

import logo_white from "../assets/logo-white.png";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile-img.png";
import bell from "../assets/bell.png";
import gray_bell from "../assets/gray-bell.png";
import { useState } from "react";

const NavBar = () => {
	const location = useLocation();
	const { pathname } = location;

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleProfileClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			{pathname === "/" ? <PointsHome /> : null}
			<nav className={`h-48 flex justify-between px-12 ${pathname === "/" ? "bg-green-600" : "bg-white"}`}>
				<div className="flex">
					<img src={pathname === "/" ? logo_white : logo} alt="Logo" className="w-44 object-contain mb-16" />
				</div>
				<div className="flex-1 flex justify-end items-center mr-8 mb-16 tracking-wider font-inter">
					<ul className={`flex text-xs uppercase font-normal ${pathname === "/" ? "text-white" : "text-gray-400"}`}>
						<li className="mr-6">
							<Link to="/login">Ver Login</Link>
						</li>
						<li className="mr-6">
							<Link to="/">Início</Link>
						</li>
						<li className="mr-6">
							<Link to="/prizes">Prêmios</Link>
						</li>
						<li className="mr-6">
							<Link to="/stores">Lojas</Link>
						</li>
						<li className="mr-6">
							<Link to="/extracts">Extratos</Link>
						</li>
						{/* <li className="mr-6">
                            <Link to="/financial-extract">Extratos Financeiros</Link>
                        </li> */}
						<li className="mr-6">
							<Link to="/doubts">Dúvidas</Link>
						</li>
						<li className="mr-6">
							<Link to="/account">Conta</Link>
						</li>
					</ul>
					<div>
						<img src={profile_img} alt="Foto de Perfil" className="h-16 w-16 rounded-full mx-4" onClick={handleProfileClick}/>
					</div>
					<div>
						<img src={pathname === "/" ? bell : gray_bell} alt="Sino" className="w-6 h-6 ml-4 object-scale-down" />
					</div>
				</div>
			</nav>
			<ProfileModal isOpen={isModalOpen} onClose={closeModal} user={{ name: "aaa", subtitle: "bbb", avatar: "aaa" }} />
		</div>
	);
};

export default NavBar;
