import { MouseEventHandler } from "preact";

interface TaskButtonProps {
	label: string;
	type: string;
	openOffcanvas?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TaskButton = ({ label, type, openOffcanvas, onClick }: TaskButtonProps) => {
	let color: string;

	switch (type) {
		case "primary":
			color = "border border-transparent bg-[#035658] text-white";
			break;
		case "secondary":
			color = "border border-[#035658] bg-transparent text-[#035658]";
			break;
	}

	return (
		<button
			type="button"
			class={`w-full rounded-full px-4 py-1.5 ${color}`}
			{...(openOffcanvas && {
				"aria-haspopup": "dialog",
				"aria-expanded": "false",
				"aria-controls": "hs-offcanvas-details",
				"data-hs-overlay": "#hs-offcanvas-details",
			})}
			onClick={onClick}
		>
			<p class="text-sm font-semibold">{label}</p>
		</button>
	);
};

export default TaskButton;
