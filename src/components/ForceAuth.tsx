import UseAuth from "../data/hook/UseAuth"

interface ForceAuthProps {
	children: React.ReactNode
}

export function ForceAuth(props: ForceAuthProps) {
	const { loading } = UseAuth()

	return (
		<>
			{
				loading ? (
					<div className='h-screen w-screen flex items-center justify-center' >
						<h1>Loading</h1>
					</div>
				)
					:
					props.children
			}
		</>
	)
}
