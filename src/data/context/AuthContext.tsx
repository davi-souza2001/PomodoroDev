import { createContext, useState } from 'react'

const AuthContext = createContext<AuthContextProps>({})

interface AuthContextProps {
	test?: string
}

export function AuthProvider(props: any) {
	const [test, setTest] = useState('Adasdasdas')

	return (
		<AuthContext.Provider value={{ test }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
