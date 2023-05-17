interface Props {
	progress: number;
	height?: string;
}

const ProgressBar = ({ progress, height }: Props) => {
	return (
		<div className={`bg-gray-200 rounded-full overflow-hidden relative ${height ? height : 'h-5'}`}>
			<div className="h-full bg-green-400 rounded-full" style={{ width: `${progress}%` }}></div>
			<p className="absolute top-0 right-0 mr-2 text-xs text-gray-500">{`${progress}%`}</p>
		</div>
	);
};

export default ProgressBar;
