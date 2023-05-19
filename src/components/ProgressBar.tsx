interface Props {
	progress: number;
	points?: number;
	height?: string;
}

const ProgressBar = ({ progress, height, points }: Props) => {
	return (
		<div className={`bg-gray-200 rounded-full overflow-hidden relative ${height ? height : "h-5"} flex items-center`}>
			<div className="h-full bg-green-400 rounded-full" style={{ width: `${progress}%` }}></div>
			{points ? <p className="absolute top-0 left-2 bottom-0 m-auto flex items-center text-xs text-gray-600">{points.toLocaleString("pt-BR")} pontos</p> : null}
			<p className="absolute top-0 right-2 bottom-0 m-auto flex items-center text-xs text-gray-500">{`${progress}%`}</p>
		</div>
	);
};

export default ProgressBar;
