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
	const isDark = pathname === "/" || pathname === "/faq";

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
			<nav className={`h-48 flex justify-between px-12 ${isDark ? "bg-green-600" : "bg-white"}`}>
				<Link to="/" className="flex">
					<img src={isDark ? logo_white : logo} alt="Logo" className="w-44 object-contain mb-16" />
				</Link>
				<div className="flex-1 flex justify-end items-center mr-8 mb-16 tracking-wider font-inter">
					<ul className={`flex text-xs uppercase font-normal ${isDark ? "text-white" : "text-gray-400"}`}>
						{/* <li className="mr-6">
							<Link to="/login">Ver Login</Link>
						</li> */}
						<li className={`mr-6 ${pathname === "/" && "text-green-300 font-bold"}`}>
							<Link to="/">Início</Link>
						</li>
						<li className={`mr-6 ${pathname === "/prizes" && "text-green-600 font-bold"}`}>
							<Link to="/prizes">Prêmios</Link>
						</li>
						<li className={`mr-6 ${pathname === "/stores" && "text-green-600 font-bold"}`}>
							<Link to="/stores">Lojas</Link>
						</li>
						<li className={`mr-6 ${pathname === "/extracts" && "text-green-600 font-bold"}`}>
							<Link to="/extracts">Extratos</Link>
						</li>
						{/* <li className={`mr-6 ${pathname === "/financial-extract" && "text-green-600 font-bold"}`}>
                            <Link to="/financial-extract">Extratos Financeiros</Link>
                        </li> */}
						<li className={`mr-6 ${pathname === "/faq" && "text-green-300 font-bold"}`}>
							<Link to="/faq">Dúvidas</Link>
						</li>
						<li className="mr-6 cursor-pointer" onClick={handleProfileClick}>
							Perfil
						</li>
					</ul>
					<div>
						<img src={profile_img} alt="Foto de Perfil" className="h-16 w-16 rounded-full mx-4 cursor-pointer" onClick={handleProfileClick} />
					</div>
					<div>
						<img src={isDark ? bell : gray_bell} alt="Sino" className="w-6 h-6 ml-4 object-scale-down" />
						<div className={`absolute rounded-full w-3 h-3 -mt-7 ml-7 ${isDark ? "bg-green-400" : "bg-green-700"}`}></div>
					</div>
				</div>
			</nav>
			<ProfileModal isOpen={isModalOpen} onClose={closeModal} user={{ name: "aaa", subtitle: "bbb", avatar: profile_img }} />
		</div>
	);
};

export default NavBar;
