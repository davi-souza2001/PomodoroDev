import { RingProgress } from "@mantine/core"

import { Header } from "../components/Header"

import PomodoroLogo from '../../public/PomodoroLogo.svg'
import UseAuth from "../data/hook/UseAuth"
import { useEffect } from "react"

export function Profile() {
	const { logout, user, getUser, getExperience, experience } = UseAuth()

	useEffect(() => {
		getExperience()
	}, [user])

	useEffect(() => {
		getUser()

	}, [])

	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<div className='h-32 w-full flex items-center justify-start text-2xl font-medium'>
				<div>
					<RingProgress
						label={
							<div className='flex items-center justify-center'>
								{experience.level}
							</div>}
						sections={[
							{ value: experience.xp ?? 0, color: '#c64b4f' }
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
						<span className='ml-3'>{user.name.length !== 0 ? user.name : 'not user'}</span>
					</div>
				</div>
			</div>
			<div className='h-28 w-full flex items-center justify-start'>
				<button
					onClick={logout}
					className='ml-5 bg-red-600 p-3 rounded-lg text-xl font-semibold'
				>
					Logout
				</button>
			</div>
		</div>
	)
}
