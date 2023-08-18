interface TableData {
  id: number;
  attendant: string;
  date: string;
  registration: string;
  value: number;
  status: string;
}

interface Props {
  data: TableData[];
}

const Table: React.FC<Props> = ({ data }) => {
  const renderStatusIndicator = (status: string) => {
    let colorClass = "bg-green-500";
    let tooltipText = "Pago";

    if (status === "yellow") {
      colorClass = "bg-yellow-500";
      tooltipText = "Pendente";
    } else if (status === "red") {
      colorClass = "bg-red-500";
      tooltipText = "Reprovado";
    }

    return <div className={`h-4 w-4 rounded-full ${colorClass}`} title={tooltipText}></div>;
  };

  const columns = ["Cliente", "Data", "Atendente", "Valor", "Status", ""];

  return (
    <div className="w-full mx-auto mt-56">
      <div className="ml-6 md:ml-16 overflow-x-auto">
        <table className="min-w-full font-inter text-sm">
          <thead>
            <tr>
              {columns.map((item) => (
                <th className="py-2 px-2 md:px-4 text-gray-400 font-normal text-left" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.registration}</td>
                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.date}</td>
                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.attendant}</td>
                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">
                  R$ {item.value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700 flex items-center ml-2 md:ml-4">
                  {renderStatusIndicator(item.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
