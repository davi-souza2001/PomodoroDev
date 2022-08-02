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
			<div className='h-full w-40 flex items-center justify-around text-xl font-semibold'>
				<img
					className='h-full w-1/2 p-1'
					src={PomodoroLogo} alt='logo' />
				<p className='mr-10'>Pomo</p>
			</div>
			<div className='h-full w-10 flex items-center justify-center text-xl font-semibold'>
				<button onClick={handleClick}>
					<HiMenu className='text-3xl'/>
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
		</div>
	)
}
