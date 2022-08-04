import { createContext, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

import { auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext<AuthContextProps>({
	handleLoginGoogle: () => Promise.resolve(),
	getUser: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	user: {
		avatar: '',
		email: '',
		name: '',
		nick: ''
	}
})
const provider = new GoogleAuthProvider()

interface AuthContextProps {
	handleLoginGoogle: () => Promise<void>
	getUser: () => Promise<void>
	logout: () => Promise<void>
	user: UserProps
}

interface UserProps {
	name: string,
	email: string,
	avatar: string,
	nick: string
}

export function AuthProvider(props: any) {
	const navigate = useNavigate()
	const [user, setUser] = useState<UserProps>({
		avatar: '',
		email: '',
		name: '',
		nick: ''
	})

	async function handleLoginGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				setUser({
					name: result.user.displayName ?? '',
					email: result.user.email ?? '',
					avatar: result.user.photoURL ?? '',
					nick: '@testando'
				})
				navigate('/')
			}).catch((error) => {
				console.log(error.message)
			})
	}

	async function getUser() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName ?? '',
					email: user.email ?? '',
					avatar: user.photoURL ?? '',
					nick: '@testando'
				})
			} else {
				console.log('Not user')
			}
		})
	}

	async function logout() {
		signOut(auth).then(() => {
			console.log('Logout sucess!')
			navigate('/login')
		}).catch((error) => {
			console.log(error)
		})
	}

	return (
		<AuthContext.Provider value={{ handleLoginGoogle, getUser, logout, user }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
