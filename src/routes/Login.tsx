import logo from "./../assets/logo.png";
import guys_laptop from "./../assets/guys-laptop.png";
import money_hand from "./../assets/money-hand.png";
import lock from "./../assets/lock.png";
import artboard1 from "./../assets/artboard1.png";
import artboard2 from "./../assets/artboard2.png";
import { RiFacebookLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";

const Login = () => {
	return (
		<div className="flex flex-col md:flex-row h-screen font-inter">
			<div className="md:w-1/2 flex flex-col justify-center items-center">
				<img className="mb-4" src={logo} width={383} height={96} alt="logo" />
				<h2 className="text-sm mb-4 mt-28 md:mt-12 text-zinc-500 leading-5">Digite seu celular para acessar sua conta.</h2>
				<form className="w-full max-w-sm mt-4">
					<input
						type="email"
						id="email"
						name="email"
						className="appearance-none bg-zinc-50 rounded-full mx-4 md:mx-0 md:w-full h-12 py-2 px-5 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
						placeholder="E-mail"
					/>
					<div className="flex items-center justify-center mt-8 gap-2">
						<img className="ml-4" src={money_hand} width={28} height={28} alt="money-hand" />
						{/* <RiHandCoinLine size={28} className="text-green-600" /> */}
						<p className="text-xs text-zinc-500 leading-5 mr-4">Quero participar</p>
						<img className="ml-4" src={lock} width={20} height={20} alt="lock" />
						{/* <AiOutlineUnlock size={28} className="text-green-600 ml-4" /> */}
						<p className="text-xs text-zinc-500 leading-5">Esqueci minha senha</p>
					</div>
				</form>
				<div className="flex flex-col items-center mt-32">
					<div className="flex mb-4">
						<SlSocialInstagram size={38} className="text-green-600 mx-2" />
						<RiFacebookLine size={38} className="text-green-600 mx-2" />
					</div>
					<p className="text-sm text-gray-500 break-words w-32 text-center">Conheça nossas redes sociais</p>
				</div>
			</div>
			<div className="w-1/2 h-screen hidden md:block">
				<img className="absolute hidden md:block bottom-0 start-1/3 z-0" width={300} height={300} src={artboard2} alt="artboard2" />
				<img className="absolute h-screen object-cover z-1" src={guys_laptop} alt="guys_laptop" />
			</div>
			<img className="absolute hidden md:block z-0" width={200} height={200} src={artboard1} alt="artboard1" />
		</div>
	);
};

export default Login;
