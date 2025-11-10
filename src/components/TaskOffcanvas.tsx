import { parse } from "preact-parser";

import TaskBadge from "./TaskBadge";
import TaskButton from "./TaskButton";
import { Task } from "../types";
import { formatText } from "../utils/stringFormatter";

interface TaskOffcanvasProps {
	task: Task;
	markComplete: () => void;
}

const TaskOffcanvas = ({ task, markComplete }: TaskOffcanvasProps) => {
	return (
		<div
			id="hs-offcanvas-details"
			class="hs-overlay hs-overlay-open:translate-x-0 fixed end-0 top-0 z-3 hidden h-full w-full translate-x-full transform bg-white transition-all duration-300 md:max-w-2xl"
			role="dialog"
			aria-labelledby="hs-offcanvas-details-label"
		>
			<div class="flex items-center justify-between p-4">
				<button type="button" aria-label="Close" data-hs-overlay="#hs-offcanvas-details">
					<div class="flex items-center text-[#50504E]">
						<p>&#129120;</p>
						<p id="hs-offcanvas-details-label" class="ml-2 font-semibold">
							Go Back
						</p>
					</div>
				</button>
				<button type="button" aria-label="Close" data-hs-overlay="#hs-offcanvas-details">
					<h2>&#128473;</h2>
				</button>
			</div>
			{task && (
				<div class="flex flex-col px-4">
					<TaskBadge status={task.status} text={task.do_when} isSchedule />
					<p class="mt-6 text-sm font-semibold text-[#50504E]">
						{formatText(task.category).toUpperCase()}
					</p>
					<p class="my-2 text-3xl text-[#1F2937]">{task.title}</p>
					<p class="mb-6 text-sm text-[#442B2C]">Estimated Time: {task.estimated_time}</p>
					<div class="mb-6 flex flex-col gap-4 text-[#686866]">{parse(task.long_description)}</div>
					{task.status !== "completed" && (
						<div class="w-fit">
							<TaskButton label="Mark as Complete" type="primary" onClick={markComplete} />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default TaskOffcanvas;
