import { Routes, Route } from 'react-router-dom'
import { ForceAuth } from './components/ForceAuth'
import { AuthProvider } from './data/context/AuthContext'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Pomodoro } from './pages/Pomodoro'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'
import { Tasks } from './pages/Tasks'

export default function App() {
	return (
		<AuthProvider>
			<ForceAuth>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/:pomodoro' element={<Pomodoro />} />
				</Routes>
			</ForceAuth>
		</AuthProvider>
	)
}
