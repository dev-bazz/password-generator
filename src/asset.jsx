import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import riv from "./riv/pga.riv";

const Icons = ({ icon, className = "icon", refIcon, click }) => {
	switch (icon) {
		case "copy":
			return (
				<span>
					<svg
						ref={refIcon}
						onClick={click}
						className={`icon ${className}`}
						width="1.5em"
						height="1.5em"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.75 15.75H20.25V3.75H8.25V8.25"
							stroke="#AE73FA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M15.75 8.25H3.75V20.25H15.75V8.25Z"
							stroke="#AE73FA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			);

		case "rotate":
			return (
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.98761 6.23129H1.98761V3.23129"
						stroke="#111116"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.11261 11.8875C4.88162 12.6571 5.86162 13.1814 6.92863 13.394C7.99565 13.6066 9.10175 13.4979 10.107 13.0818C11.1123 12.6656 11.9715 11.9607 12.5761 11.0561C13.1806 10.1515 13.5033 9.08799 13.5033 8C13.5033 6.91201 13.1806 5.84847 12.5761 4.9439C11.9715 4.03933 11.1123 3.33439 10.107 2.91824C9.10175 2.50209 7.99565 2.39343 6.92863 2.60601C5.86162 2.81859 4.88162 3.34286 4.11261 4.1125L1.98761 6.23125"
						stroke="#111116"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);

		default:
			return <span>No Icon Selected</span>;
	}
};

const RiveAsset = ({ stateMachine, className, copyText }) => {
	const { RiveComponent } = useRive({
		src: riv,
		stateMachines: stateMachine,
		autoplay: true,
		artboard: stateMachine,
	});

	return (
		<RiveComponent
			className={className}
			onClick={() => {
				const { current } = copyText;
				console.log(current);
				navigator.clipboard.writeText(current.innerText).then(() => {
					console.log("copied");
				});
			}}
		/>
	);
};

const TreeGrowth = ({ className, length }) => {
	const stateM = "State Machine 1";
	const { RiveComponent, rive } = useRive({
		src: riv,
		autoplay: true,
		artboard: "Tree",
		stateMachines: stateM,
	});
	const anime = useStateMachineInput(rive, stateM, "input");
	const grow = (length) => {
		anime.value = length * 5;
	};
	return (
		<RiveComponent
			className={className}
			onClick={() => {
				grow(length);
			}}
		/>
	);
};

export { Icons, RiveAsset, TreeGrowth };
