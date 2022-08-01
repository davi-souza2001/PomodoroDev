import PomodoroLogo from '../../public/PomodoroLogo.svg'

export function Header() {
	return (
		<div className='h-12 w-screen bg-[#14151b]'>
			<div className='h-full w-40 flex items-center justify-around text-xl font-semibold'>
				<img
					className='h-full w-1/2 p-1'
					src={PomodoroLogo} alt='logo' />
				<p className='mr-10'>Pomo</p>
			</div>
		</div>
	)
}
