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
		nick: '',
		xp: 0
	},
	loading: false
})
const provider = new GoogleAuthProvider()

interface AuthContextProps {
	handleLoginGoogle: () => Promise<void>
	getUser: () => Promise<void>
	logout: () => Promise<void>
	user: UserProps
	loading: boolean
}

interface UserProps {
	name: string
	email: string
	avatar: string
	nick: string
	xp: 0
}

export function AuthProvider(props: any) {
	const navigate = useNavigate()
	const [user, setUser] = useState<UserProps>({
		avatar: '',
		email: '',
		name: '',
		nick: '',
		xp: 0
	})
	const [loading, setLoading] = useState(false)

	async function handleLoginGoogle() {
		setLoading(true)
		signInWithPopup(auth, provider)
			.then((result) => {
				setUser({
					name: result.user.displayName ?? '',
					email: result.user.email ?? '',
					avatar: result.user.photoURL ?? '',
					nick: '@testando',
					xp: 0
				})
				setLoading(false)
				navigate('/')
			}).catch((error) => {
				console.log(error.message)
			})
		setLoading(false)
	}

	async function getUser() {
		setLoading(true)
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName ?? '',
					email: user.email ?? '',
					avatar: user.photoURL ?? '',
					nick: '@testando',
					xp: 0
				})
			} else {
				console.log('Not user')
			}
		})
		setLoading(false)
	}

	async function logout() {
		setLoading(true)
		signOut(auth).then(() => {
			console.log('Logout sucess!')
			setLoading(false)
			navigate('/login')
		}).catch((error) => {
			console.log(error)
		})
		setLoading(false)
	}

	return (
		<AuthContext.Provider value={{ handleLoginGoogle, getUser, logout, user, loading }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
