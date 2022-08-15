import { useEffect, useState } from 'react'
import { BiAlarmAdd } from 'react-icons/bi'
import { RingProgress } from '@mantine/core'
import Modal from '@mui/material/Modal'

import { Header } from "../components/Header"
import { TaskFavorite } from '../components/TaskFavorite'

import PomodoroLogo from '../../public/PomodoroLogo.svg'
import UseAuth from '../data/hook/UseAuth'
import { TaskProps } from '../data/context/AuthContext'

export function Home() {
	const { getUser, user, handleAddTask, getTasks, tasks, getExperience, experience, updateExperience } = UseAuth()

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const [pomoTitle, setPomoTitle] = useState('')
	const [pomoTime, setPomoTime] = useState('')

	useEffect(() => {
		getUser()
	}, [])

	useEffect(() => {
		getTasks()
		getExperience()

	}, [user])

	return (
		<div className='bg-[#181A20] h-screen w-screen font-poppins'>
			<Header />
			<button onClick={updateExperience}>asdsa</button>
			<div className='h-20 w-full flex items-center justify-around font-semibold text-2xl'>
				<span className='xl:ml-[-20vw]'>
					Morning, {user.name.length !== 0 ? user.name : 'not user'} 👋
				</span>
				<button
					onClick={handleOpen}
					className='xl:mr-[-20vw] cursor-pointer bg-green-600 p-3 rounded-full text-3xl xl:text-4xl'
				>
					<BiAlarmAdd />
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className='flex items-center justify-center'
				>
					<div className='h-72 w-80 flex items-center justify-start flex-col bg-[#181A20] rounded-lg'>
						<form
							onSubmit={(e) => {
								handleAddTask(
									e,
									+pomoTime,
									pomoTitle,
									user.email
								)
								handleClose()
							}}
							className='h-full w-full flex items-center justify-center flex-col'
						>
							<input
								className='h-12 w-5/6 mb-3 rounded-lg bg-[#21242c] border-none outline-none'
								type="text"
								placeholder={`Pomo's title`}
								onChange={(e) => setPomoTitle(e.target.value)}
							/>
							<input
								className='h-12 w-5/6 mb-7 rounded-lg bg-[#21242c] border-none outline-none'
								type="number"
								placeholder={`Pomo's time (in minute)`}
								onChange={(e) => setPomoTime(e.target.value)}
							/>
							<button
								type='submit'
								className='bg-[#b64448] h-16 w-60 rounded-lg border-none outline-none'
							>
								Submit
							</button>
						</form>
					</div>
				</Modal>
			</div>
			<div className='h-28 w-full flex items-center justify-center font-semibold text-xl'>
				<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-start xl:justify-around'>
					<RingProgress
						label={
							<div className='flex items-center justify-center'>
								{experience.level}
							</div>}
						sections={[
							{ value: experience.xp ?? 0, color: '#c64b4f' }
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
							src={user.avatar.length !== 0 ? user.avatar : PomodoroLogo}
							alt='User photo'
						/>
					</div>
				</div>
			</div>
			<div className='h-16 w-full flex items-center justify-start font-semibold text-xl'>
				<span className='ml-5'>Your favorites tasks ({tasks.length}):</span>
			</div>
			{tasks.map((task: TaskProps) => {
				return (
					<TaskFavorite title={task.title} id={task.id} key={task.id} />
				)
			})}
		</div>
	)
}
