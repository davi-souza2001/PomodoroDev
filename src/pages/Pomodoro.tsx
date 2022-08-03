import { RingProgress } from "@mantine/core";
import { BiPlay } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";

export function Pomodoro() {
	const { pathname } = useLocation()
	const pathOutId = pathname.split('/')[1]

	console.log(pathOutId)

	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Pomodoro Name ⏰</span>
			</div>
			<div className='h-64 w-full flex items-center justify-center'>
				<RingProgress
					size={200}
					label={
						<div className='flex items-center justify-center text-4xl'>
							25:00
						</div>}
					sections={[
						{ value: 20, color: '#c64b4f' }
					]}
				/>
			</div>
			<div className='h-12 w-full flex items-center justify-center text-xl'>
				<span>Stay focus for 25 minutes</span>
			</div>
			<div className='h-24 w-full flex items-center justify-center mt-5'>
				<div className='bg-green-500 p-5 text-5xl rounded-full cursor-pointer'>
					<BiPlay />
				</div>
			</div>
		</div>
	)
}
