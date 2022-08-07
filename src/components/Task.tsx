import { BiRightArrow, BiStar } from "react-icons/bi"
import { HiStar } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

interface TaskProps {
	title: string
	favorite: boolean
	id: number
}

export function Task(props: TaskProps) {
	const navigate = useNavigate()

	return (
		<div className='h-20 w-full flex items-center justify-center font-semibold text-xl mb-3'>
			<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-around'>
				<p>{props.title}🚀</p>
				<div className='bg-orange-600 flex items-center justify-center p-2 rounded-lg cursor-pointer mr-[10px]'>
					<button><BiRightArrow /></button>
				</div>
				<div className='bg-yellow-500 flex items-center justify-center p-2 rounded-lg cursor-pointer mr-[-30px]'>
					<button
						onClick={() => navigate(`/${props.id}`)}
					>
						{props.favorite ? <HiStar /> : <BiStar />}
					</button>
				</div>
			</div>
		</div>
	)
}
