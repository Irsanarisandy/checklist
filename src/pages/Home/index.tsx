import { useEffect, useState } from "preact/hooks";

import mockTasks from "../../assets/mock_tasks.json";
import TaskAccordion from "../../components/TaskAccordion";
import TaskOffcanvas from "../../components/TaskOffcanvas";
import { Task } from "../../types";

export function Home() {
	const [todoTasks, setTodoTasks] = useState<Task[]>([]);
	const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
	const [selectedTask, setSelectedTask] = useState<Task>();

	const selectTask = (task: Task) => setSelectedTask(task);

	const markComplete = () => {
		selectedTask.status = "completed";
		const { element } = window["HSOverlay"].getInstance("#hs-offcanvas-details", true);
		element.close();
		element.destroy();
		setTodoTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTask.id));
		setCompletedTasks((prevTasks) => prevTasks.concat([selectedTask]));
		setTimeout(() => window["HSOverlay"].autoInit(), 1000);
	};

	useEffect(() => {
		const mockTodoTasks: Task[] = [];
		const mockCompletedTasks: Task[] = [];
		for (const task of mockTasks.tasks) {
			if (task.status !== "completed") {
				mockTodoTasks.push(task);
			} else {
				mockCompletedTasks.push(task);
			}
		}
		mockTodoTasks.sort((taskA, taskB) => taskA.priority - taskB.priority);
		setTodoTasks(mockTodoTasks);
		setCompletedTasks(mockCompletedTasks);
	}, []);

	return (
		<>
			<div class="w-full max-w-350">
				<h2 class="text-[#1F2937]">Your Checklist</h2>
				<p class="text-[#4E5E5E]">
					We've curated activities to help along the end-of-life journey. These will update as your
					journey progresses.
				</p>
				<div class="hs-accordion-group mt-6 grid w-full gap-5" data-hs-accordion-always-open>
					<TaskAccordion label="Your Tasks" tasks={todoTasks} onClick={selectTask} />
					<TaskAccordion label="Completed" tasks={completedTasks} completed onClick={selectTask} />
				</div>
			</div>
			<TaskOffcanvas task={selectedTask} markComplete={markComplete} />
		</>
	);
}
