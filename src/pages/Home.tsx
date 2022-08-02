import { RingProgress } from '@mantine/core'

import { Header } from "../components/Header"
import { TaskFavorite } from '../components/TaskFavorite'

import PomodoroLogo from '../../public/PomodoroLogo.svg'

export function Home() {
	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Morning, Davi 👋</span>
			</div>
			<div className='h-28 w-full flex items-center justify-center font-semibold text-xl'>
				<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-start xl:justify-around'>
					<RingProgress
						label={
							<div className='flex items-center justify-center'>
								123
							</div>}
						sections={[
							{ value: 40, color: '#c64b4f' }
						]}
					/>
					<p>Wow! Look at the level you've reached 🚀</p>
					<div className='hidden xl:h-28 xl:w-96 xl:flex xl:items-center xl:justify-around xl:text-xl'>
						<div className='h-full flex items-center justify-center flex-col'>
							<span>Davi Souza</span>
							<span>Level: 123</span>
						</div>
						<img
							className='h-3/4 rounded-full'
							src={PomodoroLogo}
							alt='User photo'
						/>
					</div>
				</div>
			</div>
			<div className='h-16 w-full flex items-center justify-start font-semibold text-xl'>
				<span className='ml-5'>Your favorites tasks (4):</span>
			</div>
			<TaskFavorite />
			<TaskFavorite />
			<TaskFavorite />
			<TaskFavorite />
		</div>
	)
}
