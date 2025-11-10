import TaskBadge from "./TaskBadge";
import TaskButton from "./TaskButton";
import { Task } from "../types";

interface TaskAccordionProps {
	label: string;
	tasks: Task[];
	completed?: boolean;
	onClick?: (task: Task) => void;
}

const TaskAccordion = ({ label, tasks, completed, onClick }: TaskAccordionProps) => {
	const bgContent = !completed ? "bg-white" : "bg-[#F7F7F4]";
	const mobileBorderLeft = !completed ? "border-l-[#F6E0D6]" : "border-l-[#CAEAE4]";
	const taskTitle = !completed ? "text-[#035E61] font-semibold" : "text-gray-400 line-through";

	return (
		<div class="hs-accordion active rounded-md border border-[#AFAFAD]">
			<button
				class="hs-accordion-toggle flex w-full items-center gap-x-3 rounded-t-lg bg-stone-50 px-5 py-3 text-gray-800 hover:text-gray-500"
				aria-expanded="true"
			>
				<svg
					class="hs-accordion-active:block hidden size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m6 9 6 6 6-6"></path>
				</svg>
				<svg
					class="hs-accordion-active:hidden block size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m18 15-6-6-6 6"></path>
				</svg>
				<h2>{label}</h2>
			</button>
			<div
				class={`hs-accordion-content overflow-hidden rounded-b-lg border-t-2 border-gray-200 px-4 transition-[height] duration-300 ${bgContent}`}
				role="region"
			>
				<table class="w-full">
					<tbody class="md:divide-y md:divide-gray-200">
						{tasks.map((task) => (
							<tr
								key={task.id}
								class={`my-4 flex flex-col rounded-md border-2 border-l-4 border-gray-300 bg-white px-4 py-2 hover:bg-gray-100 md:my-0 md:table-row md:rounded-none md:border-x-0 md:bg-transparent md:p-0 first:md:border-t-0 last:md:border-b-0 ${mobileBorderLeft}`}
							>
								<td class="order-2 md:w-4/17 md:py-2 md:pl-2">
									<button
										type="button"
										class="text-left"
										aria-haspopup="dialog"
										aria-expanded="false"
										aria-controls="hs-offcanvas-details"
										data-hs-overlay="#hs-offcanvas-details"
										onClick={() => onClick(task)}
									>
										<p class={taskTitle}>{task.title}</p>
									</button>
								</td>
								<td class="hidden px-4 py-2 md:table-cell">
									<p>{task.status !== "completed" ? task.short_description : ""}</p>
								</td>
								<td class="order-1 py-2 md:w-48 md:border-x-2 md:border-gray-200 md:px-2">
									<TaskBadge status={task.status} text={task.category} />
								</td>
								<td class="order-3 w-36 py-2 md:px-2">
									<TaskButton
										label={task.cta_text}
										type={task.status !== "completed" ? "primary" : "secondary"}
										openOffcanvas
										onClick={() => onClick(task)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TaskAccordion;
