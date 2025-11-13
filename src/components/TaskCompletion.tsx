import stroke from "../assets/stroke.png";

interface TaskCompletionProps {
	amount: number;
	total: number;
}

const TaskCompletion = ({ amount, total }: TaskCompletionProps) => {
	return (
		<div class="mt-4 flex items-center border-2 border-l-4 border-gray-200 border-l-[#B1CDCE] bg-white px-4 py-3">
			<div class="mr-6 hidden md:block">
				<img
					class="rounded-full border-2 border-gray-200 bg-[#F7F7F4] px-4 py-5"
					src={stroke}
					width={70}
					height={70}
				/>
			</div>
			<div class="flex flex-col">
				<p class="text-xl">
					{amount}/{total}
				</p>
				<p>Available Tasks Completed</p>
			</div>
		</div>
	);
};

export default TaskCompletion;
