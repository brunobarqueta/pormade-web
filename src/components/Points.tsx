interface Props {
	quantity: number;
	className: string;
}

const Points = ({ quantity, className }: Props) => {
	return (
		<div className={`bg-white ${className} text-center items-center rounded-full text-green-600 font-medium absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 green-box-shadow shadow-opacity bold`}>
			{quantity.toLocaleString("pt-BR")} pontos
		</div>
	);
};

export default Points;
