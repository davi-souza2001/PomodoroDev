import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { collection, onSnapshot, doc, query, where, setDoc } from 'firebase/firestore'

import { auth, db } from '../../firebase/config'

const AuthContext = createContext<AuthContextProps>({
	handleLoginGoogle: () => Promise.resolve(),
	getUser: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	getTasks: () => Promise.resolve(),
	getExperience: () => Promise.resolve(),
	handleAddTask: (e: React.FormEvent<HTMLFormElement>, time: number, title: string, email: string) => Promise.resolve(),
	user: {
		avatar: '',
		email: '',
		name: '',
		nick: '',
		xp: 0
	},
	loading: false,
	tasks: [{
		id: 0,
		email: '',
		time: 0,
		title: '',
		favorite: false
	}],
	timePomo: 0,
	experience: {}
})

const provider = new GoogleAuthProvider()

interface AuthContextProps {
	handleLoginGoogle: () => Promise<void>
	getUser: () => Promise<void>
	logout: () => Promise<void>
	getTasks: () => Promise<void>
	getExperience: () => Promise<void>
	handleAddTask: (e: React.FormEvent<HTMLFormElement>, time: number, title: string, email: string) => Promise<void>
	user: UserProps
	loading: boolean
	tasks: TaskProps[]
	timePomo: number
	experience: ExperienceProps
}

interface UserProps {
	name: string
	email: string
	avatar: string
	nick: string
	xp: 0
}

export interface TaskProps {
	id: number
	email: string
	time: number
	title: string
	favorite: boolean
}

export interface ExperienceProps {
	email?: string
	xp?: number
	level?: number
}

export function AuthProvider(props: any) {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [tasks, setTasks] = useState<TaskProps[]>([])
	const [user, setUser] = useState<UserProps>({
		avatar: '',
		email: '',
		name: '',
		nick: '',
		xp: 0
	})
	const [experience, setExperience] = useState<ExperienceProps>({})
	const [timePomo] = useState(0)

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
				getExperience()
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

	async function handleAddTask(e: React.FormEvent<HTMLFormElement>, time: number, title: string, email: string) {
		e.preventDefault()
		if (time < 0) {
			const data = {
				id: Math.floor(Math.random() * 999999999),
				time: 0,
				title,
				email,
				favorite: false
			}

			const newTaskRef = doc(collection(db, 'tasks'))

			await setDoc(newTaskRef, data)

		} else if (title.length === 0) {
			const data = {
				id: Math.floor(Math.random() * 999999999),
				time,
				title: 'Sem título',
				email,
				favorite: false
			}

			const newTaskRef = doc(collection(db, 'tasks'))

			await setDoc(newTaskRef, data)

		} else {
			const data = {
				id: Math.floor(Math.random() * 999999999),
				time,
				title,
				email,
				favorite: false
			}

			const newTaskRef = doc(collection(db, 'tasks'))

			await setDoc(newTaskRef, data)
		}
	}

	async function getTasks() {
		const q = query(collection(db, 'tasks'), where('email', '==', user.email))
		onSnapshot(q, (querySnapshot) => {
			const tasks: TaskProps[] = []
			querySnapshot.forEach((doc) => {
				tasks.push(doc.data() as TaskProps)
			})
			setTasks(tasks)
		})
	}

	async function getExperience() {
		if (user.email !== '') {
			const q = query(collection(db, 'experience'), where('email', '==', user.email))
			onSnapshot(q, async (querySnapshot) => {
				if (querySnapshot.empty) {
					console.log('asd')
					console.log('Não tem experience')
					const data: ExperienceProps = {
						email: user.email,
						level: 1,
						xp: 0
					}
					setExperience(data)

					// const newExperienceRef = doc(collection(db, 'experience'))

					// await setDoc(newExperienceRef, data)
				} else {
					console.log(' tem experience')
					querySnapshot.forEach(async (result) => {
						setExperience(result.data())
					})
				}
			})
		}
	}

	return (
		<AuthContext.Provider value={{
			handleLoginGoogle,
			getUser,
			logout,
			user,
			loading,
			handleAddTask,
			getTasks,
			getExperience,
			tasks,
			experience,
			timePomo
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
