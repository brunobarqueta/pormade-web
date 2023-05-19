import { FiDownload } from "react-icons/fi";

interface TableData {
	id: number;
	number: string;
	date: string;
	registration: string;
	value: number;
	paymentMethod: string;
	status: string;
}

interface Props {
	data: TableData[];
}

const Table: React.FC<Props> = ({ data }) => {
	const renderStatusIndicator = (status: string) => {
		let colorClass = "bg-green-500";
		let tooltipText = "Status: Green";

		if (status === "yellow") {
			colorClass = "bg-yellow-500";
			tooltipText = "Status: Yellow";
		} else if (status === "red") {
			colorClass = "bg-red-500";
			tooltipText = "Status: Red";
		}

		return <div className={`h-4 w-4 rounded-full ${colorClass}`} title={tooltipText}></div>;
	};

	return (
		<div className="w-4/5 mx-auto">
			<table className="min-w-full font-inter text-sm">
				<thead>
					<tr>
						<th className="px-4 text-gray-400 font-normal text-left">Número</th>
						<th className="px-4 text-gray-400 font-normal text-left">Data</th>
						<th className="px-4 text-gray-400 font-normal text-left">Cadastro</th>
						<th className="px-4 text-gray-400 font-normal text-left">Valor</th>
						<th className="px-4 text-gray-400 font-normal text-left">Forma de Pagamento</th>
						<th className="px-4 text-gray-400 font-normal text-left">Status</th>
						<th className="px-4 text-gray-400 font-normal text-left"></th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200 space-y-4">
					{data.map((item) => (
						<tr key={item.id}>
							<td className="py-7 px-4 text-gray-700">{item.number}</td>
							<td className="py-7 px-4 text-gray-700">{item.date}</td>
							<td className="py-7 px-4 text-gray-700">{item.registration}</td>
							<td className="py-7 px-4 text-gray-700">R$ {item.value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
							<td className="py-7 px-4 text-gray-700">{item.paymentMethod}</td>
							<td className="py-7 px-4 text-gray-700 flex items-center ml-4">{renderStatusIndicator(item.status)}</td>
							<td className="py-7 px-4">
                            <FiDownload className=" text-gray-700" size={18} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
