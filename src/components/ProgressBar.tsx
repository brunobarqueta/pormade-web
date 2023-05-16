interface Props {
	progress: number;
}

const ProgressBar = ({progress}: Props) => {
	return (
		<>
			<div className="h-5 bg-gray-300 rounded-full overflow-hidden">
				<div className="h-full bg-green-500 rounded-full" style={{ width: `${progress}%` }}></div>
			</div>
			<p className="absolute top-0 right-0 bottom-0 left-0 mr-2 flex items-center justify-end text-xs text-gray-500">{`${progress}%`}</p>
		</>
	);
};

export default ProgressBar;
