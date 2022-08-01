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
			<div className='h-20 w-full flex items-center justify-start font-semibold text-2xl'>
				<span className='ml-10'>Morning, Davi 👋</span>
			</div>
			<div className='h-28 w-full flex items-center justify-center font-semibold text-2xl'>
				<div className='h-full w-[90%] bg-[#23262f] p-10 rounded-lg flex items-center justify-center'>
					<span>Morning, Davi 👋</span>
				</div>
			</div>
		</div>
	)
}
