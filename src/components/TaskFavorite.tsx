import { BiRightArrow } from "react-icons/bi";

interface TaskFavoriteProps {
	title: string
}

export function TaskFavorite(props: TaskFavoriteProps) {
	return (
		<div className='h-20 w-full flex items-center justify-center font-semibold text-xl mb-3'>
			<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-around'>
				<p>{props.title}🚀</p>
				<div className='bg-orange-600 flex items-center justify-center p-2 rounded-lg cursor-pointer'>
					<button><BiRightArrow /></button>
				</div>
			</div>
		</div>
	)
}
