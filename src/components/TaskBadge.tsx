import { useMemo } from "preact/hooks";

import { formatText } from "../utils/stringFormatter";

interface TaskBadgeProps {
	status: string;
	text: string;
	isSchedule?: boolean;
}

const TaskBadge = ({ status, text, isSchedule }: TaskBadgeProps) => {
	let color: string;

	if (!isSchedule) {
		switch (status) {
			case "in_progress":
				color = "bg-amber-100 text-yellow-700";
				break;
			case "todo":
				color = "bg-purple-100 text-purple-800";
				break;
			case "completed":
				color = "bg-[#CAEAE4] text-[#024345]";
				break;
		}
	} else {
		color = status !== "completed" ? "bg-red-100 text-red-800" : "bg-[#CAEAE4] text-[#024345]";
	}

	const formattedText = useMemo(
		() => (status !== "completed" ? formatText(text) : "Complete"),
		[text, status]
	);

	return (
		<p
			class={`size-fit truncate rounded-full px-3 py-1.5 text-xs font-semibold md:max-w-44 ${color}`}
			title={formattedText}
		>
			{formattedText}
		</p>
	);
};

export default TaskBadge;
