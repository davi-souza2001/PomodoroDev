import { Header } from "../components/Header";
import { Task } from "../components/Task";

export function Tasks() {
	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Your tasks, Davi 🔥</span>
			</div>
			<div className='h-[80vh] w-screen flex items-center justify-start flex-col bg-[#181A20] overflow-scroll overflow-x-hidden xl:h-[80vh]'>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	)
}