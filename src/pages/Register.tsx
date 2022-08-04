import { useNavigate } from 'react-router-dom'

import githubIcon from '../../public/githubIcon.svg'

export function Register() {
	const navigate = useNavigate()

	return (
		<div className='overflow-x-hidden h-screen w-screen bg-[#181A20] font-poppins'>
			<div className='h-28 w-screen flex items-center justify-center text-4xl font-semibold'>
				<h1>Fill your profile</h1>
			</div>
			<div className='h-28 w-screen flex items-center justify-center text-xl p-10'>
				<p className='text-center'>Dont't worry, you can change this later, okay?</p>
			</div>
			<div className='h-28 w-screen flex items-center justify-center text-xl p-10'>
				<img src={githubIcon} alt='user image' className='h-24 rounded-full' />
			</div>
			<div className='h-64 w-screen flex items-center justify-center flex-col p-10'>
				<input
					className='h-12 w-96 mb-7 rounded-lg bg-[#21242c] border-none outline-none'
					type="text"
					placeholder='Nome'
				/>
				<input
					className='h-12 w-96 rounded-lg bg-[#21242c] border-none outline-none'
					type="text"
					placeholder='Email'
				/>
			</div>
			<div className='h-20 w-screen flex items-center justify-center text-xl'>
				<button
				className='bg-[#b64448] h-16 w-60 rounded-lg'
				onClick={() => navigate('/')}
				>
					Submit
				</button>
			</div>
		</div>
	)
}
