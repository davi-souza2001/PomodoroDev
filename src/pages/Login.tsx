import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import backgroundLogin from '../../public/backgroundLogin.svg'
import googleIcon from '../../public/googleIcon.svg'
import githubIcon from '../../public/githubIcon.svg'
import UseAuth from '../data/hook/UseAuth'

export function Login() {
	const navigate = useNavigate()
	const [loginArea, setLoginArea] = useState(false)

	const { handleLoginGoogle, getExperience } = UseAuth()

	function handleOpenLoginArea() {
		setLoginArea(!loginArea)
	}

	return (
		<div className={`h-screen w-screen flex items-center justify-start flex-col ${!loginArea && 'xl:flex-row'} bg-[#181A20] font-poppins`}>
			{loginArea ?
				<div>
					<div className='h-60 w-full flex items-center justify-center font-semibold text-5xl'>
						<span>Let's you in</span>
					</div>
					<div className='h-60 w-full flex items-center justify-start flex-col'>
						<div
							className='bg-[#292c37] h-14 w-80 rounded-lg font-semibold cursor-pointer flex items-center justify-center mb-3'
						>
							<img className='h-10' src={googleIcon} alt='Google Icon' />
							<button className='ml-3' onClick={handleLoginGoogle}>Continue with Google</button>
						</div>
						<div
							className='bg-[#292c37] h-14 w-80 rounded-lg font-semibold cursor-pointer flex items-center justify-center'
						>
							<img className='h-10' src={githubIcon} alt='Github Icon' />
							<button className='ml-3' onClick={() => navigate('/register')}>Continue with Github</button>
						</div>
					</div>
				</div>
				:
				<div>
					<div className='h-80 w-screen mt-10 xl:w-1/2 '>
						<img className='h-full w-screen xl:w-2/2'
							src={backgroundLogin} alt='backgroundLogin' />
					</div>
					<div className='h-44 w-full flex items-center justify-center font-semibold text-3xl p-5'>
						<span className='text-center'>Your Perfect Pomodoro for Planning your activities</span>
					</div>
				</div>
			}
			<div className='h-36 w-screen flex items-center justify-center xl:h-screen xl:flex-col'>
				<div className={`hidden ${!loginArea && 'xl:flex'} h-44 w-full items-center justify-center font-semibold text-5xl p-5`}>
					<span>Pomodoro dev</span>
				</div>
				<div className={`hidden ${!loginArea && 'xl:flex'} h-44 w-full items-center justify-center font-semibold text-2xl p-5`}>
					<span>Your time better managed by you</span>
				</div>
				<button
					className='bg-[#b64448] h-14 w-80 rounded-lg font-semibold text-xl cursor-pointer'
					onClick={handleOpenLoginArea}
				>
					{loginArea ? 'Back' : 'Next'}
				</button>
			</div>
		</div>
	)
}
