import { createContext, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

import { auth } from '../../firebase/config'

const AuthContext = createContext<AuthContextProps>({
	handleLoginGoogle: () => Promise.resolve(),
	getUser: () => Promise.resolve(),
	logout: () => Promise.resolve()
})
const provider = new GoogleAuthProvider()

interface AuthContextProps {
	handleLoginGoogle: () => Promise<void>
	getUser: () => Promise<void>
	logout: () => Promise<void>
}

export function AuthProvider(props: any) {

	async function handleLoginGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user
				console.log(user)
			}).catch((error) => {
				console.log(error.message)
			})
	}

	async function getUser() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user)
			} else {
				console.log('Not user')
			}
		})
	}

	async function logout() {
		signOut(auth).then(() => {
			console.log('Logout sucess!')
		}).catch((error) => {
			console.log(error)
		})
	}

	return (
		<AuthContext.Provider value={{ handleLoginGoogle, getUser, logout }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
