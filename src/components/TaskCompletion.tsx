import stroke from "../assets/stroke.png";

interface TaskCompletionProps {
	amount: number;
	total: number;
}

const TaskCompletion = ({ amount, total }: TaskCompletionProps) => {
	return (
		<div class="mt-4 flex border-l-4 border-[#B1CDCE] bg-gray-100">
			{/* <div class="w-[105px] h-[99px] bg-[#F7F7F4] md:hidden">
        <img class="p-4 rounded-full border-2" src={stroke} width={73} height={73} />
      </div> */}
			<div class="ml-2 flex flex-col">
				<p>
					{amount}/{total}
				</p>
				<p>Available Tasks Completed</p>
			</div>
		</div>
	);
};

export default TaskCompletion;
