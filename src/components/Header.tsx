import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import PomodoroLogo from '../../public/PomodoroLogo.svg'

export function Header() {
	const navigate = useNavigate()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const openMenu = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div className='h-12 w-screen bg-[#14151b] flex items-center justify-between'>
			<div
			onClick={() => navigate('/')}
			className='h-full w-40 flex items-center justify-around text-xl font-semibold cursor-pointer'
			>
				<img
					className='h-full w-1/2 p-1'
					src={PomodoroLogo} alt='logo' />
				<p className='mr-10'>Pomo</p>
			</div>
			<div className='h-full w-10 flex items-center justify-center text-xl font-semibold xl:hidden'>
				<button onClick={handleClick}>
					<HiMenu className='text-3xl' />
				</button>
				<Menu
					anchorEl={anchorEl}
					open={openMenu}
					onClose={handleClose}
				>
					<MenuItem
						style={{
							fontFamily: 'Poppins'
						}}
						onClick={() => {
							navigate('/')
						}}>
						Home
					</MenuItem>
					<MenuItem
						style={{
							fontFamily: 'Poppins'
						}}
						onClick={() => {
							navigate('/tasks')
						}}>
						Tasks
					</MenuItem>
					<MenuItem
						style={{
							fontFamily: 'Poppins'
						}}
						onClick={() => {
							navigate('/profile')
						}}>
						Profile
					</MenuItem>
				</Menu>
			</div>
			<div className='hidden xl:h-full xl:w-64 xl:flex xl:items-center xl:justify-around xl:text-xl xl:font-semibold'>
				<span
					className='cursor-pointer'
					onClick={() => {
						navigate('/')
					}}>
					Home
				</span>
				<span
					className='cursor-pointer'
					onClick={() => {
						navigate('/tasks')
					}}>
					Tasks
				</span>
				<span
					className='cursor-pointer'
					onClick={() => {
						navigate('/profile')
					}}>
					Profile
				</span>
			</div>
		</div>
	)
}
