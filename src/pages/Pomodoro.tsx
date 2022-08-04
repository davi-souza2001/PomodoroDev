import { RingProgress } from "@mantine/core"
import { useEffect, useState } from "react"
import { BiPause, BiPlay, BiSquareRounded, BiX } from "react-icons/bi"
import { useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import UseAuth from "../data/hook/UseAuth"

export function Pomodoro() {
	const { pathname } = useLocation()
	const pathOutId = pathname.split('/')[1]
	const [onRunning, setOnRunning] = useState(false)

	const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 60 * 60// 25 minute
	const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

	const minutes = Math.floor(secondsAmount / 60)
	const seconds = secondsAmount % 60

	useEffect(() => {
		if (onRunning && secondsAmount > 0) {
			setTimeout(() => {
				setSecondsAmount(state => state - 1)
			}, 0.5)
		}
	}, [secondsAmount, onRunning])

	const { getUser } = UseAuth()

	useEffect(() => {
		getUser()
	}, [])

	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>{pathOutId} ⏰</span>
			</div>
			<div className='h-64 w-full flex items-center justify-center'>
				<RingProgress
					size={200}
					label={
						<div className='flex items-center justify-center text-4xl'>
							<span>{String(minutes).padStart(2, '0')}</span>
							<span>:</span>
							<span>{String(seconds).padStart(2, '0')}</span>
						</div>}
					sections={[
						{ value: (minutes * 100) / 60, color: '#c64b4f' }
					]}
				/>
			</div>
			<div className='h-12 w-full flex items-center justify-center text-xl'>
				<span>Stay focus for {minutes} minutes</span>
			</div>
			<div className='h-24 w-full flex items-center justify-center mt-5'>
				<div
					className='bg-red-500 p-5 text-5xl rounded-full cursor-pointer'
				>
					<BiX />
				</div>
				<div
					onClick={() => setOnRunning(state => !state)}
					className='bg-green-500 p-5 text-5xl rounded-full cursor-pointer mx-5'
				>
					{onRunning && minutes != 0 ? <BiPause /> : <BiPlay />}
				</div>
				<div
					onClick={() => {
						if (minutes === 0) {
							setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS)
						}
					}}
					className='bg-yellow-600 p-5 text-5xl rounded-full cursor-pointer'
				>
					<BiSquareRounded />
				</div>
			</div>
		</div>
	)
}
