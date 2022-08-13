import { useEffect } from "react";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { TaskProps } from "../data/context/AuthContext";
import UseAuth from "../data/hook/UseAuth";

export function Tasks() {
	const { getUser, user, getTasks, tasks, getExperience } = UseAuth()

	useEffect(() => {
		getUser()
		getExperience()
		getTasks()
	}, [])

	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Your tasks, {user.name.length !== 0 ? user.name : 'not user'} 🔥</span>
			</div>
			<div className='h-[80vh] w-screen flex items-center justify-start flex-col bg-[#181A20] overflow-scroll overflow-x-hidden xl:h-[80vh]'>
				{tasks.map((task: TaskProps) => {
					return (
						<Task title={task.title} favorite={task.favorite} id={task.id} key={task.id} />
					)
				})}
			</div>
		</div>
	)
}
