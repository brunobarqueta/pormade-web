import PointsHome from "./Home/PointsHome";
import { Link, useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal";

import logo_white from "../assets/logo-white.png";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile-img.png";
import bell from "../assets/bell.png";
import gray_bell from "../assets/gray-bell.png";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

const NavBar = () => {
	const Links = [
		{ name: "Início", link: "/" },
		{ name: "Prêmios", link: "/prizes" },
		{ name: "Lojas", link: "/stores" },
		{ name: "Extratos", link: "/extracts" },
		{ name: "Dúvidas", link: "/faq" },
	];

	const location = useLocation();
	const { pathname } = location;
	const isDark = pathname === "/" || pathname === "/faq";

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleProfileClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="relative">
			<nav className={`h-64 md:h-48 md:flex md:justify-between px-5 md:px-12 pt-5 md:py-12 ${isDark ? "bg-green-600" : "bg-white"}`}>
				<Link to="/">
					<img src={isDark ? logo_white : logo} alt="Logo" className="w-44 object-contain" />
				</Link>

				<div onClick={() => setMenuOpen(!menuOpen)} className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden">
					<AiOutlineMenu className={`${pathname === "/" || pathname === "/faq" ? "text-white" : "text-green-600"} md:hidden`} size={32} />
				</div>
				<div className="md:flex justify-end items-center mr-8 mb-16 tracking-wider font-inter">
					
					<ul className={`md:flex text-xs uppercase font-normal ${isDark ? "text-white" : "text-gray-400"}`}>
						{/* <li className="mr-6">
							<Link to="/login">Ver Login</Link>
						</li> */}
						{Links.map((link) => (
							<li key={link.name} className={`mr-6 ${pathname === link.link && "text-green-300 font-bold"}`}>
								<Link to={link.link}>{link.name}</Link>
							</li>
						))}

						<li className="mr-6 cursor-pointer" onClick={handleProfileClick}>
							Perfil
						</li>
					</ul>
					{/* <div>
						<img src={profile_img} alt="Foto de Perfil" className="h-16 w-16 rounded-full mx-4 cursor-pointer" onClick={handleProfileClick} />
					</div>
					<div>
						<img src={isDark ? bell : gray_bell} alt="Sino" className="w-6 h-6 ml-4 object-scale-down" />
						<div className={`absolute rounded-full w-3 h-3 -mt-7 ml-7 ${isDark ? "bg-green-400" : "bg-green-700"}`}></div>
					</div> */}
				</div>
			</nav>
			{pathname === "/" ? <PointsHome /> : null}
			<ProfileModal isOpen={isModalOpen} onClose={closeModal} user={{ name: "aaa", subtitle: "bbb", avatar: profile_img }} />
		</div>
	);
};

export default NavBar;
