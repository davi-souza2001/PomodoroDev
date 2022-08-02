import { RingProgress } from '@mantine/core'

import { Header } from "../components/Header"

export function Home() {
	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Morning, Davi 👋</span>
			</div>
			<div className='h-28 w-full flex items-center justify-center font-semibold text-xl'>
				<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-start'>
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
				</div>
			</div>
		</div>
	)
}
