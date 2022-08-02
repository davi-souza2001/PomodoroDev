import { RingProgress } from "@mantine/core"

import { Header } from "../components/Header"

import PomodoroLogo from '../../public/PomodoroLogo.svg'

export function Profile() {
	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-32 w-full flex items-center justify-start text-2xl font-medium'>
				<div>
					<RingProgress
						label={
							<div className='flex items-center justify-center'>
								123
							</div>}
						sections={[
							{ value: 40, color: '#c64b4f' }
						]}
					/>
				</div>
				<div className='h-full w-full flex items-start justify-center flex-col'>
					<div>
						<p>Level: 123</p>
						<p>Experiencie</p>
					</div>
					<div className='h-2 w-3/4 bg-blue-300' />
				</div>
			</div>
			<div className='h-28 w-full flex items-center justify-center flex-col'>
				<div className='h-full w-full flex items-center justify-start text-2xl font-semibold'>
					<img
						className='h-3/5 ml-5'
						src={PomodoroLogo}
						alt='User photo'
					/>
					<div className='flex items-center justify-center flex-col'>
						<span className='ml-3'>Davi Souza</span>
						<span className='ml-3 text-sm'>@davi-souza2001</span>
					</div>
				</div>
			</div>
			<div className='h-28 w-full flex items-center justify-start'>
				<button className='ml-5 bg-red-600 p-3 rounded-lg text-xl font-semibold'>
					Logout
				</button>
			</div>
		</div>
	)
}
